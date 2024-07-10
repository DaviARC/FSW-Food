import styled from "styled-components"

const BotaoModificado = styled.button`
    width: 100%;
    padding: 16px;
    background-color: ${props => props.$cinza ? '#F4F4F5' : '#EA1D2C'};
    border: none;
    color: ${props => props.$cinza ? '#323232' : '#FFFFFF'};
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    display: ${props => props.$mobile ? "block" : "none"};
    cursor: pointer;

    @media screen and (min-width: 1024px) {
        display: ${props => props.$desktop ? "block" : "none"};     
    }
`

const Botao = ({ children, $mobile, $desktop, $cinza }) => {
    return(
        <BotaoModificado $cinza={$cinza} $desktop={$desktop} $mobile={$mobile}>{ children }</BotaoModificado>
    )
}

export default Botao