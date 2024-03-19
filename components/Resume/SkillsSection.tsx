import { Box, Typography } from "@mui/material";

import Progress from "./Progress";
import Skill from "./Skill";

interface Props {
  name: string;
  skills: { name: string; percentage: number }[] | string[];
}

const SkillsSection: React.FC<Props> = ({ name, skills }) => {
  return (
    <Box pb="8px" display="flex" flexDirection="column" gap="8px">
      <Typography variant="h4" color="white" mb="6px">
        {name}:
      </Typography>
      <Box display="flex" gap="8px" flexWrap="wrap">
        {skills.map((skill) =>
          typeof skill === "string" ? (
            <Skill key={skill} text={skill} />
          ) : (
            <Box key={skill.name} width="100%">
              <Typography color="white">{skill.name}</Typography>
              <Progress value={skill.percentage} />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default SkillsSection;
