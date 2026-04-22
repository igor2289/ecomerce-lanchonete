import 'bootstrap-icons/font/bootstrap-icons.css';
import  Logo2  from "../../assets/Hero.png";

import * as s from "./styles";

const Footer = () => (
    <s.FooterContainer>
        <img src={Logo2} alt="" />
        <s.LinksList>
           <li><a href="#"><i className="bi bi-facebook"></i></a></li>
           <li><a href="#"><i className="bi bi-instagram"></i></a></li>
           <li><a href="#"><i className="bi bi-twitter"></i></a></li>
        </s.LinksList>
        <s.FooterDescription>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </s.FooterDescription>
    </s.FooterContainer>
)

export default Footer