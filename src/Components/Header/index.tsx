import logo from '../../assets/Hero.png'

import * as s from './styles'

const Header = () => {

    return (
        <s.HeaderContainer>
        <s.Hero src={logo} alt="" />
        <s.Title>Viva experiências gastronomicas no conforto de sua casa</s.Title>
        </s.HeaderContainer>
    )
}

export default Header