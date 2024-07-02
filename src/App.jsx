import Header from './components/Header'
import BarraPesquisa from './components/BarraPesquisa'
import CardPesquisa from './components/CardPesquisa'
import EstilosGlobais from './components/EstilosGlobais'
import Lista from './components/Lista'

import lanche from './assets/lanches-categoria.svg'
import prato from './assets/pf.svg';
import japonesa from './assets/sushi caviar 1.svg';
import pizza from './assets/pizza 1.svg';
import sobremesa from './assets/ice cream 1.svg';
import suco from './assets/juice.svg';
import refrigerante from './assets/soda.svg';
import CardDesconto from './components/CardDesconto'


function App() {

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

  return (
    <>
      <EstilosGlobais/>
      <Header></Header>
      <CardPesquisa/>
      <BarraPesquisa $mobile/>
      <Lista categorias listaItens={categorias}/>
      <CardDesconto $mobile/>
      <Lista pedidos listaItens={categorias} titulo='Pedidos Recomendados'/>
      <CardDesconto/>
    </>
  )
}

export default App
