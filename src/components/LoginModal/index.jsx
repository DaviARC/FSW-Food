import styled from "styled-components"
import Overlay from "../Overlay"

const ContLogin = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    z-index: 2;
    padding: 20px;
    box-sizing: border-box;
    width: 80%;
    border-radius: 10px;
    .titulo{
        font-weight: 600;
    }
    .sub{
        color: #7E8392;
        font-size: 14px;
        margin:  10px 0 20px 0;
    }
    .botaoLogin{
        border: 1px solid #EA1D2C;
        background-color: transparent;
        padding: 12px 0;
        width: 45%;
        border-radius: 10px;
        color: #EA1D2C;
        font-weight: 600;
    }
    .botaoLogin img{
        margin-right: 6px;
    }
    @media screen and (min-width: 1024px){
        width: 300px;
    }
`

const LoginModal = ({ $none }) => {
    return(
        <Overlay index={'4'} $none={$none}>
            <ContLogin>
                <div className="titulo">Faça login na plataforma!</div>
                <div className="sub">Conecte-se usando sua conta do Google ou Github.</div>
                <button className="botaoLogin"><img src="/icones/google.png"/>Google</button>
            </ContLogin>
        </Overlay>
    )
}

export default LoginModal