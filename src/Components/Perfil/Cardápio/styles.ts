import styled from "styled-components";
import { breakpoints } from "../../../styles";

export const GridCardapio = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    gap: 32px;
    margin-top: 56px;
    margin-bottom: 120px;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        align-items: center;
    }

    li {
    background-color: #201f1fff;
    width: 100%;
    padding: 8px;
    cursor: pointer;
    border-radius: 8px;


    @media (max-width: ${breakpoints.tablet}) {
        justify-items: center;
        margin: 0 auto;
        width: 70%;
    }
    }
`