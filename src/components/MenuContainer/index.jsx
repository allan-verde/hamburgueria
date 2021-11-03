import Product from "../Product"
import Pesquisa from '../Pesquisa'
import './style.css'

const MenuContainer = ( { products, handleClick, pesquisou, valorPesquisado } ) => {
    return (
        <section className='secaoProd'>
            {pesquisou ? (<Pesquisa valorPesquisado={valorPesquisado}/>) : console.log('sem pesquisa')}
            <div className='menuProduct'>

                {
                    products.map( (prod) => <Product prod={prod} handleClick={handleClick}/> )
                }
            </div>
        </section>
    )
}

export default MenuContainer

// Responsável por renderizar a lista de produtos;