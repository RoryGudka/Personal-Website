import { Box, Typography } from "@mui/material";

interface Props {
  value: number;
}

const Progress: React.FC<Props> = ({ value }) => {
  return (
    <Box width="100%" display="flex" alignItems="center" gap="8px">
      <Typography color="white">{value}%</Typography>
      <Box flex="1 0 0">
        <Box width={`${value}%`} bgcolor="white" height="4px" />
      </Box>
    </Box>
  );
};

export default Progress;
