import styled from "styled-components"

const ButtonFavorito = styled.button`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.$favorito ? "#FFFFFF" : "#3C3C3C"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;    
`

const FavoritoBotao = ({ favorito, aoClicar, restaurante }) => {
    return(
        <ButtonFavorito onClick={() => {aoClicar(restaurante)}} $favorito={favorito}><img src={favorito ? "/icones/heart-selecionado.png" : "/icones/heart.png"}/></ButtonFavorito>
    )
}

export default FavoritoBotao