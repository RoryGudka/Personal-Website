import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { theme } from "@/libs/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Toaster toastOptions={{ duration: 3000, position: "bottom-center" }} />
    </ThemeProvider>
  );
}
