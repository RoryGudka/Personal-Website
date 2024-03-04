import { SxProps } from "@mui/material";
import { theme } from "./theme";

export const breakpointSx = (condition: string, sx: SxProps) => {
  let newCondition = condition;
  theme.breakpoints.keys.forEach((key, i) => {
    const next = theme.breakpoints.keys[i + 1];
    const start = theme.breakpoints.values[key] || 0;
    const end = next ? theme.breakpoints.values[next] : Number.MAX_SAFE_INTEGER;

    const up = `(min-width: ${start}px)`;
    const down = `(max-width: ${start}px)`;
    const only = `((min-width: ${start}px) and (max-width: ${end}px))`;

    newCondition = newCondition.replace(`${key}+`, up);
    newCondition = newCondition.replace(`${key}-`, down);
    newCondition = newCondition.replace(`${key}`, only);
  });

  const numPlusRegex = /(\d+)\+/g; // Matches digits followed by '+'
  const numMinusRegex = /(\d+)\-/g; // Matches digits followed by '-'
  newCondition = newCondition.replace(numPlusRegex, "(max-width: $1px)");
  newCondition = newCondition.replace(numMinusRegex, "(min-width: $1px)");

  return { [`@media only screen and (${newCondition})`]: sx };
};

export const mobileSx = (sx: SxProps) => breakpointSx("md-", sx);
export const desktopSx = (sx: SxProps) => breakpointSx("md+", sx);
