import styled from "styled-components"
import Header from "../../components/Header"
import Pedido from "../../components/Pedido"
import Titulo from "../../components/Titulo"

const MainPedidos = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const MeusPedidos = () => {
    return(
        <>
            <Header barraDePesquisa $barraDesktop />
            <Titulo>Meus Pedidos</Titulo>
            <MainPedidos>
                <Pedido nomeRestaurante='Sushidojo'/>
                <Pedido nomeRestaurante='Sushidojo' $finalizado/>
            </MainPedidos>
        </>
    )
}

export default MeusPedidos