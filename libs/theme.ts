import { createTheme } from "@mui/material";
import { mobileSx } from "@/libs/breakpoints";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Anta", sans-serif',
      fontSize: "92px",
      lineHeight: 1,
      "@media only screen and (max-width: 600px)": {
        fontSize: "64px",
      },
    },
    h2: {
      fontFamily: '"Anta", sans-serif',
      fontSize: "42px",
      lineHeight: 1,
      "@media only screen and (max-width: 600px)": {
        fontSize: "32px",
      },
    },
    h3: {
      fontFamily: '"Anta", sans-serif',
      fontSize: "28px",
      lineHeight: 1,
      "@media only screen and (max-width: 600px)": {
        fontSize: "24px",
      },
    },
    h4: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "20px",
      lineHeight: 1,
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "18px",
    },
  },
});
