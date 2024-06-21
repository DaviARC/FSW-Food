import './BarraPesquisa.css'
import lupa from '../../assets/Search.svg'

// eslint-disable-next-line react/prop-types
const BarraPesquisa = ({ amarelo }) =>{
    console.log(amarelo)
    return(
        <div className='BarraPesquisa'>
            <input
                placeholder="Buscar Restaurantes"
            />
            <div style={{backgroundColor: amarelo ? '#FFB100' : '#EA1D2C'}}>
                <img
                    src={lupa}
                    alt="Lupa"
                />
            </div>
        </div>
    )
}

export default BarraPesquisa