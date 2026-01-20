import styled from "styled-components";
import { cores } from "../../../styles";

export const TituloEntrega = styled.h3`
    color: #FFEBD9;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 8px;
`

export const ItemFormulario = styled.div`
    display: block;
    padding: 4px;
    align-items: center;
`

export const LabelEntrega = styled.label`
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    color: #FFEBD9;
    margin-bottom: 8px;
`

export const InputEntrega = styled.input`
    width: 100%;
    border: none;
    height: 32px;
`

export const DisplayFlex = styled.div`
    display: flex;
`

export const BotoesEntrega = styled.div`
    padding-top: 16px;
`

export const ButtonEntrega = styled.a`
    display: flex;
    color: ${cores.vermelho};
    background-color: #FFEBD9;
    padding: 4px 0;
    font-weight: bold;
    border: none;
    cursor: pointer;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    text-decoration: none;
    width: 100%;
`