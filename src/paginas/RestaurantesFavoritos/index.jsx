import styled from "styled-components"
import Header from "../../components/Header"
import ItemRestaurante from "../../components/Lista/ItemRestaurante"
import ModalDeletarFavorito from "../../components/ModalDeletarFavorito"
import { useState } from "react"
import Titulo from "../../components/Titulo"

const MainRestaurantes = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const RestauranteFavoritos = () => {
    const [restaurante, setRestaurante] = useState('Sushidojo');

    return(
        <>
            <Header barraDePesquisa $barraDesktop />
            <Titulo>Restaurantes Favoritos</Titulo>
            <MainRestaurantes>
              <ItemRestaurante favorito $width restaurante={{nome: "Sushidojo"}}/>
              <ItemRestaurante favorito $width restaurante={{nome: "Sushidojo"}}/>
              <ItemRestaurante favorito $width restaurante={{nome: "Sushidojo"}}/>
            </MainRestaurantes>
            <ModalDeletarFavorito restaurante={restaurante} aoFechar={() => setRestaurante(null)}/>
        </>
    )
}

export default RestauranteFavoritos 