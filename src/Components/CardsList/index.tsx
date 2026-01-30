import Card from "../Card";
import type { Restaurante } from "../Home";
import { CardsList, ContainerCards } from "./styles";

type PropsProdutos = {
    produto: Restaurante[]
}

const SectionHome = ({ produto }: PropsProdutos) => {

    return(
        <div className="container">
            <ContainerCards>
            <CardsList>
                {produto.map((product) => (
                    <><li key={product.id}>
                        <Card id={product.id} avaliacao={product.avaliacao} tipo={product.tipo} foto={product.capa} description={product.descricao} title={product.titulo} children="Japonesa" />
                    </li>
                    </>
                ))}
            </CardsList>
        </ContainerCards>
        </div>
)
}
export default SectionHome
