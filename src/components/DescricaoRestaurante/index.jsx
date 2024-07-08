import styled from "styled-components"
import Estrela from "../Estrela"
import FavoritoBotao from "../FavoritoBotao"
import SetaVoltar from "../SetaVoltar"
import EntregaBloco from "../EntregaBloco"

const SectionRestaurante = styled.main`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
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
    .categoria{
        width: 45%;
        background-color: #F4F4F5;
        border-radius: 8px;
        text-align: center;
        margin-top: 16px;
        color: #7E8392;
        padding: 8px;
        margin-bottom: 12px;
    }
    .descricaoRestaurante h2{
        margin: 12px 0;
        font-size: 16px;
        font-weight: 600;
        color: #323232;
    }
    .descricaoRestaurante p{
        color: #7E8392;
        line-height: 21px;
    }
    .contIcones{
        display: none;
    }

    @media screen and (max-width: 1024px) {
        display: block;
        width: 100%;
        left: 0;
        position: absolute;
        margin: 0;
        .img{
            width: 100%;
            left: 0;
            height: 250px;
            border-radius: 0;
        }
        .contTexto{
            width: 100%;
            position: absolute;
            background-color: white;
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
            margin-top: -20px;
            left: 0;
            padding: 20px;
            box-sizing: border-box;
        }
        .descricaoRestaurante{
            display: none;
        }
        .contIcones{
            display: flex;
            justify-content: space-between;
            width: 90%;
            top: 20px;
            position: absolute;
            z-index: 1;
            left: 50%;
            transform: translateX(-50%);
        }
        .categoria{
            margin: 12px 0 0 0;
        }
    }
`
const ContAbsolute = styled.div`
    @media screen and (max-width: 1024px) {
        height: 400px;
    }
`

const DescricaoRestaurante = ({ restaurante }) => {
    return (
        <>
            <SectionRestaurante>
                <div className="img"/>
                <div className="contIcones">
                    <SetaVoltar/>
                    <FavoritoBotao/>
                </div>
                <div className="contTexto">
                    <header>
                        <div className="contTitulo">
                            <h1>{restaurante.nome}</h1> 
                            <Estrela quantidade={restaurante.estrela} $cinza/>
                        </div>
                    </header>    
                    <EntregaBloco/>
                    <div className="categoria">{restaurante.categoria}</div>
                    <div className="descricaoRestaurante">
                        <h2>Sobre</h2>
                        <p>{restaurante.sobre}</p>
                    </div>
                </div>
            </SectionRestaurante>
            <ContAbsolute/>
        </>
    )
}

export default DescricaoRestaurante