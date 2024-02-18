import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
}

const Skill: React.FC<Props> = ({ text }) => {
  return (
    <Box
      sx={{
        p: "8px",
        display: "inline-block",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "26px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Typography color="white" fontSize="18px" lineHeight={1}>
        {text}
      </Typography>
    </Box>
  );
};

export default Skill;
