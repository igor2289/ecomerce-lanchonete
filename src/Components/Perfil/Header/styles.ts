import styled from "styled-components";
import { breakpoints } from "../../../styles";

export const Header = styled.div`
    height: 186px;
    padding-top: 63px;
    background-color: #242222;
    max-width: 100%;
    font-weight: 900;

    .openCart {
        cursor: pointer;
    }

    ul {
        list-style: none;
        color: #eeeaeaff;
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-weight: bold;
        height: 100%;
        text-align: center;
    }

    p {
        margin-top: 24px;
        font-weight: 900;

        @media (max-width: ${breakpoints.tablet}) {
            padding: 0 24px;
        }
    }

    img {
        cursor: pointer;
        height: 72px;
        widht: 104px;
        margin-right: 24px;
        padding-bottom: 10px;

        
    }
`

export const HeaderItem = styled.p`
    margin-top: 24px;
    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const CartCounting = styled.p`
    margin-right: 8px;
    color: #fff;
`