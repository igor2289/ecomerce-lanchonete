import styled from "styled-components"
import { cores } from "../../styles"

export const ContainerFooter = styled.footer`
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    padding-top: 80px;


    img {
    height: 56px;
    width: 126px;
    margi-bottom: 32px;
    display: block;
    margin: 0 auto;
    }
`

export const ListaDeLinks = styled.ul`
    list-style: none;
    text-decoration: none;
    padding-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
    padding-right: 8px;
    font-size: 24px;
    color: ${cores.vermelho};
    }
`

export const DescricaoFooter = styled.p`
    padding-top: 80px;
    font-size: 10px;
    color: ${cores.vermelho};
    text-decoration: none;
    width: 460px;
    margin: 0 auto;
    text-align: center;
`