import { Link } from 'react-router-dom'
import lupa from '../../assets/Search.svg'
import styled from 'styled-components'
import { useState } from 'react'

const ContBarraPesquisa = styled.div`
    position: relative;
    width: 100%;
    display: ${props => props.$desktop ? 'none' : 'block'};

& input{
    box-sizing: border-box;
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: #F4F4F5;
    border-radius: 10px;
    outline: none;
}
& div{
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 8px;
}
& img{
    cursor: pointer;
    width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (min-width: 1024px) {
    display:${props => props.$mobile ? 'none' : 'block'};
    
    &, & input{
        width: 610px;
    }
}
`

// eslint-disable-next-line react/prop-types
const BarraPesquisa = ({ amarelo, $mobile, $desktop }) =>{
    const [value, setValue] = useState();

    return(
        <ContBarraPesquisa $mobile={$mobile} $desktop={$desktop}>
            <input
                onChange={(e) => setValue(e.target.value)}
                placeholder="Buscar Restaurantes"
            />
            <div style={{backgroundColor: amarelo ? '#FFB100' : '#EA1D2C'}}>
                <Link to={'buscarRestaurante/' + value}>
                    <img
                        src={lupa}
                        alt="Lupa"
                    />
                </Link>
            </div>
        </ContBarraPesquisa>
    )
}

export default BarraPesquisa