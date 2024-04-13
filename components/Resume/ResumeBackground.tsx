import GreenSection from "../GreenSection";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ResumeBackground: React.FC<Props> = ({ children }) => {
  return <GreenSection id="resume-background">{children}</GreenSection>;
};

export default ResumeBackground;
