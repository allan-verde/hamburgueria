import './style.css'

const CarrinhoItem = ( { prod } ) => {
    const { id, name, category, price, img } = prod
    return (
        <div className='carrinhoItem'>
            <img src={img} alt={name} />
            <div>
            <div className='carrinhoItemInfo'>
                <h2>{name}</h2>
                <span>{category}</span>
                </div>
                <button>Remover</button>
            </div>
        </div>
    )
}

export default CarrinhoItem