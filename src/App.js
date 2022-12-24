import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Components/Styles/Desktop.css'
import './Components/Styles/Mobile.css'
import './Components/Styles/Laptop.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Products from './Components/Products'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Singleproduct from './Components/Singleproduct'
import Cart from './Components/Cart'
import Error from './Components/Error'
import Footer from './Components/Footer';

const App = () => {
  const [show, setShow] = useState();
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
    <BrowserRouter>
	
    <Navbar count={cart.length} setShow={setShow}/>
    {
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products   handleClick={handleClick} />} /> 
      {
       show ?  <Route path='/products' element={<Products   handleClick={handleClick} />} /> : 
       <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />  
      }
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/singleproduct/:id' element={<Singleproduct/>} />

      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
