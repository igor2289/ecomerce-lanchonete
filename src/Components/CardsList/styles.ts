import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ContainerCards = styled.section`
    padding: 32px 0;
    margin-bottom: 48px;
    max-width: 1024px;
    width: 100%;
`

export const CardsList = styled.ul`
    display: grid;
    column-gap: 80px;
    row-gap: 48px;
    list-style: none;
    text-align: center;
    grid-template-columns: 1fr;
    justify-items: center;

    @media (min-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }
`