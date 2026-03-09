import styled from "styled-components";
import { cores } from "../../../styles";

export const Cabeçalho = styled.div`
    height: 186px;
    padding-top: 63px;
    background-color: #FFEBD9;
    width: 100%;
    font-weight: 900;

    .openCart {
        cursor: pointer;
    }

    ul {
        list-style: none;
        color: ${cores.vermelho};
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        font-weight: bold;
        position: relative;
        height: 100%;
    }

    p {
        // width: 256px;
        margin-top: 16px;
        font-weight: 900;
    }

    img {
        cursor: pointer;
        height: 57px;
        position: absolute;
        top: 0;
    }
`