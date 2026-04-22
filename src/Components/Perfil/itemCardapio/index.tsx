import * as s from './styles'

export type PropsItem = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

type ItemCardapioProps = {
    item: PropsItem
    onSelect: (item: PropsItem) => void
}

const ItemCardapio = ({ item, onSelect }: ItemCardapioProps) => {

    return (
        <>
        <s.ContainerItem>
            <s.FoodImage src={item.foto} alt="" />
            <s.FoodTitle>{item.nome}</s.FoodTitle>
            <s.FoodDescription>{item.descricao}</s.FoodDescription>
            <s.FoodButton onClick={() => onSelect(item)}>Mais detalhes</s.FoodButton>
        </s.ContainerItem>
        </>
)
}

export default ItemCardapio