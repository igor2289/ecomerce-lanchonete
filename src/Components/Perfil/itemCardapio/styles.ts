import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 320px;
`

export const FoodImage = styled.img`
    height: 167px;
    width: 100%;
    left: 0;
    top: 0;
    border: none;
    position: relative;
    object-fit: cover;
    border-radius: 8px;
`

export const FoodTitle = styled.h3`
    font-weight: 900;
    color: #e7a77cf6;
    padding: 8px 0;
`
export const FoodDescription = styled.p`
    color: #FFEBD9;
    font-size: 14px;
    margin-bottom: 16px;
`

export const FoodButton = styled.button`
    display: flex;
    color: #fff;
    background-color: ${colors.vermelho};
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
    border-radius: 4px;

    &:hover {
        background-color: rgba(247, 58, 58, 0.94);
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin: 0 auto;
    }
`