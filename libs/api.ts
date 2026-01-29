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
  const buf = Buffer.from(body, "utf8");

  res.statusCode = status;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Encoding", "identity");
  res.setHeader("Content-Length", buf.length);
  res.setHeader("Connection", "close");

  res.end(buf);
};
