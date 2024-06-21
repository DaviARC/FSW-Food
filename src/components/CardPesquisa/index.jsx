import BarraPesquisa from '../BarraPesquisa'
import './CardPesquisa.css'
import macarrao from '../../assets/banner-macarrao.png';

const CardPesquisa = () => {
    return(
        <>
        <div className='faixa-vermelha'></div>
            <div className='fundo-banner'>
                <div className='cont-banner'>
                    <div className='cont-texto'>
                        <h1>Está com fome?</h1>
                        <p>Com apenas alguns cliques, encontre refeições acessíveis perto de você.</p>
                        <div className='fundo-barra'>
                            <BarraPesquisa amarelo/>
                        </div>
                    </div>
                    <div>
                        <img
                            className='macarrao'
                            src={macarrao}
                        />
                    </div>  
                </div>
            </div>
        </>
    )
}

export default CardPesquisa