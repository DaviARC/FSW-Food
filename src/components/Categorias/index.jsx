import './Categorias.css'
import ItemCategoria from './ItemCategoria';
import lanche from '../../assets/lanches-categoria.svg'
import prato from '../../assets/pf.svg';
import japonesa from '../../assets/sushi caviar 1.svg';
import pizza from '../../assets/pizza 1.svg';
import sobremesa from '../../assets/ice cream 1.svg';
import suco from '../../assets/juice.svg';
import refrigerante from '../../assets/soda.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const Categorias = () => {
    return (
        <nav className='nav-categorias'>
            <ul>   
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
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
                    })}    
            </Swiper>   
            </ul>
        </nav>
    )
}

export default Categorias;