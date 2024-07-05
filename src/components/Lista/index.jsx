
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import styled from 'styled-components';
import ItemCategoria from './ItemCategoria';
import ItemPedido from './ItemPedido';
import ItemRestaurante from './ItemRestaurante';

const ContItens = styled.div`
    .nav-categorias-swipper{
        display: block;
    }
    .nav-categorias-swipper{
        margin: 24px 0;
    }
    .nav-categorias{
        display: none;
    }

    @media screen and (min-width: 1024px){
        .nav-categorias-swipper{
            display: none;
        }
        
        .nav-categorias{
            display: block;
        }
        .nav-categorias ul{
            display: flex;
            justify-content: space-between;
            margin: 16px 0;
            overflow: hidden;
        }
    }
`
const H3Modificado = styled.h3`
    font-size: 16px;
    font-weight: 600;
`
const SpanVerTodos = styled.span`
    font-size: 14px;
    color: #EA1D2C;
    display: flex;
    align-items: center;
    gap: 2.5px;
    position: relative;
    cursor: pointer;
     
    & > span {
        font-weight: 700;
        font-size: 18px;
    }
`

const Lista = ({ categorias, listaItens, titulo, pedidos, restaurantes }) => {
    let SwiperComponents = null
    let Itens = null
    let CampoTexto = null
    if(!categorias){
        CampoTexto = <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
            <H3Modificado>{titulo}</H3Modificado>
            <SpanVerTodos>Ver todos <span>{">"}</span></SpanVerTodos>
        </div>
    } 
    if(categorias){
        SwiperComponents = listaItens.map(categoria => {
            return(
                <SwiperSlide key={`slide${categoria.nome}`}>
                    <ItemCategoria
                        key={categoria.nome}
                        pathImagem={categoria.path} 
                    >
                        {categoria.nome}
                    </ItemCategoria> 
                </SwiperSlide>
                )
            }
         )
         Itens = listaItens.map(categoria => {
            return(
                <ItemCategoria 
                    key={categoria.nome}
                    pathImagem={categoria.path} 
                >
                    {categoria.nome}
                </ItemCategoria> 
                )
            }
        )
   } else if(pedidos){
    SwiperComponents = 
    <>
        <SwiperSlide key={`slide`}>
            <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
        </SwiperSlide>
         <SwiperSlide key={`slide`}>
         <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
        </SwiperSlide>
        <SwiperSlide key={`slide`}>
            <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
        </SwiperSlide>
        <SwiperSlide key={`slide`}>
            <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
        </SwiperSlide>
    </>
    Itens = <ItemPedido item={{nome: 'hamburguer',preco: 12.5, restaurante:'Camilas'}}/>
   } else if(restaurantes){
    SwiperComponents = <ItemRestaurante restaurante={{nome: "Sushidojo"}}/>
    Itens = <ItemRestaurante restaurante={{nome: "Sushidojo"}}/>
   }

    return (
        <>
            {CampoTexto}
            <ContItens>
                <nav className='nav-categorias-swipper'>
                    <Swiper
                        spaceBetween={1}
                        slidesPerView={3}
                    >
                        <ul>
                            {SwiperComponents}
                        </ul>  
                    </Swiper>   
                </nav>
                <nav className='nav-categorias'>
                    <ul>
                        {Itens}
                    </ul>
                </nav>
            </ContItens>
        </>
    )
}

export default Lista;