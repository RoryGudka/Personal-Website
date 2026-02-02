import { NextApiRequest, NextApiResponse } from "next";

import { dynamodb } from "../../../libs/dynamodb";
import { handleCors } from "../../../libs/cors";
import { sendText } from "@/libs/api";
import { validateSecretKey } from "../../../libs/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (handleCors(req, res)) return;

  if (req.method !== "GET") {
    return sendText(res, 405, "ERROR - Method not allowed");
  }

  const deviceId = req.query.device_id as string;
  const secretKey = req.query.secret_key as string;
  const isLocked = req.query.is_locked as string;
  const batteryStatus = req.query.battery_status as string;
  const isUnlockCalibrated = req.query.is_unlock_calibrated as string;
  const isLockCalibrated = req.query.is_lock_calibrated as string;
  const availableNetworks =
    (req.query.available_networks as string)?.split(",") || [];

  try {
    const device = await validateSecretKey(res, deviceId, secretKey);
    if (!device) return;

    await dynamodb.update({
      TableName: "LockmateDevices",
      Key: { deviceId },
      UpdateExpression:
        "SET isLocked = :isLocked, batteryStatus = :batteryStatus, isUnlockCalibrated = :isUnlockCalibrated, isLockCalibrated = :isLockCalibrated, availableNetworks = :availableNetworks, lastUpdateTimestamp = :timestamp",
      ExpressionAttributeValues: {
        ":timestamp": new Date().toISOString(),
        ":isLocked": isLocked === "T",
        ":isUnlockCalibrated": isUnlockCalibrated === "T",
        ":isLockCalibrated": isLockCalibrated === "T",
        ":availableNetworks": availableNetworks,
        ":batteryStatus":
          batteryStatus === "H"
            ? "high"
            : batteryStatus === "M"
              ? "medium"
              : "low",
      },
    });

    return sendText(res, 200, `OK`);
  } catch (error) {
    console.error("Error:", error);
    return sendText(res, 500, `ERROR - ${error}`);
  }
}
