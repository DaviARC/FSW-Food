import logo from '../../assets/Logo.svg'
import menu from '../../assets/Menu.svg'
import styled from 'styled-components'
import BarraPesquisa from '../BarraPesquisa'
import { Link } from 'react-router-dom'

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin: 24px 0;
    width: 100%;
    align-items: center;

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
        width: 100%;
        margin: 20px auto;
    }
`

const Header = ({ barraDePesquisa }) => {
    return(
        <HeaderEstilizado>
            <Link to={'/'}>
                <img
                    className='logo'
                    src={logo}
                    alt='Logo FSW Food'
                />
            </Link>
            {barraDePesquisa ? <BarraPesquisa/> : ''}
            <label >
                <input className='checkbox' type='checkbox'/>
                <img
                    className='menu'
                    src={menu}
                    alt='Menu'
                />
            </label>
        </HeaderEstilizado>
    )
}

export default Header