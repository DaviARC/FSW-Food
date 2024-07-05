import styled from "styled-components"

const ButtonFavorito = styled.button`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #3C3C3C;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;    
`

const FavoritoBotao = () => {
    return(
        <ButtonFavorito><img src="/icones/heart.png"/></ButtonFavorito>
    )
}

export default FavoritoBotao