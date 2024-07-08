import logo from '../../assets/Logo.svg'
import menu from '../../assets/Menu.svg'
import styled from 'styled-components'
import BarraPesquisa from '../BarraPesquisa'
import { Link } from 'react-router-dom'

const HeaderEstilizado = styled.header`
    display:${props => props.$desktop ? 'none' : 'flex'};
    justify-content: space-between;
    margin: 24px 0;
    width: 100%;
    align-items: center;

    .linha{
        display: none;
    }
    & .logo{
        width: 6.25rem;
    }
    & .menu{
        width: 1.75rem;
        cursor: pointer;
    }
    .checkbox{
        display: none;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;

        .linha{
            display:${props => props.barraDePesquisa ? 'block' : 'none'};
            position: absolute;
            width: 100%;
            left: 0;
            border-bottom: 1px solid #EEEEEE;
            top: 79px;
        }
    }
`

const Header = ({ barraDePesquisa, $desktop, $barraDesktop }) => {
    return(
        <HeaderEstilizado barraDePesquisa={barraDePesquisa} $desktop ={$desktop}>
            <Link to={'/'}>
                <img
                    className='logo'
                    src={logo}
                    alt='Logo FSW Food'
                />
            </Link>
            {barraDePesquisa ? <BarraPesquisa $desktop={$barraDesktop}/> : ''}
            <label >
                <input className='checkbox' type='checkbox'/>
                <img
                    className='menu'
                    src={menu}
                    alt='Menu'
                />
            </label>
            <div className='linha'/>
        </HeaderEstilizado>
    )
}

export default Header