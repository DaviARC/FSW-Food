import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import AppContext from "../../contexts/myContext";
import styled from "styled-components";
import ItemRestaurante from "../../components/Lista/ItemRestaurante";
import ModalDeletarFavorito from "../../components/ModalDeletarFavorito";
import BarraPesquisa from "../../components/BarraPesquisa";
import ItemPedido from "../../components/Lista/ItemPedido";

const ContItens = styled.div`
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

const VerTodos = ({ aoConfirmar }) => {
    const parametros = useParams();
    const { restaurantes, itens, restauranteSelecionado, setRestauranteSelecionado } = useContext(AppContext);

    let lista = [];
    if(parametros.recomendado === "Itens"){
        lista = itens.filter((item) => {
            return item.nm_categoria !== 'Sobremesas' && item.nm_categoria !== 'Sucos' && item.nm_categoria !== 'Refrigerantes'
        })
        lista = lista.sort((a, b) => a.nm_restaurante.localeCompare(b.nm_Restaurante))
    } else if(parametros.recomendado === "Restaurantes"){
        lista = restaurantes;
    }

    return(
        <>
            <Header barraDePesquisa linha $barraDesktop/>
            <BarraPesquisa $mobile/>
            <Titulo>{parametros.recomendado}</Titulo>      
            <ContItens>
                {parametros.recomendado === "Itens" ? lista.map(item => {
                    return <ItemPedido paginaRestaurante item={item} key={item.nm_item}/>
                }) : ''}
                {parametros.recomendado === "Restaurantes" ? lista.map(restaurante => {
                    return <ItemRestaurante restaurante={restaurante} key={restaurante.nm_restaurante}/>
                }) : ''}
            </ContItens>  
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

export default VerTodos;