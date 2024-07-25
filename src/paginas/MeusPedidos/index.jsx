import styled from "styled-components"
import Header from "../../components/Header"
import Pedido from "../../components/Pedido"
import Titulo from "../../components/Titulo"
import axios from "axios"
import { useEffect, useState } from "react"

const MainPedidos = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const MeusPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(()=>{
        const fazRequisicaoPedidos = async () => {
            const pedidosResponde = await axios({
                url: 'http://localhost:3000/pedidos',
                method: 'GET',
                headers: {Authorization: localStorage.getItem('token')}
            })
            setPedidos(pedidosResponde.data);
        }
        fazRequisicaoPedidos();
    }, [])

    let idPedidos = [];
    pedidos.forEach((pedido, i) => {
        let idPedido = Object.values(pedido)[3]
        i === 0 ? idPedidos.push(idPedido) : '';

        !idPedidos.includes(idPedido) ? idPedidos.push(idPedido) : ''
    })
    
    let pedidosPorIdPedido = [];
    idPedidos.forEach(id => {
        pedidosPorIdPedido.push(pedidos.filter(pedido => pedido.cd_pedido === id));
    })

    return(
        <>
            <Header barraDePesquisa $barraDesktop linha />
            <Titulo>Meus Pedidos</Titulo>
            <MainPedidos>
                {pedidosPorIdPedido.map(arrPedidos => {
                    return <Pedido key={arrPedidos[0].cd_pedido} pedidos={arrPedidos}/>
                })}
            </MainPedidos>
        </>
    )
}

export default MeusPedidos