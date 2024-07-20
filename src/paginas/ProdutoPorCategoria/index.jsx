import styled from "styled-components"
import Header from "../../components/Header"
import Titulo from "../../components/Titulo"
import { useParams } from "react-router-dom"
import ItemPedido from "../../components/Lista/ItemPedido"
import Lista from "../../components/Lista"
import { useContext } from "react"
import AppContext from "../../contexts/myContext"

const MainProdutosCategoria = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const ProdutoPorCategoria = () => {
    const parametros = useParams();
    const { restaurantes, itens } = useContext(AppContext)
    
    const itensCategoria = itens.filter(item => item.nm_categoria === parametros.categoria)
    const restaurantesCategoria = restaurantes.filter(restaurante => restaurante.nm_categoria === parametros.categoria)
    
    return(
        <>
            <Header barraDePesquisa $barraDesktop/>
            <Titulo>{parametros.categoria}</Titulo>
            <MainProdutosCategoria>
                {itensCategoria.map(item => <ItemPedido key={item.nm_item} item={item}/>)}
            </MainProdutosCategoria>
            <Lista listaItens={restaurantesCategoria} restauranteTipo titulo='Restaurantes' paginaRestaurante $desktop/>
        </>
    )
}

export default ProdutoPorCategoria