import styled from "styled-components"

const ContEntrega = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid #EEEEEE;
    margin-top: 16px;
    border-radius: 20px;
    padding: 10px;

    .entrega{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
    }
    .entrega span{
        color: #7E8392;
    }
    .entrega div{
        color: #323232;
        font-weight: 600;
    }`

const EntregaBloco = () => {
    return(
        <ContEntrega>
            <div className="entrega">
                <span>
                    Entrega <img src="/icones/entregador-cinza.png"/>
                </span>
                <div>Grátis</div>
            </div>
            <div className="entrega">
                <span>
                    Entrega <img src="/icones/timer-cinza.png"/>
                </span>
                <div>40 min</div>
            </div>
        </ContEntrega>
    )
}

export default EntregaBloco