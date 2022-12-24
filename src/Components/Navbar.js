import {useState} from 'react'
import React from 'react'
import {NavLink} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import {FaTimes,FaBars} from "react-icons/fa";
const Navbar = (props,setShow) => {
  const [click,setClick] = useState(false);
  const [navbar,setNavbar] = useState(false);
  const handlClick = () => setClick(!click);
  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
    <div className={navbar ? 'navbar active'  : 'navbar'}  >
    <div className="nav-bar" onClick={handlClick}>
        {click ?
           (<FaTimes size={25} style={{color:"white"}}/>):
           (<FaBars size={25} style={{color:"white"}}/>) 
        }
        </div>
        <div className="nav-img"  >
            <NavLink to='/'><img className='logo' src="./images/logo5.png" alt="" /></NavLink>
        </div>
        <div className="nav-link">
            <ul  className={click ? 'nav-menu active':'nav-menu'}>
            <NavLink className='list' to='/'>Home</NavLink>
            <NavLink className='list' to='/about'>About</NavLink>
            <NavLink className='list' to='/products' >Products</NavLink>
            <NavLink className='list' to='/services'>Services</NavLink>
            <NavLink className='list' to='/Contact'>Contact Us</NavLink>
            </ul>
        </div>
        <div className="navbar-login">
        <div  className={click ? 'login active':'login'} >
             <btn className="btnl">Login</btn>
             </div>
        <div className="Cart"  onClick={()=>setShow(false)}>
         
       <NavLink to='/cart'><FiShoppingCart className='cart-trolley'/></NavLink>
     
       <span className='cartnumber'>{props.count}</span>
       </div>
       </div>
       
    </div>
      
    </>
  )
}

export default Navbar
