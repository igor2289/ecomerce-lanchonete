import styled from "styled-components";

export const ImagemPerfil = styled.button`
     width: 100%;
     height: 280px;
     background-size: cover;
     border: none;
     position: relative;
     background-repeat: no-repeat;
     background-position: center 30%;  
     object-fit: cover;


      &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          content: '';
     }

     h2 {
          position: absolute;
          top: 24px;
          // left: 170px;
          color: #fff;
          z-index: 1;
          font-size: 32px;
          font-weight: 100;
          max-width: 100%;
`

export const TituloBanner = styled.h3`
     position: absolute;
     bottom: 24px;
     // left: 170px;
     color: #fff;
     z-index: 1;
     font-size: 32px;
     font-weight: 900;
     max-width: 100%;
`