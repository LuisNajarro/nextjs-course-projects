import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import type { ContactMessage } from "@/lib/types";

type RequestData = {
  email: string;
  name: string;
  message: string;
};

type ResponseData = { message: string };

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body as RequestData;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage: ContactMessage = { email, name, message };

    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URL!);
    } catch {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully stored message!" });
  }
}

export default handler;
