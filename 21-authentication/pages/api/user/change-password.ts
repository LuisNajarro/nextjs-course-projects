import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "@/lib/db";
import { hashPassword, verifyPassword } from "@/lib/auth";

type RequestData = {
  oldPassword: string;
  newPassword: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const data = req.body as RequestData;
  const oldPassword = data.oldPassword;
  const newPassword = data.newPassword;

  const client = await connectToDatabase();

  const usersCollection = client.db().collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User not found." });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const passwordAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordAreEqual) {
    res.status(403).json({ message: "Invalid password." });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } },
  );

  client.close();
  res.status(200).json({ message: "Password updated!" });
}

export default handler;
