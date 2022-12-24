import React from 'react'

    
    const Productlist = ({item, handleClick}) => {
      const {name, price, image} = item;
      
    return (
    
      <div className="productlist">
      <div  className='product-body'>
        <img src={image} alt="." className='product-img' />
          <h5 className='productname'>{name} <p className="productprice">₹ {price}</p> </h5>
          <div className="productdes">
          <button className='productdes1'  onClick={()=>handleClick(item)}>Add to Cart</button>
       </div>
            
      </div>
      </div>
    )
  }



export default Productlist
