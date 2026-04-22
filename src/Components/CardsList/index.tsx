import Card from "../Card";
import type { Restaurante } from "../Home";
import * as s from "./styles";

type PropsProdutos = {
    produto: Restaurante[]
}

const SectionHome = ({ produto }: PropsProdutos) => {

    return(
        <div className="container">
            <s.ContainerCards>
                <s.CardsList>
                    {produto.map((product) => (
                        <li key={product.id}>
                            <Card id={product.id} avaliation={product.avaliacao} type={product.tipo} pic={product.capa} description={product.descricao} title={product.titulo} prominence={product.destacado} />
                        </li>
                    ))}
                </s.CardsList>
            </s.ContainerCards>
        </div>
    )
}
export default SectionHome
