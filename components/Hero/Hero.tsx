import { Box, Typography } from "@mui/material";
import { ChevronLeft, KeyboardDoubleArrowDown } from "@mui/icons-material";

import DesktopDisplayOnly from "../DesktopDisplayOnly";
import FadeIn from "../FadeIn";
import Image from "next/image";
import MobileDisplayOnly from "../MobileDisplayOnly";
import Navigation from "./Navigation";
import { Typewriter } from "react-simple-typewriter";
import img from "@/public/me.png";

const Hero = () => {
  const imageHeightPx = 3435;
  const imageWidthPx = 2142;
  const imageHeightDesktopVh = 90;
  const imageWidthDesktopVh =
    (imageWidthPx / imageHeightPx) * imageHeightDesktopVh;
  const imageWidthMobileVw = 55;
  const imageHeightMobileVw =
    (imageHeightPx / imageWidthPx) * imageWidthMobileVw;

  return (
    <>
      <DesktopDisplayOnly>
        <Box width="100%" height="100vh" display="flex">
          <Box
            width="50%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" flexDirection="column">
              <Typography variant="h1" color="white" pb="16px">
                Rory Gudka
              </Typography>
              <Typography variant="h2" color="white" height="42px">
                <Typewriter
                  words={[
                    "Electrical Engineer",
                    "Full Stack Developer",
                    "AI Enthusiast",
                  ]}
                  typeSpeed={30}
                  deleteSpeed={30}
                  delaySpeed={2500}
                  loop
                />
              </Typography>
              <Navigation />
            </Box>
          </Box>
          <Box
            width="50%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <FadeIn>
              <Box
                position="relative"
                height={`${imageHeightDesktopVh}vh`}
                width={`${imageWidthDesktopVh}vh`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  style={{ zIndex: 1, objectFit: "contain" }}
                />
              </Box>
            </FadeIn>
          </Box>
        </Box>
        <Box
          className="animate-flicker"
          position="absolute"
          bottom="108px"
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <ChevronLeft
            sx={{
              color: "white",
              fontSize: "82px",
              rotate: "-90deg",
              transform: "scaleY(1.5)",
            }}
          />
        </Box>
      </DesktopDisplayOnly>
      <MobileDisplayOnly>
        <Box minHeight="100vh">
          <Box px="5vw" pt="5vh" pb="64px">
            <Box display="flex" flexDirection="column">
              <Typography variant="h1" color="white" pb="16px">
                Rory Gudka
              </Typography>
              <Typography variant="h2" color="white" height="32px">
                <Typewriter
                  words={[
                    "Electrical Engineer",
                    "Full Stack Developer",
                    "AI Enthusiast",
                  ]}
                  typeSpeed={30}
                  deleteSpeed={30}
                  delaySpeed={2500}
                  loop
                />
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap="16px">
            <Box display="flex" justifyContent="center">
              <FadeIn>
                <Box
                  position="relative"
                  height={`${imageHeightMobileVw}vw`}
                  width={`${imageWidthMobileVw}vw`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    style={{ zIndex: 1, objectFit: "contain" }}
                  />
                </Box>
              </FadeIn>
            </Box>
            <Box
              className="animate-flicker"
              display="flex"
              justifyContent="center"
            >
              <ChevronLeft
                sx={{
                  color: "white",
                  fontSize: "64px",
                  rotate: "-90deg",
                  transform: "scaleY(1.5)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </MobileDisplayOnly>
    </>
  );
};

export default Hero;
