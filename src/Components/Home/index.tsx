import SectionHome from "../CardsList";
import Header from "../Header";
import { useGetRestaurantsQuery } from "../../store/services/api";
import { Loader } from "../Loader";

export type Restaurante = {
    capa: string
    titulo: string[]
    descricao: string[]
    id: number
    tipo: string[]
    avaliacao: number
    destacado: boolean
    cardapio: [{
        foto: string
        preco: number
        id: number
        nome: string
        descricao: string
        porcao: string
    }]
}

const Home = () => {

    const { data, isLoading } = useGetRestaurantsQuery()
    
    if(isLoading) {
        return <Loader />
    }

    if (!data) {
  return null
}

    return(
    <>
    <Header />
    <SectionHome produto={data} />
    </>
    )
}

export default Home