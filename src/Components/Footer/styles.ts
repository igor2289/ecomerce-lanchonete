import styled from "styled-components"
import { colors } from "../../styles"

export const FooterContainer = styled.footer`
    display: block;
    margin: 0 auto;
    text-align: center;
    max-width: 100%;
    padding-top: 80px;
    padding-bottom: 40px;
    background-color: #242222;

    img {
    height: 72px;
    width: 168px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    }
`

export const LinksList = styled.ul`
    list-style: none;
    text-decoration: none;
    padding-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
    padding-right: 8px;
    font-size: 24px;
    color: ${colors.vermelho};

        &:hover {
            color: #e7443eff;
        }
    }
`

export const FooterDescription = styled.p`
    padding-top: 80px;
    font-size: 10px;
    color: ${colors.vermelho};
    text-decoration: none;
    width: 460px;
    margin: 0 auto;
    text-align: center;
`