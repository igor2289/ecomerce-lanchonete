import styled from "styled-components";
import { cores } from "../../../styles";

export const ImagemCardapio = styled.img`
    height: 167px;
    width: 304px;
    position: center;
    left: 8px;
    top: 0;
`

export const TituloCardapio = styled.h3`
    font-weight: 900;
    color: #FFEBD9;
    padding: 8px;
`
export const DescricaoCardapio = styled.p`
    color: #FFEBD9;
    font-size: 14px;
    padding: 8px;
    margin-bottom: 16px;
`

export const ButtonCardapio = styled.a`
    display: flex;
    color: ${cores.vermelho};
    background-color: #FFEBD9;
    padding: 4px 0;
    font-weight: bold;
    width: 304px;
    border: none;
    cursor: pointer;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    text-decoration: none;
`