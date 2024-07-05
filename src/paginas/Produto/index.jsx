import DescricaoRestaurante from "../../components/DescricaoRestaurante"
import Header from "../../components/Header"
import Lista from "../../components/Lista"

let produto = {

}

const Produto = () => {
    return(
        <>
            <Header barraDePesquisa $desktop/>
            <DescricaoRestaurante restaurante={produto}/>
            <Lista titulo='Sucos' pedidos paginaRestaurante/>
        </>
    )
}

export default Produto