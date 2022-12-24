import React from 'react'
const Card = ({item, handleClick}) => {
  const {name, price, image} = item;
  return (
    <div className="card">
    <img className='product-img' src={image} alt="" />
    <h2 className='productname'>{name}  <a className="productprice">{price}</a></h2>
    <div className="productdes">
    <button className='productdes1' onClick={()=>handleClick(item)}>Add to Cart</button>
  </div>
  </div>
  )
}

export default Card