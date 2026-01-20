import Card from "../Card";
import { CardsList, ContainerCards } from "./styles";

const SectionHome = () => {
    const japainDescription = 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
    const italianDescription = 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

    return(
        <div className="container">
            <ContainerCards>
            <CardsList>
                <li>
                    <Card description={japainDescription} title="Hioki Sushi" children="Japonesa" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
                <li>
                    <Card description={italianDescription} title="La Dolce Vitta Trattoria" children="Italiana" />
                </li>
            </CardsList>
        </ContainerCards>
        </div>
)
}
export default SectionHome
