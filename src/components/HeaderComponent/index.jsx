import './style.css'
import { useState } from 'react'

const HeaderComponent = ( { showProducts } ) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <header className='header'>
            <h1>Burguer <span>Kenzie</span></h1>
            <div>
                <input type="text" onChange={(event) => setInputValue(event.target.value)} placeholder='Digitar Pesquisa'/>
                <button onClick={() => showProducts(inputValue)} className='botaoPesquisa'>Pesquisar</button>
            </div>
        </header>
    )
}

export default HeaderComponent