import Product from "../Product"
import './style.css'

const MenuContainer = ( { products, handleClick } ) => {
    return (

        <div className='menuProduct'>
            {
                products.map( (prod) => <Product prod={prod} handleClick={handleClick}/> )
            }
        </div>

    )
}

export default MenuContainer

// Responsável por renderizar a lista de produtos;