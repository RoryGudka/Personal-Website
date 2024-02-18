import { Box, Collapse, Typography } from "@mui/material";
import { School, Work } from "@mui/icons-material";

import GlassContainer from "./GlassContainer";
import GreenSection from "./GreenSection";
import Progress from "./Progress";
import ResumeBackground from "./ResumeBackground";
import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";
import TitleText from "./TitleText";
import { useState } from "react";

const Resume = () => {
  const [skillTab, setSkillTab] = useState("general");

  return (
    <Box id="resume" py="42px" display="flex" justifyContent="center">
      <Box width="800px">
        <GlassContainer p="36px">
          <Box pb="16px">
            <TitleText white>Education</TitleText>
          </Box>
          <ResumeSection
            Icon={School}
            title="University of Virginia"
            subtitle="Electrical Engineering, BS"
            bullets={[
              "Developed skills in a variety of fields such as circuit analysis, signal processing, digital logic, mathematics, artificial intelligence, and machine learning",
              "Completed engineering projects, including an audio analyzer, an electrocardiogram, and a smart lock",
            ]}
          />
          <ResumeSection
            Icon={School}
            title="Waseda University"
            subtitle="Exchange Program"
            bullets={[
              "Participated in an exchange program at Waseda University in Tokyo, Japan, where I focused my efforts on improving my Japanese language skills",
            ]}
            noBottomPadding
          />
        </GlassContainer>
        <GlassContainer p="36px" mt="42px">
          <Box pb="16px">
            <TitleText white>Experience</TitleText>
          </Box>
          <ResumeSection
            Icon={Work}
            title="Surfboard"
            subtitle="Full Stack Developer"
            bullets={[
              "Developed the backend architecture and frontend UI necessary to control document permissions across the application",
              "Migrated the frontend codebase from React to Next.js",
              "Implemented backend changes that resulted in an 8x increase in speed for the APIs",
            ]}
          />
          <ResumeSection
            Icon={Work}
            title="Glenfinnan Horses"
            subtitle="Freelance Developer"
            bullets={[
              "Developed a site allowing my client to display their horses for sale, easily edit all information through an admin portal, manage user contact, and track analytics",
              "Spearheaded development of an enriched text editor with a variety of custom content, including a migration from Quill.js to Slate.js",
            ]}
          />
          <ResumeSection
            Icon={Work}
            title="MKGMagic Pours"
            subtitle="Freelance Developer"
            bullets={[
              "Developed a site allowing my client to display their paintings for sale via a highly interactive image carousel",
              "Migrated Vanilla JS project to Next.js to eliminate hosting costs",
            ]}
            noBottomPadding
          />
        </GlassContainer>
        <GlassContainer p="36px" mt="42px">
          <Box pb="16px">
            <TitleText white>Skills</TitleText>
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => setSkillTab("general")}
          >
            <Typography
              py="8px"
              color="white"
              fontSize="28px"
              borderBottom="1px solid white"
            >
              General
            </Typography>

            <Collapse in={skillTab === "general"}>
              <Box py="16px">
                <SkillsSection
                  name="Programming languages"
                  skills={[
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "Python",
                    "C",
                    "Java",
                    "PHP",
                  ]}
                />
                <SkillsSection
                  name="Languages"
                  skills={[
                    "English (native)",
                    "Japanese (N2 certified)",
                    "Spanish",
                  ]}
                />
              </Box>
            </Collapse>
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => setSkillTab("web")}>
            <Typography
              py="8px"
              color="white"
              fontSize="28px"
              borderBottom="1px solid white"
            >
              Web Development
            </Typography>
            <Collapse in={skillTab === "web"}>
              <Box py="16px">
                <SkillsSection
                  name="Frameworks"
                  skills={["Next.js", "React", "Express.js"]}
                />
                <SkillsSection
                  name="Amazon Web Services"
                  skills={[
                    "CloudFormation",
                    "DynamoDB",
                    "Lambda",
                    "SES",
                    "S3",
                    "Cognito",
                    "EC2",
                  ]}
                />
                <SkillsSection
                  name="Analytics"
                  skills={["Google Analytics", "Posthog", "Sentry", "Mixpanel"]}
                />
              </Box>
            </Collapse>
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => setSkillTab("electrical")}
          >
            <Typography
              py="8px"
              color="white"
              fontSize="28px"
              borderBottom="1px solid white"
            >
              Electrical Engineering
            </Typography>
            <Collapse in={skillTab === "electrical"}>
              <Box py="16px">
                <SkillsSection
                  name="Software"
                  skills={[
                    "Multisim",
                    "Ultiboard",
                    "MATLAB",
                    "AWR Microwave Office",
                    "Virtuoso Layout Suite",
                  ]}
                />
                <SkillsSection
                  name="General skills"
                  skills={[
                    "Circuit analysis",
                    "Signal processing",
                    "Digital logic",
                    "Embedded systems",
                    "RF circuits",
                  ]}
                />
              </Box>
            </Collapse>
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => setSkillTab("ai")}>
            <Typography
              py="8px"
              color="white"
              fontSize="28px"
              borderBottom="1px solid white"
            >
              Artificial Intelligence
            </Typography>
            <Collapse in={skillTab === "ai"}>
              <Box py="16px">
                <SkillsSection
                  name="Software"
                  skills={["Keras", "PyTorch", "Numpy", "Google Colab"]}
                />
                <SkillsSection
                  name="General skills"
                  skills={[
                    "Circuit analysis",
                    "Signal processing",
                    "Digital logic",
                    "Embedded systems",
                    "RF circuits",
                  ]}
                />
              </Box>
            </Collapse>
          </Box>
        </GlassContainer>
      </Box>
    </Box>
  );
};

export default Resume;
