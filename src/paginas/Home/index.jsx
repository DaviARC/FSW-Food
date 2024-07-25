import Header from '../../components/Header';
import CardPesquisa from '../../components/CardPesquisa';
import Lista from '../../components/Lista';
import CardDesconto from '../../components/CardDesconto'
import BarraPesquisa from '../../components/BarraPesquisa';

import lanche from '../../assets/lanches-categoria.svg'
import prato from '../../assets/pf.svg';
import japonesa from '../../assets/sushi caviar 1.svg';
import pizza from '../../assets/pizza 1.svg';
import sobremesa from '../../assets/ice cream 1.svg';
import suco from '../../assets/juice.svg';
import refrigerante from '../../assets/soda.svg';
import BarraLateral from '../../components/BarraLateral';
import AppContext from '../../contexts/myContext';
import { useContext } from 'react';
import ModalDeletarFavorito from '../../components/ModalDeletarFavorito';


const Home = ({ aoConfirmar }) => {  
  const categorias = [
    {
        path: lanche,
        nome: "Lanches"
    },
    {
        path: prato,
        nome: "Pratos"
    },
    {
        path: japonesa,
        nome: "Japonesa"
    },
    {
        path: pizza,
        nome: "Pizza"
    },
    {
        path: sobremesa,
        nome: "Sobremesas"
    },
    {
        path: suco,
        nome: "Sucos"
    },
    {
        path: refrigerante,
        nome: "Refrigerantes"
    }
]
  const textoCardPizza = 
  <>
    <div>até</div>
    <div><span className="strong">30%</span> de</div>
    <div><span className="strong">Desconto</span></div>
    <div>em Pizzas</div>
  </>
  const textoCardBurguer = 
  <>
    <div>a partir de</div>
    <div className="strong">R$17,90</div>
    <div>em Lanches</div>
  </>
  const {itens, restaurantes, restauranteSelecionado, setRestauranteSelecionado} = useContext(AppContext)

  const listaRecomendados = itens.filter((item, i) => {
    const constFiltroPorCategoria = item.nm_categoria !== 'Sobremesas' && item.nm_categoria !== 'Sucos' && item.nm_categoria !== 'Refrigerantes'

    if(i <= 10){
      return constFiltroPorCategoria
    }
  })

  return (
    <>
      <Header/>
      <CardPesquisa/>
      <BarraPesquisa $mobile/>
      <Lista categorias listaItens={categorias}/>
      <CardDesconto $mobile path="/pizza-card.png" text={textoCardPizza}/>
      <Lista pedidos listaItens={listaRecomendados} titulo='Pedidos Recomendados'/>
      <CardDesconto $mobile path="/burguer-card.png" text={textoCardBurguer} $amarelo/>
      <div style={{ display: "flex", justifyContent:"space-between"}}>
        <CardDesconto $desktop path="/pizza-card.png" text={textoCardPizza}/>
        <CardDesconto $desktop path="/burguer-card.png" text={textoCardBurguer} $amarelo/>
      </div>
      <Lista restauranteTipo listaItens={restaurantes} titulo='Restaurantes Recomendados'/>
      <BarraLateral $none/>
      {restauranteSelecionado ? <ModalDeletarFavorito 
        item={restauranteSelecionado} 
        aoFechar={aoConfirmar} 
        aoCancelar={() => setRestauranteSelecionado(null)}
        sobre={restauranteSelecionado.favorito ? 'Tem certeza que deseja remover esse restaurante dos favoritos?' : 'Deseja adicionar esse restaurante aos favoritos?'}
        titulo={restauranteSelecionado.favorito ? 'Remover Restaurante' : 'Adicionar restaurante'}
        confirmar='Confirmar'
      /> : ''}
    </>
  )
}

export default Home