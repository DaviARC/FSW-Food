import ItemCategoria from './ItemCategoria';
import lanche from '../../assets/lanches-categoria.svg'
import prato from '../../assets/pf.svg';
import japonesa from '../../assets/sushi caviar 1.svg';
import pizza from '../../assets/pizza 1.svg';
import sobremesa from '../../assets/ice cream 1.svg';
import suco from '../../assets/juice.svg';
import refrigerante from '../../assets/soda.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import styled from 'styled-components';

const categorias = [
    {
        path: lanche,
        nome: "Lanches"
    },
    {
        path: prato,
        nome: "Pratos"
    },
    {
        path: japonesa,
        nome: "Japonesa"
    },
    {
        path: pizza,
        nome: "Pizza"
    },
    {
        path: sobremesa,
        nome: "Sobremesas"
    },
    {
        path: suco,
        nome: "Sucos"
    },
    {
        path: refrigerante,
        nome: "Refrigerantes"
    }

]
const ContCategorias = styled.div`
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
            margin: 40px 0;
        }
    }
`


const Categorias = () => {
   
    return (
        <ContCategorias>
            <nav className='nav-categorias-swipper'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={3}
                >
                    <ul>
                        {categorias.map(categoria => {
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
                         )}
                    </ul>  
                </Swiper>   
            </nav>
            <nav className='nav-categorias'>
                <ul>
                    {categorias.map(categoria => {
                        return(
                            <ItemCategoria 
                                key={categoria.nome}
                                pathImagem={categoria.path} 
                            >
                                {categoria.nome}
                            </ItemCategoria> 
                            )
                        }
                    )}
                </ul>
            </nav>
        </ContCategorias>
    )
}

export default Categorias;