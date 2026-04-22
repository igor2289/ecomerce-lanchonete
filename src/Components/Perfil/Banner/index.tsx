import { useParams } from 'react-router-dom'
import { Loader } from '../../Loader'
import { useGetRestaurantsQuery } from '../../../store/services/api'

import * as s from './styles'

const BannerPerfil = () => {

    const { id } = useParams<{id: string}>()
    const { data, isLoading } = useGetRestaurantsQuery()
    const produto = data?.find((r) => r.id === Number(id))

    return (
        <>
        {isLoading ? (
            <Loader />
        ): (
            <s.PerfilImage style={{backgroundImage: `url(${produto?.capa})`}}>
        <div className="container">
            <h2>{produto?.tipo}</h2>
            <s.BannerTitle>{produto?.titulo}</s.BannerTitle>
        </div>
        </s.PerfilImage>
        )}
        </>
    )
}

export default BannerPerfil