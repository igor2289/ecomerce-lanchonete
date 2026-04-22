import styled from "styled-components";
import { breakpoints } from "../../../styles";

export const CloseButton = styled.a`
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
    background-color: #201f1fff;
    padding: 32px;
    display: flex;
    height: 344px;
    text-decoration: none;
    position: fixed;
    top: 48px;
    z-index: 999;
    backdrop-filter: blur(1.5px);
    border-radius: 0 0 8px 8px;

    .reduceWidth {
        width: 218px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        padding: 24px;
        text-align: center;
        width: 80%;
        height: auto;
    }
`

export const ModalImage = styled.img`
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: ${breakpoints.tablet}) {
        padding-bottom: 16px;
        margin: 0 auto;
    }
`

export const ModalTitle = styled.h3`
    color: #e7a77cf6;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 16px;
`

export const ModalDescription = styled.p`
    color: #fff;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
`