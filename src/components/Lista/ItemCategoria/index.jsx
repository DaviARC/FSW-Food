import styled from 'styled-components';

const ContLi = styled.div`
    height: 60px;
    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        margin: 20px 0 ;
    }
`
const LiModificado = styled.li`
    display: flex;
    align-items: center;
    border-radius: 82px;
    gap: 4.5px;
    padding: 8px 24px;
    max-width: 120px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    font-size: 14px;
    justify-content: center;
    cursor: pointer;
    & a{
        text-decoration: none;
        font-weight: 600;
        color: #323232;
    }
    @media screen and (min-width: 1024px) {
        padding: 10px 24px;
    }
`

const ItemCategoria = ({ children, pathImagem, alt }) => {
    return (
        <ContLi>    
            <LiModificado>
                <img
                    src={pathImagem}
                    alt={alt}
                />
                <a href=''>{children}</a>
            </LiModificado>
        </ContLi>
    )
}

export default ItemCategoria