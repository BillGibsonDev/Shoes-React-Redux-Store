import { createGlobalStyle } from "styled-components";

import * as pallette from './styled/ThemeVariables.js'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        margin: auto;
        scroll-behavior: smooth;
        width: 90%;
        background-color: #ffffff;
        @media (max-width: 750px){
            width: 100%;
        } 
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    #shop-button {
        color: #000000;
        background: #ffffff;
        padding: 10px 20px;
        border-radius: 12px;
        font-size: 1.5rem;
        max-width: 150px;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 700;
    }
`;

export default GlobalStyles;