import imageCardapio from '../../../assets/perfil-cardapio.png'
import { ButtonCardapio, DescricaoCardapio, ImagemCardapio, TituloCardapio } from './styles'

    const ItemCardapio = () => {
    return (
        <>
    <div>
    <ImagemCardapio src={imageCardapio} alt="" />
    <TituloCardapio>Pizza Marguerita</TituloCardapio>
    <DescricaoCardapio>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</DescricaoCardapio>
    <ButtonCardapio href='/modal'>Adicionar ao carrinho</ButtonCardapio>
    </div>
    </>
)
}

export default ItemCardapio