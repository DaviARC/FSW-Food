import styled from "styled-components";
import Overlay from "../Overlay";

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    width: 75%;
    padding: 20px;
    transform: translateY(-50%);
    border: none;
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 10px;
    .tituloDialog{
        font-weight: 600;
        color: #323232;
        margin-bottom: 12px;
        font-size: 18px;
    }
    .sobreDialog{
        color: #838896;
        margin-bottom: 20px;
    }
    .contButtons{
        display: flex;
        justify-content: space-between;
    }
    .cancelar, .confirmar{
        width: 47.5%;
        padding: 14px;
        border-radius: 10px;
        border: none;
        font-weight: 600;
        cursor: pointer;
    }
    .confirmar{
        background-color: #EA1D2C;
        color: #FFFFFF;
    }
    @media screen and (min-width: 1024px) {
        width: 320px;
    }
`

const ModalDeletarFavorito = ({ item, aoFechar, aoCancelar, titulo, sobre, confirmar }) => {
 
    return(
        <>
            {item &&
                <Overlay>
                    <DialogEstilizado open={!!item} onClose={aoFechar}>
                        <div className="tituloDialog">{titulo}</div>
                        <div className="sobreDialog">{sobre}</div>
                        <form method="dialog" className="contButtons">
                            <button className="cancelar" onClick={(e) => {e.preventDefault(); aoCancelar()}}>Cancelar</button>
                            <button className="confirmar" formMethod="dialog" type="submit">{confirmar}</button>
                        </form>
                    </DialogEstilizado>
                </Overlay>
            }
        </>
    )
}

export default ModalDeletarFavorito;