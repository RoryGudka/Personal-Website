import { Box, Typography } from "@mui/material";

import FadeIn from "../FadeIn";
import Project from "./Project";
import TitleText from "../TitleText";
import brain_registration from "@/public/brain_registration.png";
import ekg from "@/public/ekg.png";
import { mobileSx } from "@/libs/breakpoints";
import smart_lock from "@/public/smart_lock.jpg";

const Projects = () => {
  return (
    <Box
      id="projects"
      display="flex"
      justifyContent="center"
      sx={{ p: "42px", ...mobileSx({ px: "5vw" }) }}
    >
      <Box display="flex" flexDirection="column" maxWidth="726px">
        <FadeIn>
          <Box pb="32px">
            <TitleText>Projects</TitleText>
          </Box>
        </FadeIn>
        <Box display="flex" flexDirection="column" gap="32px">
          <FadeIn>
            <Project
              image={smart_lock}
              title="Ultra low power smart lock"
              overview="Originally developed as a part of my capstone project at the University of Virginia, I later continued my work to develop this consumer-ready smart lock. It functions as a retrofit that can be placed overtop of the deadbolt on the interior of the user’s door, and can be controlled through an app on the user’s phone. It also operates with ultra-low power consumption, allowing it to last for a year between battery changes. "
              details={
                <>
                  <Typography fontSize="18px">
                    In order to maintain this ultra low power consumption, I
                    designed this smart lock to have a component mounted on the
                    user’s lock, and another component mounted on a nearby power
                    outlet. The outlet-mounted component handles the relatively
                    high power communications such as WiFi communications with
                    the server and bluetooth communications for device setup,
                    while the lock-mounted component primarily stays in low
                    power mode, only waking up once every couple seconds to poll
                    the communicator for new requests from the user.
                  </Typography>
                  <Typography fontSize="18px">
                    I also developed an app that allows the user to create an
                    account using AWS Cognito, connect their smart lock to a
                    local network using Bluetooth, and then view and control the
                    status of their device from anywhere in the world as long as
                    they have an internet connection. I also put various
                    security measures into place, including pairing passcodes,
                    encryption, and protection against replay attacks
                  </Typography>
                </>
              }
            />
          </FadeIn>
          <FadeIn>
            <Project
              image={brain_registration}
              title="MRI image registration"
              overview="As one of my final projects at the University of Virginia, I picked an active research topic in AI, which involved the domain gap generalization of an image registration model. To create this, several simple image datasets (MNist and Google QuickDraw) were input to a VoxelMorph model as training data, and the model was tested on MRI scans of brains to see how well the model could extract registration patterns for images outside of the domain."
            />
          </FadeIn>
          <FadeIn>
            <Project
              image={ekg}
              title="Electrocardiogram"
              overview="As an electrical engineering project at the University of Virginia, I worked on the development of a basic electrocardiogram circuit board, which allowed a user to attach electrodes on their wrists and a reference electrode on their ankle to collect a reading of their pulse. This project involved the use of Sallen-Key filters, anti-aliasing filters, moving average filters, instrumentation amplifiers, integrating amplifiers, and isolators. "
            />
          </FadeIn>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
