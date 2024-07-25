import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import AppContext from "../../contexts/myContext";
import styled from "styled-components";
import ItemRestaurante from "../../components/Lista/ItemRestaurante";
import ModalDeletarFavorito from "../../components/ModalDeletarFavorito";
import BarraPesquisa from "../../components/BarraPesquisa";

const ContRestaurantes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`
const Titulo = styled.h1`
    margin: 20px 0 10px 0;
    font-size: 12px;
    color: #7E8392;
    @media screen and (min-width: 1024px) {
        margin: 30px 0 20px 0;
        color: #323232;
        font-size: 20px;
        font-weight: 600;
    }
`

const BuscarRestaurante = ({ aoConfirmar }) => {
    const parametros = useParams();
    const { restaurantes, restauranteSelecionado, setRestauranteSelecionado } = useContext(AppContext);

    const restaurantesFiltrados = restaurantes.filter(restaurante => restaurante.nm_restaurante === parametros.restaurante);
 
    return(
        <>
            <Header barraDePesquisa linha $barraDesktop/>
            <BarraPesquisa $mobile/>
            <Titulo>Resultados para “{parametros.restaurante}”</Titulo>      
            <ContRestaurantes>
                {restaurantesFiltrados[0] ? restaurantesFiltrados.map(restaurante => {
                    return(<ItemRestaurante key={restaurante.nm_restaurante} restaurante={restaurante}/>)
                }) : ''}    
            </ContRestaurantes>  
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

export default BuscarRestaurante;