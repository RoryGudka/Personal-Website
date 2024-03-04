import { Box, Typography } from "@mui/material";

import DesktopDisplayOnly from "../DesktopDisplayOnly";
import MobileDisplayOnly from "../MobileDisplayOnly";
import { ReactElement } from "react";
import { School } from "@mui/icons-material";

interface Props {
  Icon: any;
  title: string;
  subtitle: string;
  timeline: string;
  bullets: string[];
  link?: string;
  noBottomPadding?: boolean;
}

const ResumeSection: React.FC<Props> = ({
  Icon,
  title,
  subtitle,
  timeline,
  bullets,
  link,
  noBottomPadding,
}) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" gap="16px">
        <Box
          height="36px"
          width="36px"
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="3px solid white"
        >
          <Icon sx={{ color: "white", fontSize: "22px" }} />
        </Box>
        <Box
          flex="1 0 0"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3" color="white">
            {title}
          </Typography>
          <DesktopDisplayOnly>
            <Typography variant="h5" color="white">
              {timeline}
            </Typography>
          </DesktopDisplayOnly>
        </Box>
      </Box>
      <Box display="flex" alignItems="stretch" gap="16px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="stretch"
          width="36px"
          flexShrink="0"
        >
          <Box width="2px" bgcolor="white" />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={600} color="white">
            {subtitle}
          </Typography>
          <MobileDisplayOnly>
            <Typography variant="h5" color="white" mt="8px">
              {timeline}
            </Typography>
          </MobileDisplayOnly>
          <Box
            pt="8px"
            pb={noBottomPadding ? "0px" : "16px"}
            display="flex"
            flexDirection="column"
            gap="2px"
          >
            {bullets.map((bullet) => (
              <Box key={bullet} display="flex" alignItems="stretch" gap="16px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box
                    width="8px"
                    height="8px"
                    bgcolor="white"
                    borderRadius="100%"
                  />
                </Box>
                <Typography color="white" fontSize="18px">
                  {bullet}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResumeSection;
