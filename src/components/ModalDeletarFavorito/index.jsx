import styled from "styled-components";

const Overlay = styled.div`
    background-color: rgba(0, 0 , 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
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

const ModalDeletarFavorito = ({ restaurante, aoFechar }) => {
    return(
        <>
            {restaurante && <>
                <Overlay/>
                <DialogEstilizado open={!!restaurante} onClose={aoFechar}>
                    <div className="tituloDialog">Remover Restaurante</div>
                    <div className="sobreDialog">Tem certeza que deseja remover esse restaurante dos favoritos?</div>
                    <form method="dialog" className="contButtons">
                        <button className="cancelar" formMethod="dialog">Cancelar</button>
                        <button className="confirmar" type="submit">Confirmar</button>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalDeletarFavorito;