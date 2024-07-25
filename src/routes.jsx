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
import BuscarRestaurante from "./paginas/BuscarRestaurante";
import VerTodos from "./paginas/VerTodos";

function AppRoutes() {
  const [itens, setItens] = useState([]);
  const [restaurantes, setRestaurantes] = useState([])
  const [sacola, setSacola] = useState([]);
  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')));
  const [restauranteSelecionado, setRestauranteSelecionado] = useState(null);
  
  useEffect(()=>{
    async function fetchData(){
      try{
        let responseFavoritos = { data: [] };  

        const responseItens = await axios({
            method: 'get',
            url: 'http://localhost:3000/itens',
          })
          const responseRestaurantes = await axios({
            method: 'get',
            url: 'http://localhost:3000/restaurantes',
          })

          if (localStorage.getItem('token')) {
            try {
              responseFavoritos = await axios.get('http://localhost:3000/clientes/avaliarRestaurante', {
              headers: { Authorization: localStorage.getItem('token') }
              });
            } catch (error) {
              localStorage.clear();
              alert('Sua sessão expirou. Por favor, faça login novamente.');
              responseFavoritos = { data: [] }; // Define um valor padrão para continuar a execução
            }
          }

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
          const dataFavoritos = await responseFavoritos.data;

          console.log(dataFavoritos)

          const resultadoRestaurantes = dataRestaurantes.map(restaurante =>{
            let url;
            let favorito = false;
            if(restaurante.img_restaurante){
                const img = restaurante.img_restaurante
                const base64String = arrayBufferToBase64(img.data);
                url = `data:image/png;base64,${base64String}`;
            }
            dataFavoritos.length > 0 ? dataFavoritos.forEach(favoritoCd => {
              restaurante.cd_restaurante === favoritoCd.cd_restaurante ? favorito = true : ''
            }) : ''

            return{
              ...restaurante,
              img_restaurante: url,
              favorito: favorito
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

  console.log(restaurantes)

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const aoConfirmar = () => {
    setRestaurantes(restaurantes.map(restaurante => {
        if (restaurante.cd_restaurante === restauranteSelecionado.cd_restaurante){
            if(restauranteSelecionado.favorito){
                axios({
                    url: 'http://localhost:3000/clientes/favoritarRestaurante',
                    method: 'DELETE',
                    data: {cd_restaurante : restauranteSelecionado.cd_restaurante},
                    headers: {Authorization: localStorage.getItem('token')}
                })
            } else {
                axios({
                    url: 'http://localhost:3000/clientes/favoritarRestaurante',
                    method: 'POST',
                    data: {cd_restaurante : restauranteSelecionado.cd_restaurante},
                    headers: {Authorization: localStorage.getItem('token')}
                })
            }
            return({...restaurante, favorito: !restaurante.favorito});
        }
        return {... restaurante};
}))
setRestauranteSelecionado(null)
}

  return(
    <AppContext.Provider 
      value={{
        itens, setItens,
        restaurantes, setRestaurantes, 
        sacola, setSacola, 
        usuario, setUsuario,
        restauranteSelecionado, setRestauranteSelecionado
      }}>
      <BrowserRouter>
        <EstilosGlobais/>
        <Routes>
          <Route path="/" element={<Home aoConfirmar={aoConfirmar}/>}/>
          <Route path="/restaurante/:nome" element={<Restaurante/>}/>
          <Route path="/restaurante/:restaurante/:nome" element={<Produto/>}/>
          <Route path="/meusPedidos" element={<MeusPedidos/>}/>
          <Route path="/restaurantesFavoritos" element={<RestauranteFavoritos aoConfirmar={aoConfirmar}/>}/>
          <Route path="/produto/:categoria" element={<ProdutoPorCategoria aoConfirmar={aoConfirmar}/>}/>
          <Route path="/buscarRestaurante/:restaurante" element={<BuscarRestaurante aoConfirmar={aoConfirmar}/>}/>
          <Route path="/verTodos/:recomendado" element={<VerTodos aoConfirmar={aoConfirmar}/>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
export default AppRoutes
