import styled from "styled-components";
import { cores } from "../../../styles";

export const Input1 = styled.input`
    width: 228px;
    height: 32px;
    margin-left: 8px;
    margin-top: 4px;
    // margin-bottom: 8px;
    border: none;
`

export const Input2 = styled.input`
    width: 76px;
    height: 32px;
    margin-left: 8px;
    border: none;
    margin-top: 4px;
`

export const Input3 = styled.input`
    width: 150px;
    height: 32px;
    margin-left: 8px;
    margin-top: 4px;
    border: none;
`

export const LabelPayment = styled.label`
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    color: #FFEBD9;
    margin-bottom: 8px;
    margin-top: 16px;
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

    &.marginTop {
        margin-top: 24px;
    }
`

export const ErrorMessage = styled.small`
    margin-bottom: 8px;

     &.marginLeft {
        margin-left: 8px;
    }
`