import styled from "styled-components";
import { breakpoints } from "../../../styles";

export const PerfilImage = styled.button`
     width: 100%;
     height: 280px;
     background-size: cover;
     border: none;
     position: relative;
     background-repeat: no-repeat;
     background-position: center 30%;  
     object-fit: cover;
     border-bottom: 2px solid red;
     box-shadow: 0 0 6px 0 #f53737ff;


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
          color: #fff;
          z-index: 1;
          font-size: 32px;
          font-weight: 100;
          max-width: 100%;

     @media (max-width: ${breakpoints.tablet}) {
          margin-left: 32px;
     }
}
`

export const BannerTitle = styled.h3`
     position: absolute;
     bottom: 24px;
     color: #fff;
     z-index: 1;
     font-size: 32px;
     font-weight: 900;
     max-width: 100%;

     @media (max-width: ${breakpoints.tablet}) {
          margin-left: 32px;
     }
`