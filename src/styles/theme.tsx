import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
  children: ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const theme = {
  colors: {
    mainBeige: "#EEE2D7",
  },
  fonts: ["Open Sans", "sans-serif"],
  breakpoints: {
    xxxs: 400,
    xxs: 500,
    xs: 600,
    xsm: 750,
    sm: 960,
    md: 1280,
    lg: 1920,
  },
};

export default Theme;
