import { Box, Typography } from "@mui/material";

import TitleText from "../TitleText";
import { mobileSx } from "@/libs/breakpoints";

const Overview = () => {
  return (
    <Box
      id="about"
      display="flex"
      justifyContent="center"
      sx={{ p: "42px", ...mobileSx({ px: "5vw" }) }}
    >
      <Box display="flex" flexDirection="column" gap="42px" maxWidth="726px">
        <Box display="flex" flexDirection="column" gap="8px">
          <TitleText>Web Development</TitleText>
          <Typography fontSize="20px">
            Throughout my years of experimenting with web development, creating
            websites for clients as a freelance developer, developing a board
            management platform as a full stack software engineer, and even
            working on mobile and embedded applications as an electrical
            engineering student, I have gained a wide variety of skills in
            computer science. In web development, I have worked with many
            React.js and Next.js applications utilizing TypeScript and a variety
            of AWS services. I have worked extensively with enriched text
            editors, such as Quill.js and Slate.js, with which I implemented
            numerous custom elements, such as highly interactive tables and
            embeds. I have also worked in depth with servers, where I have
            hosted my own websites, created custom websockets, and implemented a
            variety of APIs.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <TitleText>Electrical Engineering</TitleText>
          <Typography fontSize="20px">
            I have a wide range of skills in electrical engineering from my time
            at the University of Virginia, including analog and digital signal
            processing, circuit analysis, digital logic design, and radio
            frequency circuitry. I have worked with embedded computing devices
            and field programmable gate arrays, and I have also worked on some
            advanced projects, such as an electrocardiogram and an ultra low
            power smart lock. I have also continued my electrical engineering
            work outside of classes, working on personal projects and continuing
            development on the smart lock mentioned previously.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <TitleText>Artificial Intelligence</TitleText>
          <Typography fontSize="20px">
            My work in artificial intelligence has been primarily at the
            hobbyist level, with the exception of a few more technical projects
            developed for the classes “AI Hardware” and “Machine Learning Image
            Analysis” at the University of Virginia. I have worked on some basic
            artificial intelligence projects, such as age estimation and image
            classification of numbers, but I have also worked on more advanced
            projects, including a research into domain gap generalization for
            image registration using VoxelMorph. I am continuing to work on
            artificial intelligence personal projects in my free time, and I am
            excited to expand my experience and knowledge in the field.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
