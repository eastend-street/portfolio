import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
  children: ReactNode;
};

const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const theme = {
  colors: {
    mainBeige: "#EEE2D7",
    white: "#FFFFFF",
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
