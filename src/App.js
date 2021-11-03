import './App.css'
import { useState } from 'react'
import MenuContainer from './components/MenuContainer'
import HeaderComponent from './components/HeaderComponent'
import Carrinho from './components/Carrinho'
// import Pesquisa from './components/Pesquisa'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ])

  const [currentSale, setCurrentSale] = useState([])
  const [pesquisou, setPesquisou] = useState(false)
  const [valorPesquisado, setValorPesquisado] = useState('')

  function showProducts(valorInput) {
    setValorPesquisado(valorInput)
    let result = products.filter( (item) => item.name.toLowerCase() === valorInput.toLowerCase() || item.category.toLowerCase() === valorInput.toLowerCase() )
    setProducts(result)
  }
  function handleClick(productId) {
    let result = products.find( (item) => item.id === productId )

    let prodDupli = currentSale.find( (item) => item.id === productId)

    prodDupli === undefined ?
    setCurrentSale( [...currentSale, result] ) :
    console.log('produto duplicado')

  }
  function removeItem(id) {
    let result = currentSale.filter( (item) => item.id !== id )
    setCurrentSale(result)
  }
  function removeTodos() {
    setCurrentSale([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent showProducts={showProducts} setPesquisou={setPesquisou}/>
      </header>
      <section className='App-section'>
        
        <MenuContainer products={products} handleClick={handleClick} pesquisou={pesquisou} valorPesquisado={valorPesquisado}/>
        <Carrinho currentSale={currentSale} removeItem={removeItem} removeTodos={removeTodos}/>
      </section>
    </div>
  )
}

export default App