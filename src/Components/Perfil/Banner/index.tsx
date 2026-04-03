import { useParams } from 'react-router-dom'
import { ImagemPerfil, TituloBanner } from './styles'
import { useGetRestaurantsQuery } from '../../../store/services/api'
import { Loader } from '../../Loader'

const BannerPerfil = () => {

    const { id } = useParams<{id: string}>()
    const { data, isLoading } = useGetRestaurantsQuery()
    const produto = data?.find((r) => r.id === Number(id))

    return (
        <>
        {isLoading ? (
            <Loader />
        ): (
            <ImagemPerfil style={{backgroundImage: `url(${produto?.capa})`}}>
        <div className="container">
            <h2>{produto?.tipo}</h2>
            <TituloBanner>{produto?.titulo}</TituloBanner>
        </div>
        </ImagemPerfil >
        
        )}
        </>
    )
}

export default BannerPerfil