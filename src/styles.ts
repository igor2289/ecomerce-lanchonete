import { createGlobalStyle } from "styled-components";

export const colors = {
    primaria: '#f03434ff',
    vermelho: 'rgba(238, 53, 53, 0.89)',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    body {
        background-color: #111010ff;
    }

     .viewport-shadow{
        inset: 0;
        position: fixed;
        display: flex;
        z-index: 99999;
        justify-content: center;
        background: rgba(15, 15, 15, 0.7);
        height: 100%;
     }
}
    .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    }
`
