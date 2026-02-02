import { NextApiRequest, NextApiResponse } from "next";
import { validateDevice, validateToken } from "../../../libs/auth-helpers";

import { dynamodb } from "../../../libs/dynamodb";

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

  const { deviceId, accountId, accessToken } = req.body;

  const details = await validateToken(res, accessToken);
  if (!details) return;

  const { username, email } = details;
  console.info(`Username: ${username}, Email: ${email}`);

  const device = await validateDevice(res, email, deviceId);
  if (!device) return;

  try {
    const existingItems = new Set(device!.linkedUserIds);
    existingItems.delete(accountId);

    await dynamodb.update({
      TableName: "LockmateDevices",
      Key: { deviceId: deviceId },
      UpdateExpression: "SET #linkedUserIds = :userIdsValue",
      ExpressionAttributeNames: {
        "#linkedUserIds": "linkedUserIds",
      },
      ExpressionAttributeValues: {
        ":userIdsValue": Array.from(existingItems),
      },
    });

    res.json({ message: "Disconnected device." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Unable to update the database." });
  }
}
