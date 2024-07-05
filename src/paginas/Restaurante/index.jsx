import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import DescricaoRestaurante from "../../components/DescricaoRestaurante";
import Lista from "../../components/Lista";

const Restaurante = () => {
    const parametros = useParams();

    let restaurantes = [
        {
            nome: "Sushidojo",
            sobre: "O SushiDojo é uma joia gastronômica que transporta seus clientes para o coração do Japão, com sua atmosfera serena, design minimalista e um balcão de sushi onde mestres habilidosos preparam pratos autênticos com ingredientes frescos e selecionados, garantindo uma experiência culinária excepcional e memorável.",
            estrela: '5.0',
            categoria: 'Japonesa'
        }
    ]

    const restaurante = restaurantes.find(restaurante => restaurante.nome = parametros.nome)

    return(
        <>
            <Header barraDePesquisa $desktop/>
            <DescricaoRestaurante restaurante={restaurante}/>
            <Lista titulo='Mais pedidos' pedidos paginaRestaurante/>
            <Lista titulo='Comida japonesa' $mobile pedidos paginaRestaurante/>
            <Lista titulo='Sucos' pedidos paginaRestaurante/>
        </>
    )
}

export default Restaurante