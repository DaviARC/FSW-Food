import styled from "styled-components"
import Overlay from "../Overlay"
import HeaderBarraLateral from "../HeaderBarraLateral"
import MenuLink from "../MenuLink"
import LoginModal from "../LoginModal"

const AsideModificado = styled.aside`
    position: absolute;
    background-color: #FFFFFF;
    z-index: 1;
    right: 0;
    width: 85%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    .header{
        padding-bottom: 20px;
        border-bottom: 1px solid #EEEEEE;
    }
    .login{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tituloLogin{
        font-weight: 600;
    }
    .botao{
        background-color: #EA1D2C;
        border: none;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    .contPaginas{
        margin-top: 20px;
        border-bottom: 1px solid #EEEEEE;
        padding-bottom: 20px;
    }
    .categorias{
        margin-top: 20px;
    }
    @media screen and (min-width: 1024px){
        width: 360px;
    }
`

const BarraLateral = ({ $none, fecharBarra }) => {
    return(
        <>
            <Overlay $none={$none}>
                <AsideModificado>
                    <div className="header">
                        <HeaderBarraLateral fecharBarra={fecharBarra}>Menu</HeaderBarraLateral>
                        <div className="login">
                            <div className="tituloLogin">Olá. Faça seu login!</div>
                            <button className="botao"><img src="/icones/login.png"/></button>
                        </div>
                    </div>
                    <ul className="contPaginas">
                        <MenuLink img={'/icones/home.png'} to='/'>Ínicio</MenuLink>
                        <MenuLink img={'/icones/lista.png'} to={'/meusPedidos'}>Meus Pedidos</MenuLink>
                        <MenuLink img={'/icones/heart-cinza.png'} to={'/restaurantesFavoritos'}>Restaurantes Favoritos</MenuLink>
                    </ul>
                    <ul className="categorias">
                        <MenuLink img={'/icones/pratos-barra.png'} to='/produto/Pratos'>Pratos</MenuLink>
                        <MenuLink img={'/icones/lanches-barra.png'} to='/produto/Lanches'>Lanches</MenuLink>
                        <MenuLink img={'/icones/pizza-barra.png'} to='/produto/Pizza'>Pizza</MenuLink>
                        <MenuLink img={'/icones/japonesa-barra.png'} to='/produto/Japonesa'>Japonesa</MenuLink>
                        <MenuLink img={'/icones/sobremesas-barra.png'} to='/produto/Sobremesas'>Sobremesas</MenuLink>
                        <MenuLink img={'/icones/sucos-barra.png'} to='/produto/Sucos'>Sucos</MenuLink>
                        <MenuLink img={'/icones/refrigerantes-barra.png'} to='/produto/Refrigerantes'>Refrigerantes</MenuLink>
                    </ul>
                </AsideModificado>
            </Overlay>
            <LoginModal $none/>
        </>
    )
}

export default BarraLateral