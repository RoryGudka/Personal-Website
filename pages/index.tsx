import { Box, Typography } from "@mui/material";

import GlassContainer from "@/components/GlassContainer";
import GreenSection from "@/components/GreenSection";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Particles from "react-tsparticles";
import Resume from "@/components/Resume";
import ResumeBackground from "@/components/ResumeBackground";
import TitleText from "@/components/TitleText";
import { Typewriter } from "react-simple-typewriter";
import brain from "@/public/brain.svg";
import circuit from "@/public/circuit.svg";
import img from "@/public/png.png";
import styles from "@/styles/Home.module.css";
import website from "@/public/website.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GreenSection onlyClipBottom>
        <Box width="100%" height="100%" overflow="hidden">
          <Box
            position="absolute"
            top={0}
            left={0}
            width="120dvw"
            height="140dvh"
            ml="-10vw"
            mt="-10vh"
          >
            <Particles
              id="hero"
              width="100%"
              height="120dvh"
              options={{
                fullScreen: false,
                fps_limit: 30,
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000",
                    },
                    polygon: {
                      nb_sides: 5,
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100,
                    },
                  },
                  opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 0.25,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab",
                    },
                    onclick: {
                      enable: true,
                      mode: "push",
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 140,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    } as any,
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
                retina_detect: true,
              }}
            />
          </Box>
        </Box>

        <Box width="100%" height="100dvh">
          <Box
            width="50%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
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
            </Box>
          </Box>
          <Box width="50%" height="100%"></Box>
        </Box>
      </GreenSection>
      <Box p="42px" display="flex" justifyContent="center">
        <Box display="flex" flexDirection="column" gap="42px" maxWidth="726px">
          <Box display="flex" flexDirection="column" gap="8px">
            <TitleText>Web Development</TitleText>
            <Typography fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
              rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
              potenti. Maecenas cursus enim nunc, sed aliquam purus interdum at.
              Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
              condimentum purus imperdiet, viverra odio sed, venenatis ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat est quis mattis sollicitudin.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="8px">
            <TitleText>Electrical Engineering</TitleText>
            <Typography fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
              rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
              potenti. Maecenas cursus enim nunc, sed aliquam purus interdum at.
              Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
              condimentum purus imperdiet, viverra odio sed, venenatis ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat est quis mattis sollicitudin.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="8px">
            <TitleText>Artificial Intelligence</TitleText>
            <Typography fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
              rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
              potenti. Maecenas cursus enim nunc, sed aliquam purus interdum at.
              Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
              condimentum purus imperdiet, viverra odio sed, venenatis ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat est quis mattis sollicitudin.
            </Typography>
          </Box>
        </Box>
      </Box>
      <ResumeBackground>
        <Resume />
      </ResumeBackground>
      <Box>test</Box>
    </>
  );
}
