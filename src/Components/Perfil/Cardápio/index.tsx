import ItemCardapio from "../itemCardapio"
import { GridCardapio } from "./styles"



const Cardapio = () => {

    return(
    <div className="container">

        <GridCardapio>
            <li>
                <ItemCardapio />
            </li>
            <li>
                <ItemCardapio />
            </li>
            <li>
                <ItemCardapio />
            </li>
            <li >
                <ItemCardapio />
            </li>
             <li>
                <ItemCardapio />
            </li>
             <li>
                <ItemCardapio />
            </li>
        </GridCardapio>
    </div>
    )
}

export default Cardapio