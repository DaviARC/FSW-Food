import styled from "styled-components"

const SectionRestaurante = styled.section`
    display: flex;
    justify-content: space-between;
    .img{
        width: 60%;
        height: 380px;
        background-color: black;
        border-radius: 10px;
    }
    .contTexto{
        width: 35%;
    }
    .contTitulo{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .contTitulo h1{
        font-size: 24px;
        font-weight: 600;
    }
    .estrela{
        background-color: #323232;
        padding: 8px;
        border-radius: 16px;
    }
    .estrela{
        font-size: 14px;
        font-weight: 600;
        color: #FFFFFF;
    }
    .contEntrega{
        display: flex;
        justify-content: space-around;
        border: 1px solid #EEEEEE;
        margin-top: 16px;
        border-radius: 20px;
        padding: 10px;
    }
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
    }
    .categoria{
        width: 45%;
        background-color: #F4F4F5;
        border-radius: 8px;
        text-align: center;
        margin-top: 16px;
        color: #7E8392;
        padding: 8px;
    }
`

const DescricaoRestaurante = ({ restaurante }) => {
    return (
        <SectionRestaurante>
            <div className="img"/>
            <div className="contTexto">
                <header>
                    <div className="contTitulo">
                        <h1>{restaurante.nome}</h1> 
                        <div className="estrela">{restaurante.estrela} <img src="/icones/estrela.png"/></div>
                    </div>
                </header>    
                <div className="contEntrega">
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
                </div>
                <div className="categoria">{restaurante.categoria}</div>
            </div>
        </SectionRestaurante>
    )
}

export default DescricaoRestaurante