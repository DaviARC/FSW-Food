import { Link } from "react-router-dom";
import styled from "styled-components"
import Estrela from "../../Estrela";
import FavoritoBotao from "../../FavoritoBotao";
import ModalDeletarFavorito from "../../ModalDeletarFavorito";
import { useState } from "react";

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

const ItemRestaurante = ({ restaurante, favorito, $width, aoClicar }) => {
    const [restauranteSelecionado, setRestauranteSelecioando] = useState(null);

    return(
        <ContItemRestaurante $width={$width}>
                <Link style={{width: "auto"}} to={`/restaurante/${restaurante.nm_restaurante}`}>
                    <img className="img" src={restaurante.img_restaurante}/>
                </Link>
                        <div className="icones">
                            <Estrela quantidade={'5.0'}/>
                            <FavoritoBotao favorito={favorito} aoClicar={aoClicar} restaurante={restaurante.nome}/>
                        </div>
                <div className="nomeRestaurante">{restaurante.nm_restaurante}</div>
                <div className="contEntrega">
                    <div className="contEntregaConteudo">
                        <img
                            src="/icones/entregador.png"
                        />
                        <span className="textoEntrega">Entrega Grátis</span>
                    </div>
                    <div className="contEntregaConteudo">
                        <img
                            src="/icones/timer.png"
                        />
                        <span className="textoEntrega">45 min</span>
                    </div>
                </div>
                <ModalDeletarFavorito restaurante={restauranteSelecionado} aoFechar={() => setRestauranteSelecioando(null)}/>
        </ContItemRestaurante>
    )
}

export default ItemRestaurante