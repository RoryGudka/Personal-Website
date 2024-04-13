import GreenSection from "../GreenSection";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FooterBackground: React.FC<Props> = ({ children }) => {
  return (
    <GreenSection id="footer-background" onlyClipTop>
      {children}
    </GreenSection>
  );
};

export default FooterBackground;
