import './Header.css'
import logo from '../../assets/Logo.svg'
import menu from '../../assets/Menu.svg'

const Header = () => {
    return(
        <header>
            <img
                className='logo'
                src={logo}
                alt='Logo FSW Food'
            />
            <label >
                <input type='checkbox'/>
                <img
                    className='menu'
                    src={menu}
                    alt='Menu'
                />
            </label>
        </header>
    )
}

export default(Header)