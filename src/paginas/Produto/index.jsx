import { useParams } from "react-router-dom";
import DescricaoProduto from "../../components/DescricaoProduto"
import Header from "../../components/Header"
import Lista from "../../components/Lista"
import Botao from "../../components/Botao";


const Produto = () => {
    const parametros = useParams();
    
    let produto = {
        nome: parametros.nome,
        restaurante: parametros.restaurante,
        preco: 31.5,
        sobre: 'O Ramen Clássico apresenta uma harmoniosa combinação de macarrão, caldo saboroso e fatias de carne de porco, criando um prato reconfortante e cheio de sabor, perfeito para satisfazer os paladares apaixonados pela culinária japonesa.'
    }

    return(
        <>
            <Header barraDePesquisa $desktop/>
            <DescricaoProduto produto={produto}/>
            <Lista titulo='Sucos' pedidos paginaRestaurante/>
            <Botao $mobile>Adicionar à Sacola</Botao>
        </>
    )
}

export default Produto