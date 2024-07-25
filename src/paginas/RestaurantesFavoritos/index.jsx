import styled from "styled-components"
import Header from "../../components/Header"
import ItemRestaurante from "../../components/Lista/ItemRestaurante"
import Titulo from "../../components/Titulo"
import { useContext } from "react"
import AppContext from "../../contexts/myContext"
import ModalDeletarFavorito from "../../components/ModalDeletarFavorito"

const MainRestaurantes = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const RestauranteFavoritos = ({ aoConfirmar }) => {
   const { restauranteSelecionado, setRestauranteSelecionado, restaurantes } = useContext(AppContext);

   const restaurantesFavoritos = restaurantes.filter(restaurante => restaurante.favorito)

    return(
        <>
            <Header barraDePesquisa $barraDesktop />
            <Titulo>Restaurantes Favoritos</Titulo>
            <MainRestaurantes>
                {restaurantesFavoritos[0] ? restaurantesFavoritos.map(restaurante => {
                    return (
                        <ItemRestaurante key={restaurante.nm_restaurante} favorito $width restaurante={restaurante}/>
                    )
                }) : ''}
            </MainRestaurantes>
            {restauranteSelecionado ? <ModalDeletarFavorito 
                item={restauranteSelecionado} 
                aoFechar={aoConfirmar} 
                aoCancelar={() => setRestauranteSelecionado(null)}
                sobre={restauranteSelecionado.favorito ? 'Tem certeza que deseja remover esse restaurante dos favoritos?' : 'Deseja adicionar esse restaurante aos favoritos?'}
                titulo={restauranteSelecionado.favorito ? 'Remover Restaurante' : 'Adicionar restaurante'}
                confirmar='Confirmar'
            /> : ''}
        </>
    )
}

export default RestauranteFavoritos 