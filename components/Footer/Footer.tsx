import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import FadeIn from "../FadeIn";
import GlassContainer from "../GlassContainer";
import LinkButton from "./LInkButton";
import TitleText from "../TitleText";
import { mobileSx } from "@/libs/breakpoints";
import { post } from "@/libs/api";
import toast from "react-hot-toast";
import { useState } from "react";

const Footer = () => {
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!sending) {
      try {
        setSending(true);
        await post("/send_message", { contact, message });
        toast.success("Successfully sent message");
        setContact("");
        setMessage("");
        setSending(false);
      } catch (e) {
        const { response, message } = e as any;
        toast.error(response.data?.msg || message);
      }
    }
  };

  return (
    <Box
      id="contact"
      display="flex"
      justifyContent="center"
      sx={{ p: "42px", ...mobileSx({ px: "2.5vw" }) }}
    >
      <Box width="800px">
        {" "}
        <FadeIn>
          <GlassContainer
            display="flex"
            flexDirection="column"
            gap="16px"
            sx={{ p: "36px", ...mobileSx({ px: "2.5vw" }) }}
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
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
              Message:
            </Typography>
            <GlassContainer>
              <OutlinedInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
              onClick={handleSend}
              disabled={sending}
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
            <LinkButton
              Icon={YouTube}
              href="https://www.youtube.com/channel/UCqB4x_DM6WCsd6XYMANpCww"
            />
            <LinkButton Icon={Twitter} href="https://twitter.com/RoryGudka" />
            <LinkButton
              Icon={Instagram}
              href="https://www.instagram.com/rory.dg_26"
            />
            <Box sx={{ height: "1px", bgcolor: "white", flex: "1 0 0" }} />
          </Box>
        </FadeIn>
      </Box>
    </Box>
  );
};

export default Footer;
