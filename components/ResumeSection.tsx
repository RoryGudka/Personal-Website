import { Box, Typography } from "@mui/material";

import { ReactElement } from "react";
import { School } from "@mui/icons-material";

interface Props {
  Icon: any;
  title: string;
  subtitle: string;
  bullets: string[];
  link?: string;
  noBottomPadding?: boolean;
}

const ResumeSection: React.FC<Props> = ({
  Icon,
  title,
  subtitle,
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
        <Typography
          color="white"
          fontSize="28px"
          lineHeight={1}
          fontWeight={600}
        >
          {title}
        </Typography>
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
          <Typography color="white" fontSize="28px" lineHeight={1} mb="8px">
            {subtitle}
          </Typography>
          <Typography color="white" fontSize="20px" lineHeight={1}>
            August 2020 - May 2024 * 4 yr
          </Typography>
          <Box pl="24px" pt="16px" pb={noBottomPadding ? "0px" : "16px"}>
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
                <Typography color="white" fontSize="20px">
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
