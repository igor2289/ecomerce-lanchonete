import styled from "styled-components";
import { cores } from "../../../styles";

export const HeaderPerfil = styled.div`
    background-color: #FFEBD9;
    max-width: 1024px;
    width: 100%;
`

export const Cabeçalho = styled.div`
    height: 186px;
    padding-top: 63px;
    margin: 0 auto;

    ul {
        list-style: none;
        color: ${cores.vermelho};
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
        font-weight: bold;
        position: relative
        height: 91px;
}
    li:nth-child(1) {
        position: absolute;
        left: 171px;
    }

    li:nth-child(3) {
        position: absolute;
        right: 171px;
    }

    p {
        width: 256px;
        margin-top: 16px;
        font-weight: 900;
    }

    img {
        cursor: pointer;
        height: 57px;
        width: 125px;
    }

`

export const CartButton = styled.li`
    width: 256px;
    margin-top: 16px;
    font-weight: 900;
    cursor: pointer;
`