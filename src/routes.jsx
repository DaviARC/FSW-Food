import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Restaurante from "./paginas/Restaurante";
import EstilosGlobais from "./components/EstilosGlobais";

function AppRoutes() {
  return(
    <BrowserRouter>
      <EstilosGlobais/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurante/:nome" element={<Restaurante/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes
