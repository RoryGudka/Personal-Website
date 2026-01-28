import { NextApiRequest, NextApiResponse } from "next";
import { validateToken, validateDevice, addAction } from "../../libs/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { deviceId, networkId, networkPassword, accessToken } = req.body;

  const details = await validateToken(res, accessToken);
  if (!details) return;

  const { username, email } = details;
  console.info(`Username: ${username}, Email: ${email}`);

  const device = await validateDevice(res, email, deviceId);
  if (!device) return;

  try {
    await addAction(deviceId, "change_wifi_network", {
      networkId: networkId,
      networkPassword: networkPassword,
    });
    res.json({ message: "Change WiFi network action added for the device." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Unable to update the database." });
  }
}
