import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import DescricaoRestaurante from "../../components/DescricaoRestaurante";

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
            <Header barraDePesquisa/>
            <DescricaoRestaurante restaurante={restaurante}/>
        </>
    )
}

export default Restaurante