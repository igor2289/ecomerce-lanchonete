import { useNavigate } from "react-router-dom"
import { MdOutlineRestaurantMenu } from "react-icons/md";

import Tag from "../Tag"
import { TagDestaque } from "../Tag/styles"
import { encurtaTexto } from "../../utils"

import * as s from "./styles"

export type PropsInfos = {
    description: string[]
    title: string[]
    pic: string
    prominence: boolean
    type: string[]
    avaliation: number
    id: number
}
    
const Card = ({ title, description, pic, prominence, type, avaliation, id }: PropsInfos) => {
    const navigate = useNavigate()

    return(
        <div>
            <s.CardHome>
            <s.ImagensHome style={{backgroundImage: `url(${pic})`}}>
        <ul>
            <li>
                {prominence && (<TagDestaque children="Destaque da semana"></TagDestaque>)}
            </li>
            <li>
                {type && <Tag children={type}></Tag>}
            </li>
        </ul>
        </s.ImagensHome>
        <div>
            <s.ImageTitle>
                <li>
                    <h3>{title}</h3>
                </li>
                <li>
                    <h3>{avaliation}<i className="bi bi-star-fill"></i></h3>
                </li>
            </s.ImageTitle>
        </div>
        <s.Description>{encurtaTexto(description, 270)}</s.Description>
        <s.ButtonPerfil onClick={() => navigate(`/restaurante/${id}`)}><p>Abrir cardápio</p> <MdOutlineRestaurantMenu size={16} color="#fff" /></s.ButtonPerfil>
        </s.CardHome>
        </div>
    )    
}

export default Card