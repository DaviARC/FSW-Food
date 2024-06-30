import Header from './components/Header'
import BarraPesquisa from './components/BarraPesquisa'
import CardPesquisa from './components/CardPesquisa'
import Categorias from './components/Categorias'
import EstilosGlobais from './components/EstilosGlobais'

function App() {

  return (
    <>
      <EstilosGlobais/>
      <Header></Header>
      <CardPesquisa/>
      <BarraPesquisa $mobile/>
      <Categorias/>
    </>
  )
}

export default App
