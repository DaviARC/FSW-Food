import styled from 'styled-components';

const LiModificado = styled.li`
    display: flex;
    align-items: center;
    border-radius: 82px;
    gap: 4.5px;
    padding: 8px 24px;
    max-width: 120px;
    box-shadow: 5px 5px 30px 0px #0000000F;
    font-size: 14px;
    justify-content: center;
    & a{
        text-decoration: none;
        font-weight: 600;
        color: #323232;
    }
`

const ItemCategoria = ({ children, pathImagem, alt }) => {
    return (
        <div style={{height: "70px", margin:"10px 0"}}>    
            <LiModificado>
                <img
                    src={pathImagem}
                    alt={alt}
                />
                <a href=''>{children}</a>
            </LiModificado>
        </div>
    )
}

export default ItemCategoria