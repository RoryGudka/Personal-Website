import { Box, Typography } from "@mui/material";

import Skill from "./Skill";

interface Props {
  name: string;
  skills: string[];
}

const SkillsSection: React.FC<Props> = ({ name, skills }) => {
  return (
    <Box pb="8px" display="flex" flexDirection="column" gap="8px">
      <Typography color="white" fontSize="22px">
        {name}:
      </Typography>
      <Box display="flex" gap="8px" flexWrap="wrap">
        {skills.map((skill) => (
          <Skill key={skill} text={skill} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
