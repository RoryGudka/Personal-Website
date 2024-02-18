import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onlyClipBottom?: boolean;
  onlyClipTop?: boolean;
}

const GreenSection: React.FC<Props> = ({
  children,
  onlyClipBottom,
  onlyClipTop,
}) => {
  if (onlyClipBottom) {
    return (
      <Box
        position="relative"
        width="100%"
        sx={{
          background: "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), 0% 100%)",
          overflow: "hidden",
        }}
      >
        {children}
        <Box height="100px" />
      </Box>
    );
  } else if (onlyClipTop) {
    return (
      <Box
        position="relative"
        width="100%"
        sx={{
          background: "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
          clipPath: "polygon(0% 100px, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <Box height="100px" />
        {children}
      </Box>
    );
  } else {
    return (
      <Box
        position="relative"
        width="100%"
        sx={{
          background: "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
          clipPath:
            "polygon(0% 100px, 100% 0%, 100% calc(100% - 100px), 0% 100%)",
        }}
      >
        <Box height="100px" />
        {children}
        <Box height="100px" />
      </Box>
    );
  }
};

export default GreenSection;
