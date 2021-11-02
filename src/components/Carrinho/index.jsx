import './style.css'

import CarrinhoItem from '../CarrinhoItem'

const Carrinho = ( { currentSale } ) => {
    // const {  } = currentSale
    console.log(currentSale)
    return (
        <section className='carrinho'>
            <header>Carrinho de Compras</header>
            <main>
                {
                    currentSale.map( (prod) => <CarrinhoItem prod={prod}/> )
                }
            </main>
            <div className='carrinhoTotal'>
                <h3><p>Total:</p><span>R$40,00</span></h3>
                <button>Remover Todos</button>
            </div>

        </section>
    )

}

export default Carrinho