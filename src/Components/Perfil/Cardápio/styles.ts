import styled from "styled-components";
import { cores } from "../../../styles";

export const GridCardapio = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    gap: 24px;
    padding-top: 56px;
    padding-bottom: 120px;

    li {
    background-color: ${cores.vermelho};
    max-width: 320px;
    padding: 8px;
    cursor: pointer;
    }
`