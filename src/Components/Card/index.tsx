import { ButtonPerfil, CardHome, Description, ImagensHome, ImageTitle } from "./styles"
import trattoria from '../../assets/3a244472c90467aeb9c58ffac7808807e160ee0c.png'
import hioki from '../../assets/5d53a2e228895a55942ffb290182da4c32ba645d.png'
import { TagDestaque } from "../Tag/styles"
import Tag from "../Tag"

export type Props = {
    children: 'Japonesa' | 'Italiana'
    title: 'Hioki Sushi' | 'La Dolce Vitta Trattoria'
    description: string
}
 

const Card = ({ children, title, description }: Props) => (
    <div>
    <CardHome>
    <ImagensHome src={children  === 'Japonesa' ? (hioki) : (trattoria)} />
    {children === 'Japonesa' && (<TagDestaque children="Destaque da semana"></TagDestaque>)}
    {children === 'Japonesa' ? (
        <Tag children="Japonesa" />
    ):  <Tag children="Italiana"/>}
    <div>
    <ImageTitle>
    <li>
    <h3>{title}</h3>
    </li>
    <li>
    <h3>4.7 <i className="bi bi-star-fill"></i></h3>
    </li>
    </ImageTitle>
    </div>
    <Description>{description}</Description>
    <ButtonPerfil href="/perfil">Saiba mais</ButtonPerfil>
    </CardHome>
    </div>
)

export default Card