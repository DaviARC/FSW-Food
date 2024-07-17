import styled from "styled-components";

const ContTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .titulo{
        font-size: 18px;
        font-weight: 600;
    }
    .button{
        background-color: transparent;
        border: none;
        cursor: pointer ;
    }
`


const HeaderBarraLateral = ({ children, fecharBarra }) => {
    return(
        <ContTitulo>
            <h3 className="titulo">{children}</h3>
            <button onClick={fecharBarra} className="button"><img src="/icones/x.png"/></button>
        </ContTitulo>
    )
}

export default HeaderBarraLateral;