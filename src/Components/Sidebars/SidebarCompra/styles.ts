import styled from "styled-components"
import { colors } from "../../../styles"

export const SidebarContainer = styled.div`
    background-color: #201f1fff;
    padding: 32px 8px;
    display: none;
    position: fixed;
    right: 0;
    width: 360px;
    height: 100%;
    box-shadow: -8px 0 20px rgba(0, 0, 0, 0.5);

    &.is-open {
        display: block;
    }

    li {
        list-style: none;
    }
`

export const Product = styled.div`
    background-color: #FFEBD9;
    padding: 8px;
    color: #3d3939ff;
    height: 100px;
    max-width: 344px;
    display: flex;
    margin-bottom: 16px;
    max-height: 100px;
    border-radius: 4px;

    p {
        color: #2e2b2bff;
        font-size: 16px;
        font-weight: 500;
    }

`

export const PizzaSidebar = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
`

export const ProductDescription = styled.div`
    display: block;
    padding: 8px;

    h3 {
    margin-bottom: 16px;
    }
`

export const RemoveButton = styled.a`
    border: none;
    position: fixed;
    right: 24px;
    margin-top: 64px;
    color: ${colors.vermelho};
    cursor: pointer;
`

export const TotalValue = styled.div`
    color: #FFEBD9;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 32px;

    .text-center {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const CartButton = styled.a`
    display: flex;
    color: #FFEBD9;
    background-color: ${colors.vermelho};
    padding: 4px 0;
    font-weight: bold;
    width: 344px;
    border: none;
    cursor: pointer;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    text-decoration: none;
    border-radius: 4px;
`
