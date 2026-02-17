import trattoria from '../../../assets/dolce-trattoria.png'
import { ImagemPerfil, TituloBanner } from './styles'

const BannerPerfil = () => (
   <div>
    <ImagemPerfil style={{backgroundImage: `url(${trattoria})`}}>
        <h2>Italiana</h2>
        <TituloBanner>La Dolce Vita Trattoria</TituloBanner>
    </ImagemPerfil >
   </div>
    
) 

export default BannerPerfil