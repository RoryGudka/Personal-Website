import { Box, Collapse, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

import { ChevronLeftRounded } from "@mui/icons-material";
import DesktopDisplayOnly from "../DesktopDisplayOnly";
import Image from "next/image";
import MobileDisplayOnly from "../MobileDisplayOnly";
import TitleText from "../TitleText";

interface Props {
  image?: any;
  title: string;
  overview: string;
  details?: ReactNode;
}

const Project: React.FC<Props> = ({ image, title, overview, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <DesktopDisplayOnly>
        <Box pb="12px">
          <TitleText variant="h3">{title}</TitleText>
        </Box>
        <Box display="flex" alignItems="center" gap="16px">
          {image ? (
            <Image
              src={image}
              height={208}
              width={208}
              style={{ borderRadius: "16px" }}
              alt=""
            />
          ) : (
            <Box
              sx={{
                bgcolor: "#bbbbbb",
                borderRadius: "16px",
                height: "200px",
                width: "200px",
                flexShrink: 0,
              }}
            />
          )}
          <Typography fontSize="18px">{overview}</Typography>
        </Box>
        {details && (
          <>
            <Collapse in={showDetails}>
              <Box pt="16px" display="flex" flexDirection="column" gap="16px">
                {details}
              </Box>
            </Collapse>
            <Box
              display="flex"
              justifyContent="center"
              pt="8px"
              sx={{ cursor: "pointer" }}
              onClick={() => setShowDetails(!showDetails)}
            >
              <Typography
                fontSize="16px"
                fontWeight={800}
                fontFamily='"Anta", sans-serif'
                sx={{
                  background:
                    "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                See {showDetails ? "less" : "more"}
              </Typography>
              <ChevronLeftRounded
                sx={{
                  color: "#78cc6d",
                  transition: "0.15s rotate",
                  rotate: showDetails ? "90deg" : "-90deg",
                }}
              />
            </Box>
          </>
        )}
      </DesktopDisplayOnly>
      <MobileDisplayOnly>
        <Box position="relative" width="90vw" height="90vw" mb="16px">
          {image ? (
            <Image src={image} fill style={{ borderRadius: "16px" }} alt="" />
          ) : (
            <Box
              sx={{
                bgcolor: "#bbbbbb",
                borderRadius: "16px",
                height: "100%",
                width: "100%",
                flexShrink: 0,
              }}
            />
          )}
        </Box>
        <Box pb="12px">
          <TitleText variant="h3">{title}</TitleText>
        </Box>
        <Typography fontSize="18px">{overview}</Typography>
        {details && (
          <>
            <Collapse in={showDetails}>
              <Box pt="16px" display="flex" flexDirection="column" gap="16px">
                {details}
              </Box>
            </Collapse>
            <Box
              display="flex"
              justifyContent="center"
              pt="8px"
              sx={{ cursor: "pointer" }}
              onClick={() => setShowDetails(!showDetails)}
            >
              <Typography
                fontFamily='"Anta", sans-serif'
                sx={{
                  background:
                    "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                See {showDetails ? "less" : "more"}
              </Typography>
              <ChevronLeftRounded
                sx={{
                  color: "#78cc6d",
                  transition: "0.15s rotate",
                  rotate: showDetails ? "90deg" : "-90deg",
                }}
              />
            </Box>
          </>
        )}
      </MobileDisplayOnly>
    </>
  );
};

export default Project;
