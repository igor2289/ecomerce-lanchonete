import { useParams } from "react-router-dom"

import ItemCardapio, { type PropsItem } from "../itemCardapio"
import { Loader } from "../../Loader"

import { useGetRestaurantsQuery } from "../../../store/services/api"

import { GridCardapio } from "./styles"

type ItemSelecionado = {
    onSelect: (itemAtual: PropsItem) => void
}

const Cardapio = ({ onSelect }: ItemSelecionado) => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading } = useGetRestaurantsQuery()
    const produto = data?.find((r) => r.id === Number(id))

    return(
        <>
        {isLoading ? (
            <Loader  />
        ): (
             <div className="container">
                <GridCardapio>
                    {produto?.cardapio.map((item) => (
                        <li key={item.id}>
                            <ItemCardapio onSelect={() => onSelect(item)} item={item} />
                        </li>
                    ))}
                </GridCardapio>
            </div>
        )}
        </>
    )
}

export default Cardapio