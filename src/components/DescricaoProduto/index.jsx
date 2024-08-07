import styled from "styled-components"
import EntregaBloco from "../EntregaBloco"
import SetaVoltar from "../SetaVoltar"
import Botao from "../Botao"
import Estrela from "../Estrela"

const ContDescricao = styled.main`
    position: absolute;
    width: 100%;
    left: 0;
    .img{
        width: 100%;
        height: 320px;
        background-color: black;
        left: 0;
    }
    .contIcone{
        top: 20px;
        left: 20px; 
        position: absolute;
        z-index: 1;
    }
    .contTexto{
        position: absolute;
        margin-top: -20px;
        background-color: white;
        padding: 20px;
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        box-sizing: border-box;
        color: #323232;
    }
    .nomeRestaurante{
        font-size: 12px;
        color: #7E8392;
    }
    & h1{
        font-weight: 600;
        font-size: 22px;
        margin: 6px 0 8px 0;
    }
    .contPreco{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .preco{
        font-size: 20px;
        font-weight: 600;
    }
    .contQuantidade{
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .botaoQuantidade{
        width: 32px;
        height: 32px;
        border-radius: 10px;
        border: 1px solid #EEEEEE;
        background-color: transparent;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }
    .botaoQuantidade:hover{
        transition: 0.4s;
        background-color: red;
    }
    .botaoQuantidade img{
       width: 12px;
    }
    & h2{
        font-weight: 600;
        margin: 24px 0 12px 0;
        font-size: 17px;
    }
    & p{
        color: #7E8392;
    }
    @media screen and (min-width: 1024px) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        .img{
            width: 50%;
            height: 500px;
            border-radius: 10px;
            background-color: black;
            left: 0;
        }
        .contIcone{
            display: none;
        }
        .contTexto{
            background-color: transparent;
            position: relative;
            margin: 0;
            padding: 0; 
            border-radius: 0;
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid #EEEEEE;
            padding: 40px;
            border-radius: 10px;
        }
        & p{
            line-height: 21px;
        }
    }
`
const ContAbsolute = styled.div`
    @media screen and (max-width: 1024px) {
        height: 630px;
    }
`

const DescricaoProduto = ({ item = {}, aoAdicionar, quantidade, mudaQuantidade }) => {
    const preco = Number(item.pre_item);
    const precoFormatado = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
 
    return(
        <>
            <ContDescricao>
                <img src={item.img_item} className="img"/>
                <div className="contIcone">
                    <SetaVoltar/>
                </div>
                <div className="contTexto">
                    <div>
                        <div className="nomeRestaurante">{item.nm_restaurante}</div>
                        <h1>{item.nm_item}</h1>
                        <div className="contPreco">
                            <div className="preco">{precoFormatado}</div>
                            <div className="contQuantidade">
                                <button className="botaoQuantidade" onClick={() => {mudaQuantidade()}}><img src="/icones/seta-esquerda-preta.png"/></button>
                                    <div className="quantidade">{quantidade}</div>
                                <button className="botaoQuantidade" onClick={() => {mudaQuantidade(true)}}><img src="/icones/seta-direita-preta.png"/></button>
                            </div>
                        </div>
                        <div style={{position: "relative", display: "inline-block", marginTop: "6px"}}>
                            <Estrela cdItem={item.cd_item} quantidade={item.ava_item} $cinza/>
                        </div>
                        <EntregaBloco/>
                        <h2>Sobre</h2>
                        <p>{item.des_item}</p>
                    </div>
                    <Botao aoAdicionar={aoAdicionar} item={{...item, quantidade}} $desktop>Adicionar</Botao>
                </div>
            </ContDescricao>
            <ContAbsolute/>
        </>
    )
}

export default DescricaoProduto