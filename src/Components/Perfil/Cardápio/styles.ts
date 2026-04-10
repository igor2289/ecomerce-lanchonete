import styled from "styled-components";
import { breakpoints, cores } from "../../../styles";

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
    background-color: ${cores.vermelho};
    width: 100%;
    padding: 8px;
    cursor: pointer;


    @media (max-width: ${breakpoints.tablet}) {
        justify-items: center;
        margin: 0 auto;
        width: 70%;
    }
    }
`