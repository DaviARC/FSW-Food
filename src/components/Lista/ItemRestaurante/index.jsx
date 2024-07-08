import { Link } from "react-router-dom";
import styled from "styled-components"
import Estrela from "../../Estrela";
import FavoritoBotao from "../../FavoritoBotao";

const ContItemRestaurante = styled.div`
    position: relative;
    width: ${props=> props.$width ? "100%" : "260px"};
    .img{
        width: 100%;
        height: 140px;
        background-color: black;
        border-radius: 10px;
    }
    .icones{
        position: absolute;
        display: flex;
        width: 90%;
        margin: auto;
        justify-content: space-between;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
    }
    .nomeRestaurante{
        color: #323232;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        margin-top: 12px;
        text-decoration: none;
    }
    .contEntrega{
        display: flex;
        gap: 12px;
    }
    .contEntregaConteudo{
        gap: 6px;
    }
    .textoEntrega{
        color: #7E8392;
        font-size: 12px;
        width: 75px;
        margin-left: 6px;
    }

    @media screen and (min-width: 1024px){
        width: 30%;
        .img{
            height: 150px;
        }
        .nomeRestaurante{
            font-size: 16px;
        }
        .textoEntrega{
            font-size: 14px;
        }
    }
`

const ItemRestaurante = ({ restaurante, favorito, $width }) => {
    class Restaurante {
        constructor({ nome, entrega = 'Entrega Grátis', prazo = '45 min' }) {
            this.nome = nome;
            this.entrega = entrega;
            this.prazo = prazo;
        }
    }

    const restauranteValidado = new Restaurante(restaurante)

    return(
        <ContItemRestaurante $width={$width}>
                <Link style={{width: "auto"}} to={`/restaurante/${restaurante.nome}`}>
                    <div className="img"></div>
                </Link>
                        <div className="icones">
                            <Estrela quantidade={'5.0'}/>
                            <FavoritoBotao favorito={favorito}/>
                        </div>
                <div className="nomeRestaurante">{restauranteValidado.nome}</div>
                <div className="contEntrega">
                    <div className="contEntregaConteudo">
                        <img
                            src="/icones/entregador.png"
                        />
                        <span className="textoEntrega">{restauranteValidado.entrega}</span>
                    </div>
                    <div className="contEntregaConteudo">
                        <img
                            src="/icones/timer.png"
                        />
                        <span className="textoEntrega">{restauranteValidado.prazo}</span>
                    </div>
                </div>
            
        </ContItemRestaurante>
    )
}

export default ItemRestaurante