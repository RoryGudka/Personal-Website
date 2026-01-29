import { Box, Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MemoryIcon from "@mui/icons-material/Memory";
import PsychologyIcon from "@mui/icons-material/Psychology";

import FadeIn from "../FadeIn";
import TitleText from "../TitleText";
import { mobileSx } from "@/libs/breakpoints";

const gradient = "linear-gradient(to bottom right,#50a3a2 0,#78cc6d 100%)";

const Card: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => {
  return (
    <FadeIn>
      <Box
        sx={{
          position: "relative",
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255,255,255,0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          transition: "transform 250ms ease, box-shadow 250ms ease",
          transform: "translateY(0px)",
          cursor: "default",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
          },
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            padding: "1px",
            background: gradient,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
        }}
      >
        <Box display="flex" alignItems="center" gap={2} mb={1.5}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              display: "grid",
              placeItems: "center",
              background: gradient,
              color: "white",
              transform: "scale(1)",
              transition: "transform 250ms ease",
              "& svg": { fontSize: 30 },
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {icon}
          </Box>
          <Box flex={1}>
            <TitleText variant="h3">{title}</TitleText>
          </Box>
        </Box>
        <Typography fontSize={{ xs: 16, sm: 18 }} color="#1f2937">
          {children}
        </Typography>
      </Box>
    </FadeIn>
  );
};

const Overview = () => {
  return (
    <Box id="about" display="flex" justifyContent="center" sx={{ py: { xs: 6, md: 10 }, px: { xs: "5vw", md: "42px" } }}>
      <Box width="100%" maxWidth="1100px" display="flex" flexDirection="column" gap={4}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Card icon={<CodeIcon />} title="Web Development">
              Throughout my years of experimenting with web development, creating websites for clients as a freelance developer, developing a board management platform as a full stack software engineer, and even working on mobile and embedded applications as an electrical engineering student, I have gained a wide variety of skills in computer science. In web development, I have worked with many React.js and Next.js applications utilizing TypeScript and a variety of AWS services. I have worked extensively with enriched text editors, such as Quill.js and Slate.js, with which I implemented numerous custom elements, such as highly interactive tables and embeds. I have also worked in depth with servers, where I have hosted my own websites, created custom websockets, and implemented a variety of APIs.
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card icon={<MemoryIcon />} title="Electrical Engineering">
              I have a wide range of skills in electrical engineering from my time at the University of Virginia, including analog and digital signal processing, circuit analysis, digital logic design, and radio frequency circuitry. I have worked with embedded computing devices and field programmable gate arrays, and I have also worked on some advanced projects, such as an electrocardiogram and an ultra low power smart lock. I have also continued my electrical engineering work outside of classes, working on personal projects and continuing development on the smart lock mentioned previously.
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card icon={<PsychologyIcon />} title="Artificial Intelligence">
              My work in artificial intelligence has been primarily at the hobbyist level, with the exception of a few more technical projects developed for the classes “AI Hardware” and “Machine Learning Image Analysis” at the University of Virginia. I have worked on some basic artificial intelligence projects, such as age estimation and image classification of numbers, but I have also worked on more advanced projects, including a research into domain gap generalization for image registration using VoxelMorph. I am continuing to work on artificial intelligence personal projects in my free time, and I am excited to expand my experience and knowledge in the field.
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Overview;
