import logo from '../../assets/Hero.png'
import { ContainerHeader, Logo, Título } from './styles'

const Header = () => {

    return (
    <ContainerHeader>
    <Logo src={logo} alt="" />
    <Título>Viva experiências gastronomicas no conforto de sua casa</Título>
    </ContainerHeader>
)
}

export default Header