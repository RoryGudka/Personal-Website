import type { NextApiRequest, NextApiResponse } from "next";

import { sendEmail } from "../../libs/ses";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { contact, message } = req.body;

    if (req.method === "POST") {
      if (!contact) {
        return res
          .status(400)
          .json({ msg: "Please include your preferred contact method" });
      }
      if (!message) {
        return res.status(400).json({ msg: "Please include a message" });
      }

      const text = `From: ${contact}\n\n${message}`;
      await sendEmail(text);
      return res.status(200).json({ msg: "Success" });
    } else {
      return res.status(405).json({ msg: "Invalid request method" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json((e as any).message!);
  }
}
