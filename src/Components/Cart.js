import { useState,useEffect } from "react"
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import {BiLeftArrowAlt } from "react-icons/bi";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom'
const Cart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const goToProducts = () =>{
    navigate("/products");
  };
  const handlePrice = ()=>{
      let ans = 0;
      cart.map((item)=>(
          ans += item.amount * item.price
      ))
      setPrice(ans);
  }
  const handleRemove = (id) =>{
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr);
      // handlePrice();
  }
  useEffect(()=>{
      handlePrice();
  })

  return (
   
    <div className="cart">
   
    <p className="total-items">
          you have <span className="total-items-count">{cart.length}</span> items
          in shopping cart
        </p>
        <hr className='h-line' />

        <div className="cart-sec">
        <Scrollbars>
        {
            cart?.map((item)=>(
              <div className="cartitem"  key={item.id} >
                   <div className="cartitem-img">
                        <img src={item.image} alt=''/>
                        <p>{item.name} </p> 
                       </div>
                       <div className="carditem-price">
                         <p>₹ {item.price}</p>
                        </div>
                        <div className="cartitem-quantity">   
                        <TiMinus onClick={()=>handleChange(item, -1)}  />
                        <span className='quantity'> {item.amount} </span>
                        <TiPlus  onClick={()=>handleChange(item, +1)}/>
                    </div>
                 
                    <div className="cartitem-subtotal">
                    <p> ₹ {  item.amount * item.price} </p>
                    </div>
                    <div className="cartitem-remove"onClick={()=>handleRemove(item.id)}>
                    <MdDelete/>
                    </div>
                </div>
            ))}
              </Scrollbars>
        </div>
  <hr />
    <div className="cart-end">
        <div className="continue-shopping">
            <button className="continue-shopping1" onClick={() => goToProducts()}> <BiLeftArrowAlt className="continue-shopping2" /> Continue Shopping</button>
        </div>
      <div className="total-amount">
       <div className="sub-total">
        <p>Sub-total : <span></span>
       {
       cart.map(item => item.amount * item.price).reduce((total, value) => total + value, 0)
       }
       </p>
       </div>
       <div className="shipping-fee">
        <p>Shipping-fee : 20 rs</p>
        
       </div>
       <hr />
       <div className="order-total">
       <p> Order-Total : <span></span>
              {
                  cart.map(item => (item.price * item.amount) ).reduce((total, value ) => total + value , 0)
              }
          </p>
       </div>
      </div>
    </div>
    <div className="checkout">
        <button className="checkout1">Checkout</button>
      </div> 

      </div>
  )
}
export default Cart