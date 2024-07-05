import styled from "styled-components";

const ContCard = styled.div`
    background-color: ${props => props.$amarelo ? "#FFB100" : "#EA1D2C"};
    width: 100%;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 150px;
    color: #FFFFFF;
    font-size: 1rem;
    border-radius: 10px;
    display:${props => props.$desktop ? 'none' : 'flex'};

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

const CardDesconto = ({ $mobile, $desktop, $amarelo, path, text }) => {
    return(
        <ContCard $mobile={$mobile} $desktop={$desktop} $amarelo={$amarelo}>
            <div className="contTexto">
                {text}
            </div>
            <img
                src={path}
                alt="pizza"
            />
        </ContCard>
    )
}

export default CardDesconto;