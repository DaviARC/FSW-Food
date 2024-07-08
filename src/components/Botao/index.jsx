import styled from "styled-components"

const BotaoModificado = styled.button`
    width: 100%;
    padding: 16px;
    background-color: #EA1D2C;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    margin-bottom: 20px;
    display: ${props => props.$mobile ? "block" : "none"};

    @media screen and (min-width: 1024px) {
        display: ${props => props.$mobile ? "none" : "block"};     
    }
`

const Botao = ({ children, $mobile }) => {
    return(
        <BotaoModificado $mobile={$mobile}>{ children }</BotaoModificado>
    )
}

export default Botao