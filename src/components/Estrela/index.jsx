import styled from "styled-components"

const DivEstrela = styled.div`

    padding: 6px;
    background-color: ${props => props.$cinza ? "#323232" : "#FFFFFF" };
    border-radius: 16px;
    font-size: 14px;
    font-weight: 600;
    color:  ${props => props.$cinza ? "#FFFFFF" : "#323232" };

    .iconeEstrela{
        margin-right: 4px;
    }

    @media screen and (max-width: 1024px){
        padding: 8px 12px;
    }
`

const Estrela = ({ quantidade, $cinza }) => {
    return(
        <DivEstrela $cinza={$cinza}><img className="iconeEstrela" src="/icones/estrela.png"/>{quantidade}</DivEstrela>
    )
}

export default Estrela