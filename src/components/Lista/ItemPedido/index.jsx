import { Link } from "react-router-dom"
import styled from "styled-components"

const CardCont = styled.div`
    line-height: 22px;
    overflow: hidden;
    & .img {
        width: 180px;
        height: 180px;
        border-radius: 10px;
        background-color: black;
        margin-bottom: 8px;
    }
    & .precoItem{
        font-weight: 600;
    }
    & .itemPedido{
        font-size: 14px;
        color: #7E8392;
        display: ${props => props.paginaRestaurante ? "none" : "block"};
    }
`

const ItemPedido = ({ item, paginaRestaurante }) => {
    return (
        <li>
            <CardCont paginaRestaurante={paginaRestaurante}>
            <Link to={`/restaurante/${item.restaurante}/${item.nome}`}>
                <div className="img"></div>
            </Link>
                <div className="cont-texto">
                    <div className="nomeItem">{item.nome}</div>
                    <div className="precoItem">{item.preco}</div>
                    <div className="itemPedido">{item.restaurante}</div>
                </div>
            </CardCont>
            
        </li>
    )
}

export default ItemPedido