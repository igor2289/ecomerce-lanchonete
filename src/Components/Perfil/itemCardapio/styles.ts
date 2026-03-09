import styled from "styled-components";
import { cores } from "../../../styles";

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 320px;
`

export const ImagemCardapio = styled.img`
    height: 167px;
    width: 100%;
    left: 0;
    top: 0;
    border: none;
    position: relative;
    background-position: center 50%;  
    object-fit: cover;
    background-size: cover;
`

export const TituloCardapio = styled.h3`
    font-weight: 900;
    color: #FFEBD9;
    padding: 8px 0;
`
export const DescricaoCardapio = styled.p`
    color: #FFEBD9;
    font-size: 14px;
    margin-bottom: 16px;
`

export const ButtonCardapio = styled.button`
    display: flex;
    color: ${cores.vermelho};
    background-color: #FFEBD9;
    font-weight: bold;
    width: 100%;
    border: none;
    cursor: pointer;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    text-decoration: none;
    margin-top: auto;
    padding: 4px 0;
`