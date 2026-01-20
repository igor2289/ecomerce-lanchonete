import { createGlobalStyle } from "styled-components";

export const cores = {
    vermelho: '#E66767'
}

export const GlobalCss = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

     .viewport-shadow{
     inset: 0;
    position: fixed;
     display: flex;
     z-index: 99999;
     justify-content: center;
      background: rgba(0, 0, 0, 0.7);
      height: 100%;
     }
}
    .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    }
`
