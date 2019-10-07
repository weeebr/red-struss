import { createGlobalStyle } from "styled-components";
import bgImage from "./assets/images/bg.jpg";
import OpenSansBold from "./assets/fonts/OpenSans-Bold.ttf";
import OpenSansItalic from "./assets/fonts/OpenSans-Italic.ttf";
import OpenSansLight from "./assets/fonts/OpenSans-Light.ttf";
import OpenSans from "./assets/fonts/OpenSans-Regular.ttf";

import { pageFullWidth, colors, typography, getString } from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'OpenSansBold';
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSansBold}) format('truetype');
  }

  @font-face {
    font-family: 'OpenSansItalic';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansItalic}) format('truetype');
  }

  @font-face {
    font-family: 'OpenSansLight';
    font-style: normal;
    font-weight: 300;
    src: url(${OpenSansLight}) format('truetype');
  }

  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSans}) format('truetype');
  }

  html, body,  p {
    margin: 0;
    padding: 0;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    letter-spacing: 0.01038em;
  }

  p {
    margin: 14px 0;
  }
    
  h1, h2, h3, h4, h5 {   
    margin: 0;
    
    line-height: 1.5;
    font-family: "OpenSans";
  }

  h1 {
    ${getString(typography.h1)}
    padding: 8px 0 18px 0;
  }

  h3 {
    ${getString(typography.h3)}
    letter-spacing: 1px;
  }

  button {
    border: none;
    font: unset;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryRed};

    &:focus, &:hover {
      border-bottom: 2px dashed ${colors.primaryRed};
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${bgImage});

    & > div {
      flex: 1 0 auto;
      display: flex;
      max-width: ${pageFullWidth}px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      & > .content {

        @media (max-width: 1066px) {
          margin: 0 0 80px 0;
        }
        margin: 0 20px 80px 0;
        background: white;
        padding: 40px;
        width: 100%;
        max-width: 780px;
        box-shadow: 0 0 14px #e0dfdf;
      }
    }
  }
`;

export default GlobalStyle;
