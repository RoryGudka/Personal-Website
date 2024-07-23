import { Box, Typography } from "@mui/material";

import FadeIn from "../FadeIn";
import Project from "./Project";
import TitleText from "../TitleText";
import brain_registration from "@/public/brain_registration.png";
import ekg from "@/public/ekg.png";
import minecraft from "@/public/minecraft.png";
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
          <FadeIn>
            <Project
              image={minecraft}
              title="Minecraft calculator"
              overview="As a personal project, I created a fully functional calculator in Minecraft that supports addition, subtraction, multiplication, and division of both positive and negative numbers. The inputs can range from -999 to 999, which are initially stored as three 4-bit BCD numbers and a 1-bit negation boolean, which are later converted into 11-bit binary numbers, and the output is a 22-bit binary number that is later converted to six 4-bit BCD numbers that can realistically range from -998,001 to 998,001."
              details={
                <>
                  <Typography fontSize="18px">
                    In order to complete this project, I created registers using
                    pistons and redstone blocks to toggle on/off states, and I
                    added impulse-based set/reset logic that I could trigger
                    from other parts of the circuit. I also created a display
                    consisting of a 1 segment display for the negative sign, six
                    7-segment displays for the input and output numbers, and a
                    5-segment display for the operator. I then created the
                    actual operation logic, which included a carry ripple adder,
                    a ripple borrow subtractor, an array multiplier, and a
                    restoring divider.
                  </Typography>
                  <Typography fontSize="18px">
                    In order to convert the three BCD numbers into a single
                    binary number, I had to implement a reverse double dabble
                    circuit by implementing shift registers, 4-bit subtractors,
                    and a 4-bit finite state machine. Likewise, I implemented a
                    larger double dabble circuit to convert the 22-bit output to
                    six BCD numbers with shift registers, 4-bit adders, and a
                    5-bit finite state machine. Finally, since the negativity of
                    the inputs are represented by an extra bit, I had to create
                    two’s complement converters that allowed me to encode and
                    decode the inputs and outputs to their equivalent negative
                    and positive binary numbers as necessary.
                  </Typography>
                  <Typography fontSize="18px">
                    All of the actual logic for this project was done with
                    vanilla Minecraft components, which are the equivalent of
                    transistors and not gates, but I did use several tools along
                    the way to help make this possible. I used a mod called
                    WorldEdit, which allowed me to copy and paste collections of
                    blocks that I had created, which allowed me to easily make
                    arrays and grids of registers and logic blocks. I used a mod
                    called Axiom to enhance flight controls and manage my
                    inventory. I also used a mod called Wireless Redstone, which
                    allowed me to make connections without worrying about
                    extensive physical wiring. I actually ended up building a
                    custom version of this mod which allowed me to clear bugged
                    frequencies due to the collision between WorldEdit and
                    Wireless Redstone.
                  </Typography>
                </>
              }
            />
          </FadeIn>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
