import styled from "styled-components"
import Overlay from "../Overlay"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

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
        cursor: pointer;
    }
    .botaoLogin img{
        margin-right: 6px;
    }
    @media screen and (min-width: 1024px){
        width: 300px;
    }
`

const LoginModal = ({ display, onSuccess, definirPerfil }) => {

    const login = async (credentialResponse) =>{
        const dados = jwtDecode(credentialResponse.credential);

        definirPerfil(dados.name, dados.email, dados.picture)

        const responseLogin = await axios({
            method: 'post',
            url:'http://localhost:3000/login',
            data: {
                nm_cliente: dados.name,
                log_cliente: dados.email,
                google_id: dados.sub
            }
        })

        const data = responseLogin.data;    
        responseLogin.status === 200 ? onSuccess() : ''

        localStorage.setItem('token', data.token);
    }

    return(
        <Overlay index={'4'} $none={display}>
            <ContLogin>
                <div className="titulo">Faça login na plataforma!</div>
                <div className="sub">Conecte-se usando sua conta do Google ou Github.</div>
                <GoogleOAuthProvider clientId='284389834504-ud95no0tm8bcrc9meg5tqh9benq522dj.apps.googleusercontent.com'>
                    <GoogleLogin 
                        onSuccess={credentialResponse => {
                            login(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </ContLogin>
        </Overlay>
    )
}

export default LoginModal