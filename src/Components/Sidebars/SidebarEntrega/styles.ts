import styled from "styled-components";
import { colors } from "../../../styles";

export const DeliveryContainer = styled.div`
    background-color: #201f1fff;
    padding: 32px 8px;
    display: block;
    position: fixed;
    right: 0;
    width: 360px;
    height: 100%;
    box-shadow: -8px 0 20px rgba(0, 0, 0, 0.5);

    small {
        margin-top: 16px;
        font-size: 12px;
        color: rgba(230, 62, 62, 0.97);
    }
`

export const DeliveryTitle = styled.h3`
    color: #FFEBD9;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 8px;
`

export const FormItem = styled.div`
    display: block;
    padding: 4px;
    align-items: center;
`

export const DeliveryLabel = styled.label`
    margin-left: 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    color: #FFEBD9;
`

export const DeliveryInput = styled.input`
    width: 100%;
    border: none;
    height: 32px;
    padding-left: 8px;
    margin-top: 4px;
`

export const DisplayFlex = styled.div`
    display: flex;
    margin-top: 8px;
`

export const DeliveryButtons = styled.div`
    padding-top: 16px;
`

export const DeliveryButton = styled.a`
    display: flex;
    color: #FFEBD9;
    background-color: ${colors.vermelho};
    padding: 4px 0;
    font-weight: bold;
    border: none;
    cursor: pointer;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    text-decoration: none;
    width: 100%;
    border-radius: 4px;
`
