import './ItemCategoria.css';


const ItemCategoria = ({ children, pathImagem, alt }) => {
    return (
        <li>
            <img
                src={pathImagem}
                alt={alt}
            />
            <a href=''>{children}</a>
        </li>
    )
}

export default ItemCategoria