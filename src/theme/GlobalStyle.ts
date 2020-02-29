import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #4e4e4e;
    background-color: #f9f2ec;
  }
`;

export default GlobalStyle;
