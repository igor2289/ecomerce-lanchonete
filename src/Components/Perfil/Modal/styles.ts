import styled from "styled-components";
import { cores } from "../../../styles";

export const ButtonFechar = styled.a`
    background: Transparent;
    position: absolute;
    top: 8px;
    right: 8px;
    color: #FFFFFF;
    text-decoration: none;
    border: none;
    font-size: 16px;
    width: 16px;
    cursor: pointer;
`

export const ModalContainer = styled.div`
    width: 100%;
    background-color: ${cores.vermelho};
    padding: 32px;
    display: flex;
    height: 344px;
    text-decoration: none;
    position: fixed;
    top: 48px;
    z-index: 999;
    backdrop-filter: blur(1.5px);
`

export const ImagemModal = styled.img`
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
`

export const TituloModal = styled.h3`
    color: #FFFFFF;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 16px;
`

export const DescricaoModal = styled.p`
    color: #FFFFFF;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
`