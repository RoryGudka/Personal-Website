import { Box, Typography } from "@mui/material";

import GlassContainer from "./GlassContainer";

const Navigation = () => {
  const navigate = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box display="flex" gap="16px" pt="48px">
      <GlassContainer
        px="12px"
        py="4px"
        sx={{
          cursor: "pointer",
          borderRadius: "32px",
          transition: "0.15s background-color",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
        }}
        onClick={() => navigate("about")}
      >
        <Typography color="white" fontSize="22px">
          About me
        </Typography>
      </GlassContainer>
      <GlassContainer
        px="12px"
        py="4px"
        sx={{
          cursor: "pointer",
          borderRadius: "32px",
          transition: "0.15s background-color",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
        }}
        onClick={() => navigate("resume")}
      >
        <Typography color="white" fontSize="22px">
          Resume
        </Typography>
      </GlassContainer>
      <GlassContainer
        px="12px"
        py="4px"
        sx={{
          cursor: "pointer",
          borderRadius: "32px",
          transition: "0.15s background-color",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
        }}
        onClick={() => navigate("projects")}
      >
        <Typography color="white" fontSize="22px">
          Projects
        </Typography>
      </GlassContainer>
      <GlassContainer
        px="12px"
        py="4px"
        sx={{
          cursor: "pointer",
          borderRadius: "32px",
          transition: "0.15s background-color",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
        }}
        onClick={() => navigate("contact")}
      >
        <Typography color="white" fontSize="22px">
          Contact
        </Typography>
      </GlassContainer>
    </Box>
  );
};

export default Navigation;
