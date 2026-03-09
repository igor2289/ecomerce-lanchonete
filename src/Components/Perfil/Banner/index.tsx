import trattoria from '../../../assets/dolce-trattoria.png'
import { ImagemPerfil, TituloBanner } from './styles'

const BannerPerfil = () => (

    <ImagemPerfil style={{backgroundImage: `url(${trattoria})`}}>
        <div className="container">
            <h2>Italiana</h2>
            <TituloBanner>La Dolce Vita Trattoria</TituloBanner>
        </div>
    </ImagemPerfil >
) 

export default BannerPerfil