import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    background-color: #EEE2D7;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: .3s;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export default GlobalStyle;
