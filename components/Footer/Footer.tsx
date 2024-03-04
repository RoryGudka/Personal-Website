import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import GlassContainer from "../GlassContainer";
import LinkButton from "./LInkButton";
import TitleText from "../TitleText";
import { mobileSx } from "@/libs/breakpoints";

const Footer = () => {
  return (
    <Box
      id="contact"
      display="flex"
      justifyContent="center"
      sx={{ p: "42px", ...mobileSx({ px: "5vw" }) }}
    >
      <Box width="800px">
        <GlassContainer
          display="flex"
          flexDirection="column"
          gap="16px"
          sx={{ p: "36px", ...mobileSx({ p: "24px" }) }}
        >
          <Box pb="12px">
            <TitleText variant="h2" white>
              Send me a message
            </TitleText>
          </Box>
          <Typography variant="h3" color="white">
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
          <Typography variant="h3" color="white">
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
            color="primary"
            fullWidth
            sx={{ mt: "16px" }}
            variant="contained"
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
