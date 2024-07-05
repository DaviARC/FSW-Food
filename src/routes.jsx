import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Restaurante from "./paginas/Restaurante";
import EstilosGlobais from "./components/EstilosGlobais";
import Produto from "./paginas/Produto";

function AppRoutes() {
  return(
    <BrowserRouter>
      <EstilosGlobais/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurante/:nome" element={<Restaurante/>}/>
        <Route path="/restaurante/:restaurante/:nome" element={<Produto/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes
