import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigatee = useNavigate();
const goToContact = () =>{
  navigatee("/contact");
};
  return (
      <div className="service">
        <div className="services-title">
        <h2 className='title'><span> Our Services </span></h2>
        <p className='tagline'>We provide the perfect service for you.</p>
        </div>
        
        <div className="service-row">
          <div className="service-col">
            <div className="service-img">
              <img src="./images/services5.jpeg" alt="" />
            </div>
            <div className="service-name">
              <h3>Maintenance of Plants</h3>
            </div>
            <div className="service-des">
               <ul>
                <p>Repotting</p>
                <p>Educating to avoid Root Rot</p>
                <p>Shaping Lucky Bamboo</p>
                <p>Trimming</p>
                <p>Cleaning</p>
                <p>Common Houseplant Diseases - Diagnosed & Addressed through expert panel</p>
                <p>Lighting Temperature addressed according to the requirement of season and the variety of the Plant</p>
               </ul>
            </div>
          </div>
          <div className="service-col">
            <div className="service-img">
              <img src="./images/services2.jpeg" alt="" />
            </div>
            <div className="service-name">
              <h3>Landscaping And Maintenance</h3>
            </div>
            <div className="service-des">
             <ul>
              <p>Hydro Seeding</p>
              <p>Landscape Architecture Service</p>
              <p>Lawn Care</p>
              <p>Weeding & Pest Control Service</p>
              <p>Spring of Fall Maintenance</p>
              <p>Pruning</p>
              <p>Hedging</p>
              <p>Lawn Protect & Feed</p>
              <p>Mulching</p>
              <p>Seasonal Display</p>
              <p>Start Up and Shut Down irrigation system</p>
             </ul>
            </div>
          </div>
          <div className="service-col">
            <div className="service-img">
              <img src="./images/services3.jpeg" alt="" />
            </div>
            <div className="service-name">
              <h3>Maintenance of Soil / Media</h3>
            </div>
            <div className="service-des">
             <ul>
              <p>All purpose soil / Media</p>
              <p>Orchid Mix</p>
              <p>Cacti & Succulent Mix</p>
              <p>African Violet Mix</p>
              <p>Organic Mix</p>
              <p>Moisture Control Mix</p>
              <p>Aroid Mix</p>
              <p>Peat -Free Mix</p>
              <p>Indoor Potting Mix</p>
              <p>Raised Bed Mix</p>
              <p>Seed Starting Mix</p>
             </ul>
            </div>
          </div>
        </div>
        <div className="service-content">
         <div className="service-content1">
          <h3> Other maintenance suggestions <br /> required upon are </h3>
          <div className="service-content-title">
          <ul><p>The water holding capacity of Soil / Media</p>
          <p>The Quantity of Soil / Media required according to the Planters size </p>
          <p>Nutrients required like 
            <br /> - Limestone
            <br /> - Sulphur 
            <br /> - Nitrogen
            <br /> - Phosphorus
           </p>
         </ul>
         </div>
         <div className="learnmore">
         <a href='' className='learn-More'>Learn More</a>
         </div>
         </div>
         <div className="service-content-img">
          <img src="./images/services1.jpeg" alt="" />
         </div>
        </div>

        <div className="service-content-second">
        <div className="service-content-img2">
          <img src="./images/services4.jpeg" alt="" />
         </div>
         <div className="service-content2">
          <p>For increase or decrease of ph level and to correct the 
            deficiencies for proper  <br /> growth  and coloration of the plants. Which would be suggested or recommended  <br /> by the expert  and experienced panel in PlantersZone.</p>
        
          
    
         <div className="learn">
         <a href='' className='learn-More'  onClick={() => goToContact()}>Contact Us</a>
         </div>
         </div>
        </div>
      </div>
  )
}

export default Services
