import './App.css'
import { useState } from 'react'
import MenuContainer from './components/MenuContainer'
import HeaderComponent from './components/HeaderComponent'
import Carrinho from './components/Carrinho'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ])

  // const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  function showProducts(valorInput) {
    let result = products.filter( (item) => item.name === valorInput )
    setProducts(result)
  }
  function handleClick(productId) {
    let result = products.find( (item) => item.id === productId )
    setCurrentSale( [...currentSale, result] )
  }
  
  // console.log(currentSale)
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent showProducts={showProducts}/>
        <MenuContainer products={products} handleClick={handleClick} />
        <Carrinho currentSale={currentSale}/>
      </header>
    </div>
  )
}

export default App