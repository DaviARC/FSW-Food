import { useParams } from "react-router-dom";
import DescricaoProduto from "../../components/DescricaoProduto"
import Header from "../../components/Header"
import Lista from "../../components/Lista"
import Botao from "../../components/Botao";
import { useContext } from "react";
import AppContext from "../../contexts/myContext";


const Produto = () => {
    const parametros = useParams();
    const { itens } = useContext(AppContext)

    const itensRestaurante = itens.filter(item => {
        return item.nm_restaurante === parametros.restaurante
    })

    const itensLista = {
        selecionado: itensRestaurante.filter(item => item.nm_item === parametros.nome),

        recomendados: itensRestaurante.filter(item => item.nm_categoria !== 'Sucos' && item.nm_categoria !== 'Refrigerantes' && item.nm_categoria !== 'Sobremesas'),
        
        sucos: itensRestaurante.filter(item => item.nm_categoria === 'Sucos'),
        
        refrigerantes: itensRestaurante.filter(item => item.nm_categoria === 'Refrigerantes'),
       
        sobremesas: itensRestaurante.filter(item => item.nm_categoria === 'Sobremesas')
    }

    return(
        <>
            <Header barraDePesquisa $desktop/>
            {itens[0] ? <DescricaoProduto item={itensLista.selecionado[0]}/> : ''}
            {itensLista.sucos[0] ? <Lista listaItens={itensLista.sucos} titulo='Sucos' pedidos paginaRestaurante/> : <Lista listaItens={itensLista.refrigerantes} titulo='Refrigerantes' pedidos paginaRestaurante/>}
            <Botao $mobile>Adicionar à Sacola</Botao>
        </>
    )
}

export default Produto