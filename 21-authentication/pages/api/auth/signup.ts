import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

type RequestData = {
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body as RequestData;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db
    .collection("users")
    .insertOne({ email: email, password: hashedPassword });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
