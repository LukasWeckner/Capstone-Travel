import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
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
    color: #171F1F;
  }


  :root {
    --primary-color: #141414; //dark
    --secondary-color: #F2F2F2; //bright

    --header-footer-color: #11808C;

    --delete-error-warning-color: #BF1D04; //dark red
  }
`;
