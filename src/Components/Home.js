import React from 'react'

import Homecontent from './Homecontent'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const goToProducts = () =>{
    navigate("/products");
  };
  const navigatee = useNavigate();
  const goToContact = () =>{
    navigatee("/contact");
  };
  return (
    <>
  <div className="banner">
    
    <div className="banner-des">
     <h1 className='heading'>Always be  Rooting<br/>   for a house<br />   plant.</h1>
     <p className='des'>Gifting a plant to oneself our loved and respected one's helps <br />  in expressing emotions with purpose If added with eco-friendly <br />  planters it would be giving back gift to the universe and humanity.. </p>
    <div className="buttonb">
     <button onClick={() => goToProducts()} className='banner-btn'> Shop Now</button>
     <button  onClick={() => goToContact()} className='banner-btn'> Contact Us</button>
     </div>
  </div>
  <div className="bannerimg">
  <img className='banner-img' src="./images/b1rr.png" alt="" />
  </div>
  </div>
  <Homecontent />
  </>
  )
  
}

export default Home
