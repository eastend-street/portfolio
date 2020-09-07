import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: rgba(0,0,0,0.7);
    background-color: #EEE2D7;
  }

  h1, h2, h3, h4 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }

  }
`;

export default GlobalStyle;
