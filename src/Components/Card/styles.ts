import styled from "styled-components";
import { cores } from "../../styles";


export const CardHome = styled.div`
    border: solid 1px ${cores.vermelho};
    padding-bottom: 8px;
    max-width: 472px;
    width: 100%;
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

    ul {
    top: 0;
    display: flex;
    gap: 16px;
    width: auto;
    height: 100%;
    right: 0;
    list-style: none;
    }

    // li: nth-child(1) {
    //     position: absolute;
        
    // }
`

export const ImageTitle = styled.ul`
    display: flex;
    position: relative;
    color: ${cores.vermelho};
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
    color: ${cores.vermelho};
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
    background-color: ${cores.vermelho};
    font-size: 14px;
    width: 82px;
    padding: 4px 6px;
    height: 24px;
    text-decoration: none;
    font-weight: bold;
    text-align: left;
    display: block;
    left: 0;
    margin-left: 8px;
    cursor: pointer;
`