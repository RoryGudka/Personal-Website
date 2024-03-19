import * as AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-2",
  accessKeyId: process.env.USER_ID,
  secretAccessKey: process.env.USER_SECRET,
});
export const ses = new AWS.SESV2();

export const sendEmail = async (content: string) => {
  console.log(process.env.USER_ID);
  await ses
    .sendEmail({
      FromEmailAddress: "Personal Website <rory.gudka@gmail.com>",
      Destination: { ToAddresses: ["rory.gudka@gmail.com"] },
      Content: {
        Simple: {
          Subject: {
            Data: "New message on personal website",
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: content,
              Charset: "UTF-8",
            },
          },
        },
      },
    })
    .promise();
};
