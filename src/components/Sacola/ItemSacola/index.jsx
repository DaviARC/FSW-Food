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

const ItemSacola = () => {
    return(
        <ContItemSacola>
            <div className="contImgTexto">
                <div className="img"/>
                <div className="contTexto">
                    <div className="nome">Ramen Clássico</div>
                    <div className="preco">R$ 31,50</div>
                    <div className="contQuantidade">
                        <button className="botaoQuantidade"><img src="/icones/seta-esquerda-preta.png"/></button>
                        <div className="quantidade">1</div>
                        <button className="botaoQuantidade"><img src="/icones/seta-direita-preta.png"/></button>
                    </div>
                </div>
            </div>
            <button><img src="/icones/trash.png"/></button>
        </ContItemSacola>
    )
}

export default ItemSacola