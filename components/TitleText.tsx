import { Box, Typography } from "@mui/material";

import React from "react";

interface Props {
  variant?: "h1" | "h2" | "h3";
  small?: boolean;
  large?: boolean;
  underline?: boolean;
  center?: boolean;
  children: any;
  white?: boolean;
}

const TitleText: React.FC<Props> = ({
  variant = "h2",
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
      <Typography variant={variant} textAlign={center ? "center" : "left"}>
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
