import { useParams } from "react-router-dom";
import DescricaoProduto from "../../components/DescricaoProduto"
import Header from "../../components/Header"
import Lista from "../../components/Lista"
import Botao from "../../components/Botao";
import { useContext, useState } from "react";
import AppContext from "../../contexts/myContext";
import Sacola from "../../components/Sacola";
import SacolaFooter from "../../components/PedidoFooter";


const Produto = () => {
    const parametros = useParams();
    const { itens, sacola, setSacola } = useContext(AppContext)
    const [displaySacola, setDisplaySacola] = useState(true)
    const [quantidade, setQuantidade] = useState(1);
    
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

    const aoAdicionar = (item) => {
        const itemExiste = sacola.some(itemSacola => item.cd_item === itemSacola.cd_item);

        if(itemExiste){
            setSacola(sacola.map(itemSacola =>{
                if(itemSacola.cd_item === item.cd_item){
                    return{
                        ...itemSacola,
                        quantidade: item.quantidade + itemSacola.quantidade
                    };
                } 
                return itemSacola
            }))
        } else {
            setSacola([...sacola, item])
        }

        setQuantidade(1)
    }

    const mudaQuantidade = (aumenta) => {
        aumenta ? setQuantidade(quantidade + 1) : quantidade <= 1 ? setQuantidade(1) : setQuantidade(quantidade - 1);
    }

    return(
        <>
            <Header barraDePesquisa $desktop/>
            {itens[0] ? <DescricaoProduto mudaQuantidade={mudaQuantidade} quantidade={quantidade} aoAdicionar={aoAdicionar} item={itensLista.selecionado[0]}/> : ''}
            {itensLista.sucos[0] ? <Lista listaItens={itensLista.sucos} titulo='Sucos' pedidos paginaRestaurante/> : <Lista listaItens={itensLista.refrigerantes} titulo='Refrigerantes' pedidos paginaRestaurante/>}
            <Botao aoAdicionar={aoAdicionar} item={{...itensLista.selecionado[0], quantidade}} $mobile>Adicionar à Sacola</Botao>
            {sacola[0] ? <SacolaFooter aoClicar={(() => {setDisplaySacola(false)})}/> : ''}
            <Sacola $none={displaySacola} aoFechar={() => {setDisplaySacola(true)}}/>
        </>
    )
}

export default Produto