import { Box } from "@mui/material";
import GlassContainer from "../GlassContainer";

interface Props {
  Icon: any;
  href: string;
}

const LinkButton: React.FC<Props> = ({ Icon, href }) => {
  return (
    <Box component="a" href={href} target="_blank">
      <GlassContainer
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          width: "42px",
          height: "42px",
          transition: "0.15s background-color",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <Icon sx={{ color: "white", fontSize: "26px" }} />
      </GlassContainer>
    </Box>
  );
};

export default LinkButton;
