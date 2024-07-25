import styled from "styled-components"
import Header from "../../components/Header"
import Titulo from "../../components/Titulo"
import { useParams } from "react-router-dom"
import ItemPedido from "../../components/Lista/ItemPedido"
import Lista from "../../components/Lista"
import { useContext } from "react"
import AppContext from "../../contexts/myContext"
import ModalDeletarFavorito from "../../components/ModalDeletarFavorito"

const MainProdutosCategoria = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const ProdutoPorCategoria = ({ aoConfirmar }) => {
    const parametros = useParams();
    const { restaurantes, itens, restauranteSelecionado, setRestauranteSelecionado } = useContext(AppContext)
    
    const itensCategoria = itens.filter(item => item.nm_categoria === parametros.categoria)
    const restaurantesCategoria = restaurantes.filter(restaurante => {
        if(parametros.categoria !== 'Sobremesas' && parametros.categoria !== 'Sucos' && parametros.categoria !== 'Refrigerantes'){
            return restaurante.nm_categoria === parametros.categoria
        }
        return restaurante !== parametros.categoria
    })
    
    return(
        <>
            <Header barraDePesquisa $barraDesktop linha/>
            <Titulo>{parametros.categoria}</Titulo>
            <MainProdutosCategoria>
                {itensCategoria.map(item => <ItemPedido key={item.nm_item} item={item}/>)}
            </MainProdutosCategoria>
            <Lista listaItens={restaurantesCategoria} restauranteTipo titulo='Restaurantes' paginaRestaurante $desktop/>
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

export default ProdutoPorCategoria