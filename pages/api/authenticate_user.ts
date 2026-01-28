import { NextApiRequest, NextApiResponse } from "next";
import { validateSecretKey } from "../../libs/auth-helpers";
import { dynamodb } from "../../libs/dynamodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const deviceId = req.query.device_id as string;
  const secretKey = req.query.secret_key as string;
  const userId = req.query.user_id as string;

  try {
    const device = await validateSecretKey(res, deviceId, secretKey);
    if (!device) return;

    const existingItems = new Set(device.linkedUserIds);
    existingItems.add(userId);

    await dynamodb.update({
      TableName: "LockmateDevices",
      Key: { deviceId },
      UpdateExpression: "SET #linkedUserIds = :userIdsValue",
      ExpressionAttributeNames: {
        "#linkedUserIds": "linkedUserIds",
      },
      ExpressionAttributeValues: {
        ":userIdsValue": Array.from(existingItems),
      },
    });

    return res.send(`{"status": "OK"}`);
  } catch (error) {
    console.error("Error:", error);
    return res.send(`{"status": "ERROR"}`);
  }
}
