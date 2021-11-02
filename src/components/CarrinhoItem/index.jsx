const CarrinhoItem = ( { prod } ) => {
    const { id, name, category, price, img } = prod
    return (
        <div>
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <span>{category}</span>
            </div>
            <button>Remover</button>
        </div>
    )
}

export default CarrinhoItem