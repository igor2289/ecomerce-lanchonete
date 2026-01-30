import { useEffect, useState } from "react";
import SectionHome from "../CardsList";
import Header from "../Header";


export type Restaurante = {
    capa: string
    titulo: string[]
    descricao: string[]
    id: number
    tipo: string[]
    avaliacao: number
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

    const [productHome, setProductHome] = useState<Restaurante[]>([])

    useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setProductHome(res))
}, [])


    return(
    <>
    <Header />
    <SectionHome produto={productHome} />
    </>
    )
}

export default Home