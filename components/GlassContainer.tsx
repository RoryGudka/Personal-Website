import { Box, BoxProps } from "@mui/material";

import { ReactNode } from "react";

interface Props extends BoxProps {
  children: ReactNode;
}

const GlassContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        WebkitBackdropFilter: "blur(5px)",
        ...(props?.sx || {}),
      }}
    >
      {children}
    </Box>
  );
};

export default GlassContainer;
