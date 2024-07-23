import styled from "styled-components"
import Botao from "../Botao"
import ItemSacola from "./ItemSacola"
import Overlay from "../Overlay"
import HeaderBarraLateral from "../HeaderBarraLateral"
import { useContext } from "react"
import AppContext from "../../contexts/myContext"

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
    const { sacola, setSacola } = useContext(AppContext)
    
    let precoTotalAux = 0;
    sacola[0] ? sacola.forEach(item => {
        precoTotalAux += Number(item.pre_item);
    }) : '';

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

    return(
        <Overlay $none={$none}>
            <AsideModificado>
                <div>
                    <HeaderBarraLateral fecharBarra={aoFechar}>Sacola</HeaderBarraLateral>
                    {sacola[0] ? sacola.map(item => <ItemSacola mudaQuantidade={mudaQuantidade} key={item.nm_item} item={item}/>) : ''}
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
                    <Botao $desktop $mobile>Finalizar Pedido</Botao>
                </div>
            </AsideModificado>
        </Overlay>
    )
}

export default Sacola