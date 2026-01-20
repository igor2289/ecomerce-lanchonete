import  Logo2  from "../../assets/Hero.png";
import { ContainerFooter, DescricaoFooter, ListaDeLinks } from "./styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => (
    <ContainerFooter>
        <img src={Logo2} alt="" />
        <ListaDeLinks>
           <li><a href="#"><i className="bi bi-facebook"></i></a></li>
           <li><a href="#"><i className="bi bi-instagram"></i></a></li>
           <li><a href="#"><i className="bi bi-twitter"></i></a></li>
        </ListaDeLinks>
        <DescricaoFooter>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </DescricaoFooter>
    </ContainerFooter>
)

export default Footer