import styled from "styled-components";
import { cores } from "../../../styles";

export const Input1 = styled.input`
    width: 228px;
    height: 32px;
    margin-left: 8px;
    margin-top: 4px;
    margin-bottom: 8px;
    border: none;
`

export const Input2 = styled.input`
    width: 76px;
    height: 32px;
    margin-left: 8px;
    margin-bottom: 16px;
    border: none;
    margin-top: 4px;
`

export const Input3 = styled.input`
    width: 150px;
    height: 32px;
    margin-left: 8px;
    margin-top: 4px;
    margin-bottom: 24px;
    border: none;
`

export const ButtonPayment = styled.button`
    color: ${cores.vermelho};
    background-color: #FFEBD9;
    border: none;        
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    text-align: center;
    display: inline-block;
    white-space: nowrap;
    height: 24px;
    cursor: pointer;
`