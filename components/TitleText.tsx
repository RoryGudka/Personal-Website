import { Box, Typography } from "@mui/material";

import React from "react";

interface Props {
  small?: boolean;
  large?: boolean;
  underline?: boolean;
  center?: boolean;
  children: any;
  white?: boolean;
}

const TitleText: React.FC<Props> = ({
  small,
  underline,
  center,
  children,
  white,
}) => {
  return (
    <Box
      sx={
        white
          ? { color: "white" }
          : {
              background:
                "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }
      }
    >
      <Typography
        fontSize={small ? "28px" : "42px"}
        lineHeight="1"
        pb="8px"
        textAlign={center ? "center" : "left"}
      >
        <b>{children}</b>
      </Typography>
      {underline && (
        <Box
          width="100%"
          height="2px"
          sx={{
            background:
              "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
          }}
        />
      )}
    </Box>
  );
};

export default TitleText;
