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
        border-bottom: 1px solid #EEEEEE;
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        border-bottom: 1px solid #EEEEEE;
        display: flex;
        gap: 8px;
        align-items: center;
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

const Pedido = ({ $finalizado, nomeRestaurante }) => {
    return(
        <SectionPedido $finalizado={$finalizado}>
            <span className="estadoPedido">Em transporte</span>
            <div className="contRestaurante">
                <div className="nomeRestaurante">{nomeRestaurante}</div>
                <Link to={`/restaurante/${nomeRestaurante}`}><img src="/icones/seta-direita-preta.png"/></Link>
            </div>
            <div className="itemPedido">
                <span className="quantidade">1</span>
                <span className="nomeItem">Ramen Clássico</span>
            </div>
            <div className="contPrecoTotal">
                <span className="precoTotalPedido">R$ 31,50</span>
                <button>Adicionar à sacola</button>
            </div>
        </SectionPedido>
    )
}

export default Pedido