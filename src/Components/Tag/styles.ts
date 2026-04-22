import styled from "styled-components";
import { colors } from "../../styles";

export const TagImage = styled.div`
    padding: 4px 6px;
    background-color: ${colors.vermelho};
    color: #FFEBD9;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    position: absolute;
    height: 26px;
    align-items: center;
    right: 8px;
    margin-top: 16px;
    width: 61px;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    line-height: 100%;
    border-radius: 8px;
`

export const TagDestaque = styled.div`
    padding: 4px 6px;
    background-color: ${colors.vermelho};
    color: #FFEBD9;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    position: absolute;
    margin-top: 16px;
    width: 121px;
    height: 26px;
    white-space: nowrap;
    right: 77px;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 8px;
`