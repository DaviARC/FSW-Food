import { Link } from "react-router-dom"
import styled from "styled-components"

const ButtonSeta = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`

const SetaVoltar = () => {
    return( 
        <Link to={'/'}>
            <ButtonSeta><img src="/icones/seta.png"/></ButtonSeta>
        </Link>
    )
}

export default SetaVoltar