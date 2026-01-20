import styled from "styled-components";
import { cores } from "../../../styles";

export const Cabeçalho = styled.div`
    height: 186px;
    padding-top: 63px;
    max-width: 1024px;
    

    ul {
    list-style: none;
    color: ${cores.vermelho};
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    font-weight: bold;

    li{
    
    width: 33%;
    }

    p {
    width: 256px;
    margin-top: 16px;
    font-weight: 900;
    }

    }
`