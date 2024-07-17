import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import DescricaoRestaurante from "../../components/DescricaoRestaurante";
import Lista from "../../components/Lista";
import PedidoFooter from "../../components/PedidoFooter";
import Sacola from "../../components/Sacola";
import PedidoEfetuado from "../../components/PedidoEfetuado";
import { useContext } from "react";
import AppContext from "../../contexts/myContext";

const Restaurante = () => {
    const parametros = useParams();
    const { restaurantes, itens } = useContext(AppContext)

    const restaurante = restaurantes.filter(restaurante => {
        return restaurante.nm_restaurante == parametros.nome
    })
    const itensRestaurante = itens.filter(item => {
        return item.nm_restaurante === parametros.nome
    })

    const itensLista = {
        recomendados: itensRestaurante.filter(item => item.nm_categoria !== 'Sucos' && item.nm_categoria !== 'Refrigerantes' && item.nm_categoria !== 'Sobremesas'),
        
        sucos: itensRestaurante.filter(item => item.nm_categoria === 'Sucos'),
        
        refrigerantes: itensRestaurante.filter(item => item.nm_categoria === 'Refrigerantes'),
       
        sobremesas: itensRestaurante.filter(item => item.nm_categoria === 'Sobremesas')
    }

    return(
        <>
            <Header barraDePesquisa $desktop/>
            {restaurante[0] ? <DescricaoRestaurante restaurante={restaurante[0]}/> : ''}
            {itensLista.recomendados[0] ? <Lista listaItens={itensLista.recomendados} titulo='Pedidos Recomendados' pedidos paginaRestaurante/> : ''}
            {itensLista.sobremesas[0] ? <Lista listaItens={itensLista.sobremesas} titulo='Sobremesas' $mobile pedidos paginaRestaurante/> : ''}
            {itensLista.refrigerantes[0] ? <Lista listaItens={itensLista.refrigerantes} titulo='refrigerantes' pedidos paginaRestaurante/> : ''}
            {itensLista.sucos[0] ? <Lista listaItens={itensLista.sucos} titulo='Sucos' pedidos paginaRestaurante/> : ''}
            <PedidoFooter $none/>
            <Sacola $none/>
            <PedidoEfetuado $none/>
        </>
    )
}

export default Restaurante