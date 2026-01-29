import { NextApiRequest, NextApiResponse } from "next";

import { dynamodb } from "../../libs/dynamodb";
import { validateSecretKey } from "../../libs/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const deviceId = req.query.device_id as string;
  const secretKey = req.query.secret_key as string;

  try {
    const device = await validateSecretKey(res, deviceId, secretKey);
    if (!device) return;

    const result = await dynamodb.query({
      TableName: "LockmateActions",
      KeyConditionExpression: "deviceId = :deviceId",
      ExpressionAttributeValues: { ":deviceId": deviceId },
      ScanIndexForward: false,
      Limit: 1,
    });

    if (result && result.Count && result.Items && result.Items[0]) {
      const mostRecentAction = result.Items[0].action;
      res.send(mostRecentAction);

      await Promise.all(
        result.Items.map(async (item) => {
          await dynamodb.delete({
            TableName: "LockmateActions",
            Key: { deviceId: deviceId, timestamp: item.timestamp },
          });
        }),
      );
    } else {
      res.send(`NONE`);
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send(`ERROR`);
  }
}
