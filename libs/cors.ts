import { NextApiRequest, NextApiResponse } from "next";

export function setCorsHeaders(res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400"); // 24 hours
}

export function handleCors(req: NextApiRequest, res: NextApiResponse): boolean {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true;
  }

  return false;
}
