import styled from "styled-components";
import { colors } from "../../styles";


export const CardHome = styled.div`
    padding-bottom: 8px;
    max-width: 472px;
    width: 100%;
    border-radius: 0 0 8px 8px;
    background-color: #201f1fff;
    border-radius: 6px 6px 0 0;
    transition: transform 0.15 ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(226, 146, 93, 0.94);
        border-radius: 8px;
}
`

export const ImagensHome = styled.button`
    height: 217px;
    max-width: 472px;
    width: 100%;
    margin-bottom: 8px;
    position: relative;
    border: none;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px 8px 0 0;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.025);
        border-radius: 8px;
    }

    ul {
    top: 0;
    display: flex;
    gap: 16px;
    width: auto;
    height: 100%;
    right: 0;
    list-style: none;
    }

`

export const ImageTitle = styled.ul`
    display: flex;
    position: relative;
    color: #e7a77cf6;
    justify-content: space-between;
    padding: 0 6px;
    list-style: none;
    margin-bottom: 16px;

    i{
    color: #FFB930;
    margin-left: 8px;
    }
`

export const Description = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 22px;
    margin-left: 8px;
    max-width: 100%;
    text-align: left;
    padding: 8 16px;
    margin-bottom: 16px;
`

export const ButtonPerfil = styled.a`
    color: #FFEBD9;
    background-color: ${colors.vermelho};
    font-size: 14px;
    max-width: 126px;
    padding: 4px;
    height: 28px;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-left: 12px;
    cursor: pointer;
    border-radius: 6px;
    justify-content: center;

    p {
        margin-right: 6px;
    }

    &:hover {
        transform: scale(1.025);
        box-shadow: 0 4px 4px 8px #rgba(0, 0, 0, 0.95);
        background-color: #ca3939ff
    }
`