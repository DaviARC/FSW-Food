import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Restaurante from "./paginas/Restaurante";
import EstilosGlobais from "./components/EstilosGlobais";
import Produto from "./paginas/Produto";
import MeusPedidos from "./paginas/MeusPedidos";
import RestauranteFavoritos from "./paginas/RestaurantesFavoritos";
import ProdutoPorCategoria from "./paginas/ProdutoPorCategoria";
import { useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./contexts/myContext";

function AppRoutes() {
  const [itens, setItens] = useState([]);
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
          const responseItens = await axios({
            method: 'get',
            url: 'http://localhost:3000/itens',
          })
          const responseRestaurantes = await axios({
            method: 'get',
            url: 'http://localhost:3000/restaurantes',
          })
          
          const dataItens = await responseItens.data;

          const resultadoItens = dataItens.map(item =>{
            let url;
            if(item.img_item){
                const img = item.img_item
                const base64String = arrayBufferToBase64(img.data);
                url = `data:image/png;base64,${base64String}`;
            }
            return {
              ...item,
              img_item: url
            }
          })

          const dataRestaurantes = await responseRestaurantes.data;

          const resultadoRestaurantes = dataRestaurantes.map(restaurante =>{
            let url;
            if(restaurante.img_restaurante){
                const img = restaurante.img_restaurante
                const base64String = arrayBufferToBase64(img.data);
                url = `data:image/png;base64,${base64String}`;
            }
            return{
              ...restaurante,
              img_restaurante: url
            }
          })
          
          setItens(resultadoItens)
          setRestaurantes(resultadoRestaurantes)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData(); 
  },[])

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  return(
    <AppContext.Provider value={{itens, setItens, restaurantes, setRestaurantes}}>
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
    </AppContext.Provider>
  )
}
export default AppRoutes
