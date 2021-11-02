import CarrinhoItem from '../CarrinhoItem'

const Carrinho = ( { currentSale } ) => {
    // const {  } = currentSale
    console.log(currentSale)
    return (
        <section>
            <header>Carrinho de Compras</header>
            <main>
                {
                    currentSale.map( (prod) => <CarrinhoItem prod={prod}/> )
                }
            </main>
            <div>
                <h3>Total: R$40,00</h3>
                <button>Remover Todos</button>
            </div>

        </section>
    )

}

export default Carrinho