import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import palette from "./palette";


const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color : transparent;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        text-decoration: none;
        color: ${palette.black};
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    
`

export default GlobalStyle;