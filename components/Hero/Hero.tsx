import { Box, Typography } from "@mui/material";

import Image from "next/image";
import Navigation from "./Navigation";
import { Typewriter } from "react-simple-typewriter";
import img from "@/public/me.png";

const Hero = () => {
  return (
    <Box width="100%" height="100dvh" display="flex">
      <Box
        width="50%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column">
          <Typography color="white" fontSize="94px">
            Rory Gudka
          </Typography>
          <Typography
            color="white"
            fontSize="42px"
            height="42px"
            lineHeight={1}
          >
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
        <Image
          src={img}
          width={2142 / 4}
          height={3435 / 4}
          alt=""
          style={{ zIndex: 1 }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
