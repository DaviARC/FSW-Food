import styled from "styled-components"
import Overlay from "../Overlay"
import HeaderBarraLateral from "../HeaderBarraLateral"
import MenuLink from "../MenuLink"
import LoginModal from "../LoginModal"
import { useContext, useState } from "react"
import ModalDeletarFavorito from "../ModalDeletarFavorito"
import AppContext from "../../contexts/myContext"

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
        cursor: pointer;
    }
    .contPaginas{
        margin-top: 10px;
        border-bottom: 1px solid #EEEEEE;
        padding-bottom: 10px;
    }
    .categorias{
        margin-top: 20px;
    }
    .logado{
        display: flex;
        gap: 12px;
        align-items: center;
    }
    .contTextoLogado{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .imgLogado{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .nomeLogado{
        font-weight: 600;
    }
    .emailLogado{
        color: #7E8392;
        font-size: 12px;
    }
    @media screen and (min-width: 1024px){
        width: 360px;
        .contPaginas {
            margin-top: 20px;
            padding-bottom: 20px;
        }
    }
`
    const Logout = styled.div`
        border: none;
        border-top: 1px solid #EEEEEE;
        padding-top: 20px;
        
        .botaoLogout{
            padding-left: 16px;
            display: flex;
            align-items: center;
            border: none;
            gap: 4px;
            background-color: transparent;
            cursor: pointer;
        }
    `

const BarraLateral = ({ $none, fecharBarra }) => {
    const [display, setDisplay] = useState(true);
    const { usuario, setUsuario } = useContext(AppContext);
    const [displayLogout, setDisplayLogout] = useState(null);
    
    const onSucess = (nome, log, img) => {
        setDisplay(true)
        localStorage.setItem('usuario', JSON.stringify({
            nm_usuario: nome,
            log_usuario: log,
            img_usuario: img
        }))
        setUsuario(JSON.parse(localStorage.getItem('usuario')))
    }    
    const logout = () => {
        localStorage.clear();
        setUsuario(null);
        setDisplayLogout(null);
    }

    return(
        <>
            <Overlay $none={$none}>
                <AsideModificado>
                    <div className="header">
                        <HeaderBarraLateral fecharBarra={fecharBarra}>Menu</HeaderBarraLateral>
                        {usuario ? 
                         <div className="logado">
                            <img className="imgLogado" src={usuario.img_usuario}/>
                            <div className="contTextoLogado">
                                <div className="nomeLogado">{usuario.nm_usuario}</div>
                                <div className="emailLogado">{usuario.log_usuario}</div>
                            </div>   
                         </div>
                         : 
                        <div className="login">
                            <div className="tituloLogin">Olá. Faça seu login!</div>
                            <button className="botao" onClick={()=>{setDisplay(false)}}><img src="/icones/login.png"/></button>
                        </div>
                        }
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
                    {usuario ? 
                        <Logout>
                            <button onClick={() => {setDisplayLogout(true)}} className="botaoLogout">
                                <img className="imgLogout" src="/icones/logout.png"/>Sair da conta
                            </button>
                        </Logout>
                        : ''}
                </AsideModificado>
            </Overlay>
            <LoginModal display={display} onSuccess={onSucess}/>
            <ModalDeletarFavorito item={displayLogout} aoCancelar={() => {setDisplayLogout(false)}} aoFechar={logout} titulo='Sair da conta' sobre='Deseja mesmo sair da plataforma?' confirmar='sair'/>
        </>
    )
}

export default BarraLateral