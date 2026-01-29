import { cognito, verifier } from "./cognito";

import { NextApiResponse } from "next";
import { dynamodb } from "./dynamodb";

export const validateToken = async (res: NextApiResponse, token: string) => {
  try {
    if (!token) {
      res.status(401).json({ error: "Access token is missing." });
      return null;
    }

    const { username } = await verifier.verify(token);
    const user = await cognito.getUser({ AccessToken: token }).promise();
    const email = user.UserAttributes?.find(
      (attr) => attr.Name === "email",
    )?.Value;

    if (!email) {
      res.status(500).json({ error: `Email for access token not found` });
      return null;
    } else return { username, email };
  } catch (error) {
    res.status(401).json({ error: "Invalid access token." });
    return null;
  }
};

export const getLinkedDevices = async (email: string) => {
  const devices = (
    await dynamodb.scan({
      TableName: "LockmateDevices",
      FilterExpression: "contains(linkedUserIds, :userId)",
      ExpressionAttributeValues: { ":userId": email },
    })
  ).Items;
  return devices;
};

export const validateDevice = async (
  res: NextApiResponse,
  email: string,
  deviceId: string,
) => {
  try {
    if (!deviceId) {
      res.status(401).json({ error: "Device id is missing." });
      return null;
    }

    const devices = await getLinkedDevices(email);
    if (!devices) {
      res.status(500).json({ error: `No linked devices found.` });
      return null;
    }

    const device = devices.find((device) => device.deviceId === deviceId);
    if (!device) {
      res.status(500).json({ error: `Device ${deviceId} not linked.` });
      return null;
    }

    return device;
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Unable to get validate device." });
    return;
  }
};

export const addAction = async (
  deviceId: string,
  action: string,
  params?: { [key: string]: string },
) => {
  const timestamp = new Date().toISOString();
  await dynamodb.put({
    TableName: "LockmateActions",
    Item: {
      deviceId,
      timestamp,
      action,
      ...(params || {}),
    },
  });
};

export const validateSecretKey = async (
  res: NextApiResponse,
  deviceId: string,
  secretKey: string,
) => {
  try {
    if (!secretKey) {
      res.status(401).send("ERROR - no secret key");
      return null;
    }

    const device = await dynamodb.get({
      TableName: "LockmateDevices",
      Key: { deviceId },
    });

    if (!device || !device.Item || device.Item.deviceSecretKey != secretKey) {
      res.status(401).send("ERROR - invalid secret key");
      return null;
    }

    return device.Item;
  } catch (e) {
    console.error(e);
    res.status(500).send(`ERROR - ${e}`);
    return null;
  }
};
