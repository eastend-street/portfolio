import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', ssans-serif;
    color: #000;
    background-color: #EEE2D7;
  }
`;

export default GlobalStyle;
