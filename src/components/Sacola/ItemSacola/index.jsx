import styled from "styled-components"

const ContItemSacola = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    align-items: center;

    .contImgTexto{
        display: flex;
        gap: 16px;
        align-items: center;
        font-size: 14px;
    }
    .img{
        width: 78px;
        height: 78px;
        background-color: black;
        border-radius: 10px;
    }
    .preco{
        font-weight: 600;
        margin: 4px 0;
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
    & button{
        background-color: transparent;
        border: 1px solid #EEEEEE;
        display: flex;
        justify-content: center ;
        align-items: center;
        padding: 8px;
        border-radius: 10px;
    }
`

const ItemSacola = ({ item, mudaQuantidade }) => {
    

    let preco = Number(item.pre_item);

    const precoFormatado = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return(
        <ContItemSacola>
            <div className="contImgTexto">
                <img className="img" src={item.img_item}/>
                <div className="contTexto">
                    <div className="nome">{item.nm_item}</div>
                    <div className="preco">{precoFormatado}</div>
                    <div className="contQuantidade">
                        <button className="botaoQuantidade" onClick={() => mudaQuantidade(item)}><img src="/icones/seta-esquerda-preta.png"/></button>
                        <div className="quantidade">{item.quantidade}</div>
                        <button className="botaoQuantidade" onClick={() => mudaQuantidade(item, true)}><img src="/icones/seta-direita-preta.png"/></button>
                    </div>
                </div>
            </div>
            <button><img src="/icones/trash.png"/></button>
        </ContItemSacola>
    )
}

export default ItemSacola