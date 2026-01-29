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
  res.setHeader("Content-Encoding", "identity");
  res.setHeader("Connection", "close");
  res.status(status).send(body);
};
