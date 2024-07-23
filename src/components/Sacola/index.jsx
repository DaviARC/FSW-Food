import styled from "styled-components"
import Botao from "../Botao"
import ItemSacola from "./ItemSacola"
import Overlay from "../Overlay"
import HeaderBarraLateral from "../HeaderBarraLateral"
import { useContext, useState } from "react"
import AppContext from "../../contexts/myContext"
import axios from "axios"
import LoginModal from "../LoginModal"
import PedidoEfetuado from "../PedidoEfetuado"

const AsideModificado = styled.aside`
    position: fixed;
    background-color: white;
    width: 80%;
    top: 0;
    right: 0;
    z-index: 2;
    height: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    .contPrecos{
        border: 1px solid #EEEEEE;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 24px;
        border-radius: 15px;
    }
    .contTextoPreco, .contTextoPrecoTotal{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .contTextoPreco{
        border-bottom: 1px solid #EEEEEE;
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
    .sub{
        color: #7E8392;
    }
    .subPreco{
        color: #323232;
    }
    .entrega{
        color: #EA1D2C;
    }
    .total{
        font-weight: 600;
    }
    .totalPreco{
        font-weight: 600;
    }
    @media screen and (min-width:1024px){
        width: 400px;
    }
`

const Sacola = ({ $none, aoFechar }) => {
    const { sacola, setSacola,setUsuario } = useContext(AppContext);
    const [displayLogin, setDisplayLogin] = useState(true);
    const [displayPedidoEfetuado, setDisplayPedidoEfetuado] = useState(true);

    let precoTotalAux = 0;
    sacola.forEach(item => {
        precoTotalAux += Number(item.pre_item * item.quantidade);
    })

    const formatado = precoTotalAux.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });


    const mudaQuantidade = (item, aumenta) => {
        if(sacola.length > 0){
            setSacola(sacola.map(itemSacola => {
                if(itemSacola.cd_item === item.cd_item){
                    if(aumenta){
                        return {...itemSacola, quantidade: itemSacola.quantidade + 1}
                    } else{
                        if(itemSacola.quantidade > 1){
                            return {...itemSacola, quantidade: itemSacola.quantidade - 1}
                        }
                    } 
                }
                return itemSacola
            }))
        }
    }
    const apagaItemDaSacola = (item) => {
        setSacola(sacola.filter(itemSacola => item.cd_item !== itemSacola.cd_item))
    }

    const finalizarPedido = async () => {
        try{
            const responsePedido = await axios({
                url: 'http://localhost:3000/pedidos',
                method: 'POST',
                headers: {Authorization: localStorage.getItem('token')},
            })
            const pedido = responsePedido.data;
    
            sacola.forEach( async itemSacola => {
                console.log(pedido[0].cd_pedido)
                await axios({
                    url: 'http://localhost:3000/pedidos/itemPedidos',
                    method: 'POST',
                    data: {
                        cd_pedido: pedido[0].cd_pedido,
                        cd_item: itemSacola.cd_item,
                        qua_item_pedido: itemSacola.quantidade
                    }
                })
            }) 
            setSacola([])
            setDisplayPedidoEfetuado(false)
        }
        catch(e) {
            if(e.response.status === 400){
                setDisplayLogin(false)
            } else {
                console.log(e)
            }
        }
    }
    const onSucess = (nome, log, img) => {
        setDisplayLogin(true)
        localStorage.setItem('usuario', JSON.stringify({
            nm_usuario: nome,
            log_usuario: log,
            img_usuario: img
        }))
        setUsuario(JSON.parse(localStorage.getItem('usuario')))
    }  

    return(
        <Overlay $none={$none}>
            <AsideModificado>
                <div>
                    <HeaderBarraLateral fecharBarra={aoFechar}>Sacola</HeaderBarraLateral>
                    {sacola[0] ? sacola.map(item => <ItemSacola apagaItemDaSacola={apagaItemDaSacola} mudaQuantidade={mudaQuantidade} key={item.nm_item} item={item}/>) : ''}
                </div>
                <div>
                    <div className="contPrecos">
                        <div className="contTextoPreco">
                            <div className="sub">Subtotal</div>
                            <div className="subPreco">{formatado}</div>
                        </div>
                        <div className="contTextoPreco">
                            <div className="sub">Entrega</div>
                            <div className="entrega">GRÁTIS</div>
                        </div>
                        <div className="contTextoPreco">
                            <div className="sub">Descontos</div>
                            <div className="subPreco">R$ --,--</div>
                        </div>
                        <div className="contTextoPrecoTotal">
                            <div className="total">Total</div>
                            <div className="totalPreco">{formatado}</div>
                        </div>
                    </div>
                    <Botao aoClicar={finalizarPedido} $desktop $mobile>Finalizar Pedido</Botao>
                </div>
            </AsideModificado>
            <LoginModal display={displayLogin} onSuccess={onSucess}/>
            <PedidoEfetuado $none={displayPedidoEfetuado} aoFechar={() => {setDisplayPedidoEfetuado(true); aoFechar(); setSacola([]);}}/>
        </Overlay>
    )
}

export default Sacola