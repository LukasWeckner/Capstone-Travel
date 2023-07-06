import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 4.5rem 0 0 0;
    padding: 0;
    font-family: ${roboto.style.fontFamily};
    background-color: #F2F2F2;
    color: var(--primary-text-and-button-color);
  }


  :root {
    --primary-text-and-button-color: #171F1F; //dark
    --secondary-color: #F2F2F2; //bright

    --header-footer-color: #11808C;

    --delete-error-warning-color: #BF1D04; //dark red

    --subtle-dividing-line-color: #e3e3e3;
  }
`;
