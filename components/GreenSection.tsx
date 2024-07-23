import { Box } from "@mui/material";
import Particles from "./Particles";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  onlyClipBottom?: boolean;
  onlyClipTop?: boolean;
}

const GreenSection: React.FC<Props> = ({
  id,
  children,
  onlyClipBottom,
  onlyClipTop,
}) => {
  const subnode = (
    <>
      <Box width="100%" height="100%" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          height="100%"
          ml="-10%"
          mt="-10%"
          sx={{ [`#${id}`]: { height: "100%" } }}
        >
          <Particles />
        </Box>
      </Box>
      {children}
    </>
  );

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
        {subnode}
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
        {subnode}
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
        {subnode}
        <Box height="100px" />
      </Box>
    );
  }
};

export default GreenSection;
