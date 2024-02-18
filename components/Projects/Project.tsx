import { Box, Collapse, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

import { ChevronLeftRounded } from "@mui/icons-material";

interface Props {
  title: string;
  tag: string;
  overview: string;
  details: ReactNode;
}

const Project: React.FC<Props> = ({ title, tag, overview, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box>
      <Box display="flex" alignItems="center" gap="16px" pb="8px">
        <Typography fontSize="32px" fontWeight={600} lineHeight={1}>
          {title}
        </Typography>
        <Box
          sx={{
            p: "6px 8px",
            borderRadius: "18px",
            background:
              "linear-gradient(to bottom right,#50a3a255 0,#78cc6d55 100%)",
          }}
        >
          <Typography fontSize="14px" lineHeight={1}>
            {tag}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap="16px">
        <Box
          sx={{
            bgcolor: "#bbbbbb",
            borderRadius: "16px",
            height: "200px",
            width: "200px",
            flexShrink: 0,
          }}
        />
        <Typography fontSize="18px">{overview}</Typography>
      </Box>
      <Collapse in={showDetails}>
        <Box pt="8px">{details} </Box>
      </Collapse>
      <Box
        display="flex"
        justifyContent="center"
        pt="8px"
        sx={{ cursor: "pointer" }}
        onClick={() => setShowDetails(!showDetails)}
      >
        <Typography color="#30a3a2" fontSize="18px">
          See {showDetails ? "less" : "more"}
        </Typography>
        <ChevronLeftRounded
          sx={{
            color: "#30a3a2",
            transition: "0.15s rotate",
            rotate: showDetails ? "90deg" : "-90deg",
          }}
        />
      </Box>
    </Box>
  );
};

export default Project;
