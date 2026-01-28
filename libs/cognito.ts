import { CognitoUserPool } from "amazon-cognito-identity-js";
import { CognitoJwtVerifier } from "aws-jwt-verify";
import { CognitoIdentityServiceProvider } from "aws-sdk";

export const userPool = new CognitoUserPool({
  UserPoolId: process.env.USER_POOL_ID || "",
  ClientId: process.env.USER_POOL_CLIENT_ID || "",
});

export const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.USER_POOL_ID || "",
  clientId: process.env.USER_POOL_CLIENT_ID || "",
  tokenUse: "access",
});

export const cognito = new CognitoIdentityServiceProvider({
  region: process.env.AWS_REGION || "",
});
