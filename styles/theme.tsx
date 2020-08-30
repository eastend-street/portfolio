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
};

export default Theme;
