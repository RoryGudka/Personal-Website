import Box, { BoxProps } from "@mui/material/Box";
import { useEffect, useState } from "react";

import { SxProps } from "@mui/system/styleFunctionSx";
import { desktopSx } from "@/libs/breakpoints";
import { theme } from "@/libs/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props extends BoxProps {
  sx?: SxProps;
  hideOnFirstRender?: boolean;
}

const MobileDisplayOnly: React.FunctionComponent<Props> = ({
  sx = {},
  hideOnFirstRender,
  children,
  ...props
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  if (isFirstRender && hideOnFirstRender) return null;
  else if (!isFirstRender && isDesktop) return null;

  return (
    <Box sx={{ ...sx, ...desktopSx({ display: "none" }) }} {...props}>
      {children}
    </Box>
  );
};

export default MobileDisplayOnly;
