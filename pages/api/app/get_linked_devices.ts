import { NextApiRequest, NextApiResponse } from "next";
import { getLinkedDevices, validateToken } from "../../../libs/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { accessToken } = req.query as { [key: string]: string };

    const details = await validateToken(res, accessToken);
    if (!details) return;

    const { username, email } = details;
    console.info(`Username: ${username}, Email: ${email}`);

    const devices = await getLinkedDevices(email);
    res.json({ devices });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Unable to get linked devices." });
  }
}
