import { ButtonCardapio, ContainerItem, DescricaoCardapio, ImagemCardapio, TituloCardapio } from './styles'

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
    <ContainerItem>
    <ImagemCardapio src={item.foto} alt="" />
    <TituloCardapio>{item.nome}</TituloCardapio>
    <DescricaoCardapio>{item.descricao}</DescricaoCardapio>
    <ButtonCardapio onClick={() => onSelect(item)}>Mais detalhes</ButtonCardapio>
    </ContainerItem>
    </>
)
}

export default ItemCardapio