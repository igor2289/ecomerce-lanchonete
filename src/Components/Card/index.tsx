import { ButtonPerfil, CardHome, Description, ImagensHome, ImageTitle } from "./styles"
import { TagDestaque } from "../Tag/styles"
import Tag from "../Tag"
import { useNavigate } from "react-router-dom"
import { encurtaTexto } from "../../utils/text"

export type PropsInfos = {
    description: string[]
    title: string[]
    foto: string
    children: string
    tipo: string[]
    avaliacao: number
    id: number
}
    
const Card = ({ title, description, foto, children, tipo, avaliacao, id }: PropsInfos) => {
    const navigate = useNavigate()

    return(
    <div>
    <CardHome>
    <ImagensHome style={{backgroundImage: `url(${foto})`}}>
    <ul>
        <li>
            {children === 'Japonesa' && (<TagDestaque children="Destaque da semana"></TagDestaque>)}
        </li>
        <li>
            {tipo && <Tag children={tipo}></Tag>}
        </li>
    </ul>
    </ImagensHome>
    
    <div>
    <ImageTitle>
    <li>
    <h3>{title}</h3>
    </li>
    <li>
    <h3>{avaliacao}<i className="bi bi-star-fill"></i></h3>
    </li>
    </ImageTitle>
    </div>
    <Description>{encurtaTexto(description, 270)}</Description>
    <ButtonPerfil onClick={() => navigate(`/restaurante/${id}`)}>Saiba mais</ButtonPerfil>
    </CardHome>
    </div>
)    
}

export default Card