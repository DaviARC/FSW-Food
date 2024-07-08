import styled from "styled-components"
import Header from "../../components/Header"
import Titulo from "../../components/Titulo"
import { useParams } from "react-router-dom"
import ItemPedido from "../../components/Lista/ItemPedido"
import Lista from "../../components/Lista"

const MainProdutosCategoria = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const ProdutoPorCategoria = () => {
    const params = useParams()

    return(
        <>
            <Header barraDePesquisa $barraDesktop/>
            <Titulo>{params.categoria}</Titulo>
            <MainProdutosCategoria>
                <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
                <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
                <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
                <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
            </MainProdutosCategoria>
            <Lista restaurantes titulo='Restaurantes' paginaRestaurante $desktop/>
        </>
    )
}

export default ProdutoPorCategoria