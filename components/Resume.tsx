import { Box, Typography } from "@mui/material";
import { School, Work } from "@mui/icons-material";

import GlassContainer from "./GlassContainer";
import GreenSection from "./GreenSection";
import Particles from "react-tsparticles";
import Progress from "./Progress";
import ResumeSection from "./ResumeSection";
import Skill from "./Skill";
import SkillsSection from "./SkillsSection";
import TitleText from "./TitleText";

const Resume = () => {
  return (
    <GreenSection>
      <Box position="absolute" top={0} left={0} height="100%">
        <Particles
          id="resume"
          width="100%"
          height="300vh"
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
      <Box py="42px" display="flex" justifyContent="center">
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
            <Box pb="16px">
              <Typography color="white" fontSize="28px">
                Web Development
              </Typography>
              <SkillsSection
                name="Frameworks"
                skills={["Next.js", "React", "Express.js"]}
              />
              <SkillsSection
                name="Languages"
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
            <Box pb="16px">
              <Typography color="white" fontSize="28px">
                Electrical Engineering
              </Typography>
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
            <Box pb="16px">
              <Typography color="white" fontSize="28px">
                Artificial Intelligence
              </Typography>
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
            <Box display="flex" justifyContent="center" gap="32px">
              <Progress text="English" value={100} />
              <Progress text="Japanese" value={80} />
              <Progress text="Spanish" value={40} />
            </Box>
          </GlassContainer>
        </Box>
      </Box>
    </GreenSection>
  );
};

export default Resume;
