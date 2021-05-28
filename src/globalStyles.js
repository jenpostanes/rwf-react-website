import { createGlobalStyle } from "styled-components";
import { Color } from "./components/Variables";

export const GlobalStyle = createGlobalStyle`
    *, html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Karla', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }

    // Headers
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        line-height: 1.3;
    }

    h1 {
        font-size: clamp(18px, 10vw, 32px);     
    }

    p {
        font-size: 16px;
        line-height: 1.5;
    }

    .section__title {
        margin-bottom: 20px;
        font-weight: bold;
        color: ${Color.main};
        text-transform: capitalize;
    }
`;
