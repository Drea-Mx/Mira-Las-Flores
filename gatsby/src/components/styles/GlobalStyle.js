import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    
    :root {
      --pink: #F408F4;
      --white: #F9F9F9;
      --black: #000;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--white);
        color: var(--black);
        font-family: var(--regular);
        font-weight: 500;
        font-style: normal;
        font-size: 14px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 680px) {
          font-size: 12px;
      }
    }
`
