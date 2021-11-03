import './style.css'

const CarrinhoItem = ( { prod, removeItem } ) => {
    const { id, name, category, img } = prod
    return (
        <div className='carrinhoItem'>
            <img src={img} alt={name} />
            <div>
            <div className='carrinhoItemInfo'>
                <h2>{name}</h2>
                <span>{category}</span>
                </div>
                <button onClick={() => removeItem(id)}>Remover</button>
            </div>
        </div>
    )
}

export default CarrinhoItem