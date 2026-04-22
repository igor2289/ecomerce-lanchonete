import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderContainer = styled.div `
    color: ${colors.primaria};
    background-color: #242222;
    align-items: center;
    padding: 24px;
    text-align: center;
    padding-bottom: 120px;
    border-bottom: 2px solid red;
    box-shadow: 0 0 6px #f53737ff;
`

export const Hero = styled.img`
    margin-top: 40px;
    margin-bottom: 32px;
    width: 192px;
    height: 88px;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    max-width: 540px;
    margin: 0 auto;
    text-decoration: none;
    line-height: 100%;
`