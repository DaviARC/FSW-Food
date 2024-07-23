import { Link } from "react-router-dom"
import styled from "styled-components"

const SectionPedido = styled.section`
    width: 100%;
    padding: 20px;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    box-sizing: border-box;

    .estadoPedido{
        background-color: ${props => props.$finalizado ? '#EEEEEE' : '#5DC05B'};
        color: ${props => props.$finalizado ? '#7E8392' : '#FFFFFF'};
        border-radius: 100px;
        padding: 4px 8px;
        font-weight: 600;
        font-size: 14px;
    }
    .contRestaurante{
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EEEEEE;
    }
    .ultimoRestaurante{
        border: none;
    }
    .contRestaurante img{
        width: 16px;
    }
    .nomeRestaurante{
        font-weight: 600;
        color: #323232;    
    }
    .itemPedido{
        padding: 12px 0;
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .contItemPedidos{
        border-bottom: 1px solid #EEEEEE;
        border-top: 1px solid #EEEEEE;
    }
    .quantidade{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        color: #FFFFFF;
        background-color: #7E8392;
        font-size: 14px;
    }
    .nomeItem{
        font-size: 14px;
        color: #7E8392;
    }
    .contPrecoTotal{
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
    }
    .precoTotalPedido{
        font-size: 14px;
    }
    .contPrecoTotal button{
        background-color: transparent;
        border: none;
        font-weight: 600;
        color: ${props => props.$finalizado ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 0, 0, 0.6)'};
    }

`

const Pedido = ({ $finalizado, pedidos }) => {
    let restaurantes = [];
    let precoTotalAux = 0;

    pedidos.forEach((pedido, i) => {
        precoTotalAux += Number(pedido.pre_item);

        let valor = Object.values(pedido)[1];
        i === 0 ? restaurantes.push(valor) : '';

        !restaurantes.includes(valor) ? restaurantes.push(valor) : '';
        console.log(valor, !restaurantes.includes(valor))
    })

    const formatado = precoTotalAux.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return(
        <SectionPedido $finalizado={$finalizado}>
            <span className="estadoPedido">Em transporte</span>
            {restaurantes.map((restaurante, i) => {
                if(i === restaurantes.length - 1){
                    return (
                        <div key={restaurante} className="contRestaurante ultimoRestaurante">
                            <div className="nomeRestaurante">{restaurante}</div>
                            <Link to={`/restaurante/${restaurante}`}><img src="/icones/seta-direita-preta.png"/></Link>
                        </div>
                    )   
                }
                return (
                    <div key={restaurante} className="contRestaurante">
                        <div className="nomeRestaurante">{restaurante}</div>
                        <Link to={`/restaurante/${restaurante}`}><img src="/icones/seta-direita-preta.png"/></Link>
                    </div>
                )
            })}
            <div className="contItemPedidos">
                {pedidos.map(pedido => {
                    return(
                        <div key={pedido.nm_item} className="itemPedido">
                            <span className="quantidade">{pedido.qua_item_pedido}</span>
                            <span className="nomeItem">{pedido.nm_item}</span>
                        </div>
                    )
                })}
            </div>
            <div className="contPrecoTotal">
                <span className="precoTotalPedido">{formatado}</span>
                <button>Adicionar à sacola</button>
            </div>
        </SectionPedido>
    )
}

export default Pedido