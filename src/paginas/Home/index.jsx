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

const Home = () => {  

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

  return (
    <>
      <Header/>
      <CardPesquisa/>
      <BarraPesquisa $mobile/>
      <Lista categorias listaItens={categorias}/>
      <CardDesconto $mobile path="/pizza-card.png" text={textoCardPizza}/>
      <Lista pedidos listaItens={categorias} titulo='Pedidos Recomendados'/>
      <CardDesconto $mobile path="/burguer-card.png" text={textoCardBurguer} $amarelo/>
      <div style={{ display: "flex", justifyContent:"space-between"}}>
        <CardDesconto $desktop path="/pizza-card.png" text={textoCardPizza}/>
        <CardDesconto $desktop path="/burguer-card.png" text={textoCardBurguer} $amarelo/>
      </div>
      <Lista restaurantes listaItens={categorias} titulo='Restaurantes Recomendados'/>
    </>
  )
}

export default Home