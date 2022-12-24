import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import { Carddata, responsive } from "./Carddata";
import { useNavigate } from 'react-router-dom'


const Homecontent = (handleClick) => {


    const navigate = useNavigate();
    const goToAbout = () =>{
      navigate("/about");
    };
    const navigatee = useNavigate();
    const goToProducts = () =>{
      navigatee("/products");
    };
 
  return (
    <div className="home-content">
   <div className="homescale">
    <div className="scale1">
    <img src="./images/s1.png" alt=""  /> 
    <p>Eco-friendly</p>
    </div>
    <div className="scale2">
    <img src="./images/s3.png" alt=""  /> 
    <p>Natural Air Purifier</p>
    </div>
    <div className="scale3">
    <img src="./images/s2.png" alt=""  /> 
    <p>Remove Pollutants</p>
    </div>
    <div className="scale4">
    <img src="./images/s4.png" alt=""  /> 
    <p>Less Soil</p>
    </div>
    <div className="scale5">
    <img src="./images/s5.png" alt=""  /> 
    <p>Low Maintenance</p>
    </div>
    <div className="scale6">
    <img src="./images/s6.png" alt=""  /> 
    <p>Less Water</p>
    </div>
   </div>

   <div className="home-about">
        <div className="home-about-img">
          <img src="./images/b3.jpg" alt="" />
         </div>
         <div className="home-aboutdes">
         <h3>About Us</h3>
          <p>
              PlantersZone respects the loyalists of No Plastic and Eco-friendly  environs for <br /> promoting Eco-friendly Planters with plants and organic cocopet. 
             <br /> PlanterZone concept of escalating the awareness  of Indoor plants as <br /> Eco-friendly solar powered air purifiers by reaching out to each and every <br /> specific admirers of health and happiness. If added with Eco-friendly Planters <br /> would be giving back gifts to the Universe and Humanity .
             </p>
         <div className="read-more">
         <button onClick={() => goToAbout()} className='home-about-btn'> Read More</button>
         </div>
         </div>
        </div>
      <div className="featured-section">
        <h3>Our Products</h3>
        <h6 onClick={() => goToProducts()}>See all</h6>
        <Carousel showDots={true} responsive={responsive} className="carousel">
       { Carddata.map((item)=>(
                <Card item={item} key={item.id} handleClick={handleClick} />
            ))}
       </Carousel>       
      </div>
   </div>
  )
}

export default Homecontent