import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import palette from "./palette";


const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    a {
        text-decoration: none;
        color: ${palette.black};
    }
`

export default GlobalStyle;