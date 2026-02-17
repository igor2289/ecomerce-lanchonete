import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerHeader = styled.div `
    color: ${cores.vermelho};
    background-color: #FFEBD9;
    align-items: center;
    padding: 24px;
    text-align: center;
    padding-bottom: 120px;
`

export const Logo = styled.img`
    margin-top: 40px;
    margin-bottom: 40px;
    width: 125px;
    height: 57px;
`

export const Título = styled.h1`
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    max-width: 540px;
    margin: 0 auto;
    text-decoration: none;
    line-height: 100%;
`