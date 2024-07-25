import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import AppContext from "../../contexts/myContext"

const DivEstrela = styled.div`
    padding: 6px;
    background-color: ${props => props.$cinza ? "#323232" : "#FFFFFF" };
    border-radius: 16px;
    font-size: 14px;
    font-weight: 600;
    color:  ${props => props.$cinza ? "#FFFFFF" : "#323232" };
    display: flex;
    position: relative;
    align-items: center;

    .iconeEstrela{
        margin-right: 4px;
    }
    cursor: pointer;

    @media screen and (max-width: 1024px){
        padding: 8px 12px;
    }
`
const ContEstrelas = styled.div`
    top: 0;
    left: 0;
    padding: 6px 10px;
    background-color: ${props => props.$cinza ? "#4a4a4a" : "#FFFFFF" };
    position: absolute;
    border-radius: 20px;
    gap: 2px;
    display: ${props=> props.$none ? "none" : "flex"};
    
    @media screen and (min-width:1024px){
        padding: 8px 12px;
    }
`

const Estrela = ({ quantidade, $cinza, cdRestaurante, cdItem }) => {
    const { restaurantes, setRestaurantes, itens, setItens } = useContext(AppContext);
    const [displayEstrelas, setDisplayEstrelas] = useState(true);
    const [estrelas, setEstrelas] = useState([false, false, false, false, false])

    const onMouseOver = (iOver) => {
        setEstrelas(estrelas.map((estrela, i) => {
            if(iOver >= i){
                return true
            }
            return false
        }))
    }
    const onClick = async (iOver) => {
        try {
            if(cdRestaurante){
                const responseRestaurante = await axios({
                    url: 'http://localhost:3000/clientes/avaliarRestaurante',
                    method: 'POST',
                    headers: {Authorization: localStorage.getItem('token')},
                    data: {
                        cd_restaurante: cdRestaurante,
                        nt_restaurante: iOver + 1,
                    }
                })
                const data = responseRestaurante.data;
                setRestaurantes(restaurantes.map(restaurante => {
                    if(restaurante.cd_restaurante === cdRestaurante){
                        return {
                            ...restaurante,
                            ava_restaurante: data.media
                        }
                    }
                    return restaurante;
                }))
                
            } else if(cdItem){
                const responseItem = await axios({
                    url: 'http://localhost:3000/clientes/avaliarItem',
                    method: 'POST',
                    headers: {Authorization: localStorage.getItem('token')},
                    data: {
                        cd_item: cdItem,
                        nt_item: iOver + 1,
                    }
                })
                const data = responseItem.data;
                setItens(itens.map(item => {
                    if(item.cd_item === cdItem){
                        return {
                            ...item,
                            ava_item: data.media
                        }
                    }
                    return item;
                }))
            }
            setDisplayEstrelas(true);
        } catch (error) {
            if(error.code === "ERR_BAD_REQUEST"){
                localStorage.clear();
                alert('Sua sessão expirou. Por favor, faça login novamente.');
            }
        }
    }

    return(
        <>
            <DivEstrela $cinza={$cinza} onClick={() => setDisplayEstrelas(false)}><img className="iconeEstrela" src="/icones/estrela.png"/>{quantidade}</DivEstrela>
            <ContEstrelas $cinza={$cinza} $none={displayEstrelas}>
                {estrelas.map((estrela, i) => {
                    return <img style={{cursor: "pointer"}} onClick={() => onClick(i)} key={i} onMouseOver={() => onMouseOver(i)} src={`/icones/${estrela ? "estrela.png" : "estrela-vazia.png"}`}/>
                })}
            </ContEstrelas>
        </>
    )
}

export default Estrela