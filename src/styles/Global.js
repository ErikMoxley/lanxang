import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    position: relative;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    z-index: 1;
    height: 100%;
    position: relative;
    height: 100%;
    position: relative;
  }
`;

export default GlobalStyles;
