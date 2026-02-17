import { useEffect, useState } from "react"
import ItemCardapio, { type PropsItem } from "../itemCardapio"
import { GridCardapio } from "./styles"
import type { Restaurante } from "../../Home"
import { useParams } from "react-router-dom"

type ItemSelecionado = {
    onSelect: (itemAtual: PropsItem) => void
}
    const Cardapio = ({ onSelect }: ItemSelecionado) => {
    const [produto, setProduto] = useState<Restaurante>()
    const { id } = useParams<{ id: string }>()

   useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then((data: Restaurante[]) => {
        const restaurante = data.find(r => r.id === Number(id))
        setProduto(restaurante)
      })
  }, [id])
  
    if (!produto) {
        return <h3>Carregando....</h3>
    }

    return(
        <>
        <div className="container"> 
        <GridCardapio>
            {produto.cardapio.map((item) => (
            <li key={item.id}>
                <ItemCardapio onSelect={() => onSelect(item)} item={item} />
            </li>
            ))}
        </GridCardapio>
    </div>
    </>
    )
}

export default Cardapio