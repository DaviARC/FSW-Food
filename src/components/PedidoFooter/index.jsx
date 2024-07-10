import styled from "styled-components"
import Botao from "../Botao"

const FooterEstilizado = styled.footer`
    background-color: white; 
    position: fixed;
    bottom: 0;
    z-index: 2;
    left: 0;
    width: 100%;
    display: ${props => props.$none ? "none" : "block"};
    
    .contTexto{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .contConteudoFooter{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
        align-items: center;
    }
    .totalTexto, .quantidadeItem{
        color: #7E8392;
        font-size: 14px;
    }
    .precoTotal{
        font-weight: 600;
        color: #323232;
    }
    .contBotao{
        width: 140px;
    }
    @media screen and (min-width:1024px){
    .contConteudoFooter{
        width: 90%;
        margin: auto;
        padding: 20px 0;
        justify-content: flex-start;
        gap: 70px;
    }
    .contBotao{
        width: 180px;
    }
    }
`

const PedidoFooter = ({ $none }) => {
    return(
        <FooterEstilizado $none={$none}>
            <div className="contConteudoFooter">
                <div className="contTexto">
                    <div className="totalTexto">Total sem entrega</div>
                    <div>
                        <span className="precoTotal">R$ 31,50</span>
                        <span className="quantidadeItem">/ 1 item</span>
                    </div>
                </div>
                <div className="contBotao">
                    <Botao $mobile $desktop>Ver Sacola</Botao>
                </div>
            </div>
        </FooterEstilizado>
    )
}

export default PedidoFooter