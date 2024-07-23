import styled from "styled-components"
import Overlay from "../Overlay"
import Botao from "../Botao"

const ContPedidoEfetuado = styled.div`
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    text-align: center;
    width: 60%;
    display: ${props => props.$none ? "none" : "flex"};
    .img{
        background-color: #EA1D2C;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 26px;
    }
    .titulo{
        font-weight: 600;
    }
    .texto{
        font-size: 14px;
        color: #7E8392;
        margin: 12px 0 20px 0;
    }
    @media screen and (min-width:1024px){
        width: auto;
    }
`

const PedidoEfetuado = ({ $none, aoFechar }) => {
    return(
        <Overlay $none={$none}>
            <ContPedidoEfetuado>
                <div className="img">
                    <img src="/icones/v.png"/>
                </div>
                <div className="titulo">Pedido Efetuado!</div>
                <div className="texto">Seu pedido foi realizado com sucesso.</div>
                <Botao aoClicar={aoFechar} $desktop $mobile $cinza>Confirmar</Botao>
            </ContPedidoEfetuado>
        </Overlay>
    )
}

export default PedidoEfetuado