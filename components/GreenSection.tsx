import { Box } from "@mui/material";
import Particles from "react-tsparticles";
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
          <Particles
            id={id}
            width="120%"
            height="120%"
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
                color: { value: "#ffffff" },
                shape: { type: "circle" },
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
                  onhover: { enable: true, mode: "grab" },
                  onclick: { enable: true, mode: "push" },
                  resize: false,
                },
                modes: {
                  grab: { distance: 140, line_linked: { opacity: 1 } },
                  push: { particles_nb: 1 },
                },
              },
              retina_detect: true,
            }}
          />
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
