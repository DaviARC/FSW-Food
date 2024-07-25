
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import styled from 'styled-components';
import ItemCategoria from './ItemCategoria';
import ItemPedido from './ItemPedido';
import ItemRestaurante from './ItemRestaurante';
import { Link } from 'react-router-dom';

const ContItens = styled.div`
    display: ${props => props.$desktop ? "none" : "block"};
    .nav-categorias-swipper{
        display: "block";
    }
    .nav-categorias-swipper{
        margin: 24px 0;
    }
    .nav-categorias{
        display: none;
    }
    margin-bottom: ${props=> props.$restaurante ? "20px" : "0"};

    @media screen and (min-width: 1024px){
        display: ${props => props.$mobile ? "none" : "block"};
        .nav-categorias-swipper{
            display: none;
        }
        .nav-categorias{
            display: block;
        }
        .nav-categorias ul{
            display: flex;
            justify-content: ${props => props.$categorias ? "space-between" : "left"};
            gap: 16px;
            margin: 16px 0;
            overflow: ${props => props.paginaRestaurante ? "visible" : "hidden"};
            flex-wrap: ${props => props.paginaRestaurante ? "wrap" : "nowrap"};
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
    display: ${props => props.paginaRestaurante ? "none" : "flex"};
    align-items: center;
    gap: 2.5px;
    position: relative;
    cursor: pointer;
     
    & > span {
        font-weight: 700;
        font-size: 18px;
    }
`

const Lista = ({ categorias, listaItens = [], titulo, pedidos, restauranteTipo, paginaRestaurante, $mobile, $desktop }) => {
    let SwiperComponents = null
    let Itens = null
    let CampoTexto = null
    let slidesPerView = 3;
    
    if(!categorias){
        CampoTexto = <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
            <H3Modificado>{titulo}</H3Modificado>
            <SpanVerTodos paginaRestaurante={paginaRestaurante} style={{listStyle: "none"}}><Link style={{textDecoration: "none", color: "#EA1D2C"}} to={`verTodos/${restauranteTipo ? 'Restaurantes' : 'Itens'}`}>Ver todos <span>{">"}</span></Link></SpanVerTodos>
        </div>
    }
    if(categorias){
        slidesPerView = 3;
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
         Itens = listaItens.map((categoria) => {
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
    slidesPerView = 2.1;
    SwiperComponents = 
    <>
        {listaItens.map(item => {
            return(
                <SwiperSlide key={`slide` + item.nm_item}>
                    <ItemPedido paginaRestaurante={paginaRestaurante} item={item}/>
                </SwiperSlide>
            )
        })}
    </>
    Itens = <>
        {listaItens.map(item =>{
            return(
                <ItemPedido key={item.nm_item} paginaRestaurante={paginaRestaurante} item={item}/>
            )
        })}
    </>
   } else if(restauranteTipo){
    slidesPerView = 1.3
    SwiperComponents = 
    <>
        {listaItens.map(restaurante => {
            return(
                <SwiperSlide key={`slide` + restaurante.nm_restaurante}>
                    <ItemRestaurante restaurante={restaurante}/>
                </SwiperSlide>
            )
        })}
    </>
    Itens = listaItens.map(restaurante => {
        return(
            <ItemRestaurante key={restaurante.nm_restaurante} restaurante={restaurante}/>  
        )
    })
   }

    return (
        <>
            <ContItens $categorias={categorias} $restaurante={restauranteTipo} $desktop={$desktop} $mobile={$mobile}>
            {CampoTexto}
                <nav className='nav-categorias-swipper'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={slidesPerView}
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