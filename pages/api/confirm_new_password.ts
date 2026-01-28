import { NextApiRequest, NextApiResponse } from "next";
import { CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "../../libs/cognito";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, verificationCode, newPassword } = req.body;

  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

  cognitoUser.confirmPassword(verificationCode, newPassword, {
    onSuccess: function () {
      res.send({ message: "Password confirmed successfully" });
    },
    onFailure: function (err) {
      res
        .status(400)
        .send({ message: "Password confirmation failed", error: err });
    },
  });
}
