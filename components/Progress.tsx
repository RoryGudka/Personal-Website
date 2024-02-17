import "react-circular-progressbar/dist/styles.css";

import { Box, Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface Props {
  text: string;
  value: number;
}

const Progress: React.FC<Props> = ({ text, value }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="8px">
      <Box width="120px" height="120px">
        <CircularProgressbar
          value={value}
          maxValue={100}
          text={`${value}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: `white`,
            textColor: "white",
            trailColor: "transparent",
          })}
        />
      </Box>
      <Typography color="white" fontSize="20px">
        {text}
      </Typography>
    </Box>
  );
};

export default Progress;
