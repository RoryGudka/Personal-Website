import { NextApiResponse } from "next";
import axios from "axios";

export const post = async (path: string, body?: any) => {
  return await axios.post(`/api${path}`, body);
};

export const sendText = (
  res: NextApiResponse,
  status: number,
  body: string,
) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", Buffer.byteLength(body));
  res.status(status).end(body);
};
