import Footer from "./Components/Footer"
import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import { GlobalCss } from "./styles"


function App() {
  return (
    <BrowserRouter>
    <GlobalCss />
    <Rotas />
    <Footer />
    </BrowserRouter>
  )
}

export default App