import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Restaurante from "./paginas/Restaurante";
import EstilosGlobais from "./components/EstilosGlobais";
import Produto from "./paginas/Produto";
import MeusPedidos from "./paginas/MeusPedidos";
import RestauranteFavoritos from "./paginas/RestaurantesFavoritos";
import ProdutoPorCategoria from "./paginas/ProdutoPorCategoria";

function AppRoutes() {
  return(
    <BrowserRouter>
      <EstilosGlobais/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurante/:nome" element={<Restaurante/>}/>
        <Route path="/restaurante/:restaurante/:nome" element={<Produto/>}/>
        <Route path="/meusPedidos" element={<MeusPedidos/>}/>
        <Route path="/restaurantesFavoritos" element={<RestauranteFavoritos/>}/>
        <Route path="/produto/:categoria" element={<ProdutoPorCategoria/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes
