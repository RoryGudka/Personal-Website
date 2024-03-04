import { Box, Collapse, Typography } from "@mui/material";
import { School, Work } from "@mui/icons-material";

import GlassContainer from "../GlassContainer";
import GreenSection from "../GreenSection";
import Progress from "./Progress";
import ResumeBackground from "./ResumeBackground";
import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";
import TitleText from "../TitleText";
import { mobileSx } from "@/libs/breakpoints";
import { useState } from "react";

const Resume = () => {
  const [skillTab, setSkillTab] = useState("general");

  return (
    <Box
      id="resume"
      display="flex"
      justifyContent="center"
      sx={{ p: "36px", ...mobileSx({ px: "5vw" }) }}
    >
      <Box width="800px">
        <GlassContainer sx={{ p: "36px", ...mobileSx({ px: "24px" }) }}>
          <Box pb="16px">
            <TitleText variant="h2" white>
              Education
            </TitleText>
          </Box>
          <ResumeSection
            Icon={School}
            title="University of Virginia"
            subtitle="Electrical Engineering, BS"
            timeline="08/2020 - 05/2024"
            bullets={[
              "Developed skills in a variety of fields such as circuit analysis, signal processing, digital logic, mathematics, artificial intelligence, and machine learning",
              "Completed engineering projects, including an audio analyzer, an electrocardiogram, and a smart lock",
            ]}
          />
          <ResumeSection
            Icon={School}
            title="Waseda University"
            subtitle="Exchange Program"
            timeline="04/2023 - 07/2023"
            bullets={[
              "Participated in an exchange program at Waseda University in Tokyo, Japan, where I focused my efforts on improving my Japanese language skills",
            ]}
            noBottomPadding
          />
        </GlassContainer>
        <GlassContainer
          mt="42px"
          sx={{ p: "36px", ...mobileSx({ px: "24px" }) }}
        >
          <Box pb="16px">
            <TitleText variant="h2" white>
              Experience
            </TitleText>
          </Box>
          <ResumeSection
            Icon={Work}
            title="Surfboard"
            subtitle="Full Stack Developer"
            timeline="06/2020 - Present"
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
            timeline="08/2022 - 10/2022"
            bullets={[
              "Developed a site allowing my client to display their horses for sale, easily edit all information through an admin portal, manage user contact, and track analytics",
              "Spearheaded development of an enriched text editor with a variety of custom content, including a migration from Quill.js to Slate.js",
            ]}
          />
          <ResumeSection
            Icon={Work}
            title="MKGMagic Pours"
            subtitle="Freelance Developer"
            timeline="12/2020 - 02/2021"
            bullets={[
              "Developed a site allowing my client to display their paintings for sale via a highly interactive image carousel",
              "Migrated Vanilla JS project to Next.js to eliminate hosting costs",
            ]}
            noBottomPadding
          />
        </GlassContainer>
        <GlassContainer
          mt="42px"
          sx={{ p: "36px", ...mobileSx({ px: "24px" }) }}
        >
          <Box pb="16px">
            <TitleText variant="h2" white>
              Skills
            </TitleText>
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => setSkillTab("general")}
          >
            <Typography
              variant="h3"
              color="white"
              borderBottom="1px solid white"
              py="16px"
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
              variant="h3"
              color="white"
              borderBottom="1px solid white"
              py="16px"
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
              variant="h3"
              color="white"
              borderBottom="1px solid white"
              py="16px"
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
              variant="h3"
              color="white"
              borderBottom="1px solid white"
              py="16px"
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
                    "Machine learning",
                    "Deep learning",
                    "Convolutional neural networks",
                    "Transformer networks",
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
