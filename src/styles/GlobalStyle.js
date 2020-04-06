import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  img {
    vertical-align: top;
  }
`;
