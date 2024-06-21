import './index.css'
import Header from './components/Header'
import BarraPesquisa from './components/BarraPesquisa'
import CardPesquisa from './components/CardPesquisa'
import Categorias from './components/Categorias'

function App() {

  return (
    <>
      <Header></Header>
      <CardPesquisa/>
      <BarraPesquisa/>
      <Categorias/>
    </>
  )
}

export default App
