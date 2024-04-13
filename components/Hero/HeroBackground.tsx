import GreenSection from "../GreenSection";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeroBackground: React.FC<Props> = ({ children }) => {
  return (
    <GreenSection id="hero-background" onlyClipBottom>
      {children}
    </GreenSection>
  );
};

export default HeroBackground;
