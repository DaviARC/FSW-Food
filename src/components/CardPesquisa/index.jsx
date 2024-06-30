import BarraPesquisa from '../BarraPesquisa'
import macarrao from '../../assets/banner-macarrao.png';
import styled from 'styled-components';

const Banner = styled.div`
    display: none;

@media screen and (min-width: 1024px){
    overflow: hidden;
    height: 500px;
    display: block;
    width: 100%;
    left: 0;

    .cont-banner{
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .cont-texto{
        display: inline-block;
        margin: 126px 0 167px 0;
    }
    .cont-texto h1{
        font-size: 48px;
        font-weight: 700;
        line-height: 48px;
        color: var(--branco);
    }
    .cont-texto p{
        font-size: 18px;
        line-height: 27px;
        color: var(--branco);
        margin: 12px 0 32px 0;
    }
    .macarrao{
        margin-top: 164px;
        width: 371.03px;
    }
    .fundo-barra{
        padding: 24px;
        background-color: #FFFFFF;
        border-radius: 10px;
    }
}
`
const FaixaVermelha = styled.div`
    @media screen and (min-width: 1024px){
        background-color: var(--vermelho);
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 500px;
        left: 0;
    }   
`

const CardPesquisa = () => {
    return(
        <>
        <FaixaVermelha/>
            <Banner>
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
            </Banner>
        </>
    )
}

export default CardPesquisa