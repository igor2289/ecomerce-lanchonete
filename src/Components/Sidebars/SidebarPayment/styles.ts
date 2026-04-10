import styled from "styled-components";
import { cores } from "../../../styles";

export const ContainerPayment = styled.div`
    background-color: ${cores.vermelho};
    padding: 32px 16px;
    display: block;
    position: fixed;
    right: 0;
    width: 360px;
    height: 100%;
`

export const InputPayment = styled.input`
    width: 100%;
    border: none;
    height: 32px;
    margin-top: 4px;
    padding-left: 8px;
`

export const Input2 = styled.input`
    width: 228px;
    height: 32px;
    margin-top: 4px;
    border: none;
    padding-left: 8px;
`

export const Input3 = styled.input`
    width: 76px;
    height: 32px;
    margin-left: 8px;
    border: none;
    margin-top: 4px;
    padding-left: 8px;
`

export const Input4 = styled.input`
    width: 150px;
    height: 32px;
    margin-top: 4px;
    border: none;
    padding-left: 8px;
`

export const LabelPayment = styled.label`
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    color: #FFEBD9;
    margin-bottom: 8px;
    margin-top: 16px;
`

export const LabelCode = styled.label`
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    color: #FFEBD9;
    margin-bottom: 8px;
    margin-top: 16px;
    margin-left: 8px;
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
    padding: 16px 0;
    color: #fff;
    font-size: 12px;

     &.marginLeft {
        
    }
`