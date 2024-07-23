import GreenSection from "../GreenSection";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeroBackground: React.FC<Props> = ({ children }) => {
  return <GreenSection onlyClipBottom>{children}</GreenSection>;
};

export default HeroBackground;
