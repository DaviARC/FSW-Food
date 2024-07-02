import styled from "styled-components";

const ContCard = styled.div`
    background-color: #EA1D2C;
    width: 100%;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 150px;
    color: #FFFFFF;
    font-size: 1rem;
    border-radius: 10px;
    display: flex;

    & .strong{
        font-size: 1.8rem;
        font-weight: 700;
    }
    & .contTexto{
        margin-left: 38px;
    }
    & img{
        width: 225px;
        position: absolute;
        right: -50px;   
    }

    @media screen and (min-width: 1024px){
        display:${props => props.$mobile ? 'none' : 'flex'};
        width: 47.5%;
        font-size: 16px;
        overflow: visible;
        height: 215px;

        & .strong{
            font-size: 40px;
            font-weight: 700;
        }
        & .contTexto{
            margin-left: 40px;
        }
        & img{
            width: 60%;
            right: -10px;
        }
    }
`

const CardDesconto = ({ $mobile}) => {
    return(
        <ContCard $mobile={$mobile}>
            <div className="contTexto">
                <div>até</div>
                <div><span className="strong">30%</span> de</div>
                <div><span className="strong">Desconto</span></div>
                <div>em Pizzas</div>
            </div>
            <img
                src="/public/pizza-card.png"
                alt="pizza"
            />
        </ContCard>
    )
}

export default CardDesconto;