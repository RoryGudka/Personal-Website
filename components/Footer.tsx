import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import GlassContainer from "./GlassContainer";
import { Input } from "@mui/base";
import LinkButton from "./LInkButton";

const Footer = () => {
  return (
    <Box id="contact" py="42px" display="flex" justifyContent="center">
      <Box width="800px">
        <GlassContainer
          p="36px"
          display="flex"
          flexDirection="column"
          gap="8px"
        >
          <Typography color="white" fontSize="42px" fontWeight={600}>
            Contact me
          </Typography>
          <Typography color="white" fontSize="22px">
            Contact info:
          </Typography>
          <GlassContainer>
            <OutlinedInput
              sx={{
                fontSize: "18px",
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none",
                },
              }}
              placeholder="john.doe@gmail.com"
              fullWidth
            />
          </GlassContainer>
          <Typography color="white" fontSize="22px">
            Message
          </Typography>
          <GlassContainer>
            <OutlinedInput
              sx={{
                fontSize: "18px",
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none",
                },
              }}
              placeholder="Hey Rory..."
              fullWidth
              multiline
              minRows={3}
            />
          </GlassContainer>
          <Button
            variant="text"
            fullWidth
            sx={{
              transition: "2s bgcolor",
              mt: "16px",
              color: "#30a3a2",
              bgcolor: "rgba(255, 255, 255, 0.9)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
            }}
          >
            Send
          </Button>
        </GlassContainer>
        <Box
          pt="32px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="16px"
        >
          <Box sx={{ height: "1px", bgcolor: "white", flex: "1 0 0" }} />
          <LinkButton Icon={Email} href="mailto:rory.gudka@gmail.com" />
          <LinkButton
            Icon={LinkedIn}
            href="https://www.linkedin.com/in/rory-gudka-125490200/"
          />
          <LinkButton Icon={GitHub} href="https://github.com/RoryGudka" />
          <LinkButton Icon={YouTube} href="https://example.com" />
          <LinkButton Icon={Twitter} href="https://twitter.com/RoryGudka" />
          <LinkButton
            Icon={Instagram}
            href="https://www.instagram.com/rory.dg_26"
          />
          <Box sx={{ height: "1px", bgcolor: "white", flex: "1 0 0" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
