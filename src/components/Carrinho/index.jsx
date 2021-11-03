import './style.css'
import CarrinhoItem from '../CarrinhoItem'

const Carrinho = ( { currentSale, removeItem, removeTodos } ) => {
     let total = currentSale.reduce( (acc, cur) => {
        return acc + cur.price
    }, 0)
    console.log(total)

    return (
        <section className='carrinho'>
            <header>Carrinho de Compras</header>
            {
                currentSale.length > 0 ?
                <>
                    <main>
                        {
                            currentSale.map( (prod) => <CarrinhoItem prod={prod} removeItem={removeItem} /> )

                        }
                    </main>
                    <div className='carrinhoTotal'>
                        <h3><p>Total:</p><span>R$ {total}</span></h3>
                        <button onClick={() => removeTodos()}>Remover Todos</button>
                    </div>
                </> : 
                <div className='CarrinhoVazio'>
                    <h2>Sua sacola está vazia</h2>
                    <span>Adicione itens</span>
                </div>  
            }

        </section>
    )

}

export default Carrinho