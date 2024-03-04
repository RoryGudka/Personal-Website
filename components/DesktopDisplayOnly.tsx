import Box, { BoxProps } from "@mui/material/Box";
import { useEffect, useState } from "react";

import { SxProps } from "@mui/system/styleFunctionSx";
import { mobileSx } from "@/libs/breakpoints";
import { theme } from "@/libs/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props extends BoxProps {
  sx?: SxProps;
  hideOnFirstRender?: boolean;
}

const DesktopDisplayOnly: React.FunctionComponent<Props> = ({
  sx = {},
  hideOnFirstRender,
  children,
  ...props
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  if (isFirstRender && hideOnFirstRender) return null;
  else if (!isFirstRender && isMobile) return null;

  return (
    <Box sx={{ ...sx, ...mobileSx({ display: "none" }) }} {...props}>
      {children}
    </Box>
  );
};

export default DesktopDisplayOnly;
