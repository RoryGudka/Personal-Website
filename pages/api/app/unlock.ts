import { NextApiRequest, NextApiResponse } from "next";
import {
  addAction,
  validateDevice,
  validateToken,
} from "../../../libs/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { deviceId, accessToken } = req.body;

  const details = await validateToken(res, accessToken);
  if (!details) return;

  const { username, email } = details;
  console.info(`Username: ${username}, Email: ${email}`);

  const device = await validateDevice(res, email, deviceId);
  if (!device) return;

  try {
    await addAction(deviceId, "unlock");
    res.json({ message: "Unlock action added for the device." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Unable to update the database." });
  }
}
