import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const ItemLista = styled.li`
    width: 100%;
    border-radius: 82px;
    background-color: ${props => props.$destacado ? '#EA1D2C' : ''};
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    box-sizing: border-box;
    margin-bottom: 4px;
    .link{
        text-decoration: none;
        color: ${props => props.$destacado ? "#FFFFFF" : "#323232"};
        font-size: 14px
    }
`

const MenuLink = ({children, to, img}) => {
    const localizacao = useLocation()

    return(
        <ItemLista $destacado={localizacao.pathname === to}>
            <img src={img}/>
            <Link to={to} className={`link`}>{children}</Link>
        </ItemLista>
    )
}

export default MenuLink