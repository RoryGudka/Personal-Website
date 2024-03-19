import { Box, BoxProps } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const FadeIn: React.FunctionComponentFactory<BoxProps> = (props) => {
  const ref = useRef<HTMLElement>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.screen.height;
      const { top } = ref.current!.getBoundingClientRect();
      if (top - screenHeight / 1.25 < 0) setShow(true);
    };

    handleScroll();

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      {...props}
      ref={ref}
      sx={{
        position: "relative",
        opacity: show ? 1 : 0,
        top: show ? 0 : "-20px",
        transition: "1s opacity, 1s top",
      }}
    >
      {props!.children}
    </Box>
  );
};

export default FadeIn;
