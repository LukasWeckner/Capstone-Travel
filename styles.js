import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 4.5rem 0 0 0;
    padding: 0;
    font-family: system-ui;
    background-color: #F2F2F2;
  }


  :root {
    --primary-color: #141414; //dark
    --secondary-color: #F2F2F2; //bright

    --header-footer-color: #11808C;

    --delete-error-warning-color: #BF1D04; //dark red
  }
`;
