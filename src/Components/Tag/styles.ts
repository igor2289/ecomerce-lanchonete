import styled from "styled-components";
import { cores } from "../../styles";



export const TagImage = styled.div`
    padding: 4px 6px;
    background-color: ${cores.vermelho};
    color: #FFEBD9;
    font-weight: bold;
    font-size: 12px;
    display: inline-block;
    position: absolute;
    transform: translateX(-68px);
    margin-top: 16px;
    margin-right: 16px;
`

export const TagDestaque = styled(TagImage)`
    padding: 4px 6px;
    background-color: ${cores.vermelho};
    color: #FFEBD9;
    font-weight: bold;
    font-size: 12px;
    display: inline-block;
    position: absolute;
    transform: translateX(-200px);
    margin-top: 16px;
`