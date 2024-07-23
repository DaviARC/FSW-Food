import { Link } from "react-router-dom"
import styled from "styled-components"

const CardCont = styled.div`
    line-height: 22px;
    overflow: hidden;
    & .img {
        width: 160px;
        height: 160px;
        border-radius: 10px;
        background-color: black;
        margin-bottom: 8px;
    }
    & .precoItem{
        font-weight: 600;
    }
    .nomeItem{
        width: 160px;
    }
    & .itemPedido{
        font-size: 14px;
        color: #7E8392;
        display: ${props => props.paginaRestaurante ? "none" : "block"};
    }
`

const ItemPedido = ({ item, paginaRestaurante }) => {

    return (
        <li style={{listStyle: "none"}}>
            <CardCont paginaRestaurante={paginaRestaurante}>
            <Link to={`/restaurante/${item.nm_restaurante}/${item.nm_item}`}>
                <img className="img" src={item.img_item}/>
            </Link>
                <div className="cont-texto">
                    <div className="nomeItem">{item.nm_item}</div>
                    <div className="precoItem">R$ {item.pre_item}</div>
                    <div className="itemPedido">{item.res_item}</div>
                </div>
            </CardCont>
            
        </li>
    )
}

export default ItemPedido