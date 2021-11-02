import './style.css'

const Product = ( { prod, handleClick } ) => {
  
  const { name, category, price, img, id } = prod

  return (
    <div className="productCard">
      <div className="productCardHeader">
        <img src={img} alt={name}/>
      </div>
      <div className="productCardMain">
        <div className="productCardMainInfo">
          <h3>{name}</h3>
          <p>{category}</p>
          <span>R$ {price}</span>
        </div>
        <button onClick={() => handleClick(id)}>Adicionar</button>
      </div>
    </div>
  )
};

export default Product;

// Responsável por apresentar as informações do produto: nome, categoria e preço, além de um button para adicionar ao carrinho.
