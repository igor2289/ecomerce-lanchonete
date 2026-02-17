import styled from "styled-components"
import { cores } from "../../../styles"

export const ContainerSidebar = styled.div`
    background-color: ${cores.vermelho};
    padding: 32px 8px;
    display: none;
    position: fixed;
    right: 0;
    width: 360px;
    height: 100%;

    &.is-open {
        display: block;
    }
`

export const Produto = styled.div`
    background-color: #FFEBD9;
    padding: 8px;
    color: ${cores.vermelho};
    height: 100px;
    max-width: 344px;
    display: flex;
    margin-bottom: 16px;
    max-height: 100px;
`

export const PizzaSidebar = styled.img`
    width: 80px;
    height: 80px;
    `

export const DescricaoProduto = styled.div`
    display: block;
    padding: 8px;

    h3 {
    margin-bottom: 16px;
    }
`

export const BotaoRemover = styled.a`
    border: none;
    position: fixed;
    right: 24px;
    margin-top: 64px;
    color: ${cores.vermelho};
    cursor: pointer;
`

export const ValorTotal = styled.div`
    color: #FFEBD9;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 32px;
`

export const BotaoCarrinho = styled.a`
    display: flex;
    color: ${cores.vermelho};
    background-color: #FFEBD9;
    padding: 4px 0;
    font-weight: bold;
    width: 344px;
    border: none;
    cursor: pointer;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    text-decoration: none;
`