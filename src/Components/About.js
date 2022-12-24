import React from 'react'
import ReadMoreReact from 'read-more-react';
const About = () => {
  return (
    <div className="about">
      <h2 className='about-heading'><span> About Us</span></h2>
      <div className="about-des">
        <div className="about-content">
          <h3 className='vision'>Our Vision</h3>
          <div className="vision-des1">
           <p className='vision-des'>  Spreading Happiness to the Universe and Humanity with Eco-friendly Indoor Plants. Even though one can’t buy happiness, one can Plant the Plant which is pretty much the same .
           Gorgeous Air-Purifying Indoor plants restore balance in this high tech age by removing pollutants of mind, body and environment for which PlantersZone align with integrity and social responsibility . </p>
           </div>
          
          <h3 className='vision'>Our Mission</h3>
          <div className="vision-des1">
         <p className='vision-des'> PlantersZone touches humanly possible humanity through various channels of networking with accountability and transparency . The Team of PlantersZone reaches out to humanity by Direct Customer Contact , Nurseries , Interior Designers , Landscape Designers , Hospitals , Clinics , Schools , Colleges, Hotels , IT Companies , Banks , Showrooms , Supermarkets to mention few of PlantersZone channel partners in spreading the awareness of Eco Friendly indoor plants .
         PlantersZone caters Eco-friendly Non Plastic Planters along with Gorgeous Air purifying indoor plants using organic cocopet with beautifying pebbles . Where in the maintenance is simple and logical as PlantersZone tagline is respected with honesty for 
        Less Soil - Less Water. PlantersZone believes in giving back to the society and universe by educating every solitary person the team comes in contact with detailed information regarding Eco-friendly indoor plants to protect the generations to come with health and happiness .           
     </p>
     </div>
    <h3 className='vision'>Our Team</h3>
    <div className="about-row">
      <div className="col">
      <div className="img-section">
        <img src="./images/p1.jpeg" alt="" />
      </div>
      <div className="name">
        <h3> Surya Pratap Dantu </h3>
      </div>
      <div className="role">
       <h5>  (Managing Director Finance and Business Development )</h5>
      </div>
      <div className="pdes">
        <p> <ReadMoreReact text={"“Why try to Predict when one can Create “ is the soul concept of Mr Surya Pratap Dantu with 20 years of experience in Financial Management and Entrepreneurship. With strong leadership skills, excellent analytical ability with flair of clarity in communication on the vision to accomplish the mission gives the company with long term financial strategies to navigate for Ultimate Success ."}
                min={20}
                ideal={100}
                max={200}
                readMoreText= "read more.."/></p>
       </div>         
    </div>
    <div className="col">
      <div className="img-section">
        <img src="./images/p3.jpg" alt="" />
      </div>
      <div className="name">
        <h3>  Tara Sri Nalamati </h3>
      </div>
      <div className="role">
       <h5> ( Director Admin ) </h5>
      </div>
      <div className="pdes">
      <p> <ReadMoreReact text={"  “ The future belongs to those who believe in the beauty of their dreams “ is the soul concept of Miss Tara Sri Nalamati for taking up a challenge to be an entrepreneur even though having a lot of diverse career options after completing MBA from a reputed University . Has spot on focus with return on investment with flair for risk taking attitude .."}
                min={20}
                ideal={100}
                max={200}
                readMoreText= "read more.."/></p>
      </div>
    </div>
    <div className="col">
      <div className="img-section">
        <img src="./images/p2.jpeg" alt="" />
      </div>
      <div className="name">
        <h3> Ravi Hari </h3>
      </div>
      <div className="role">
       <h5> (Head of Marketing & Sales promotions ) </h5>
      </div>
      <div className="pdes">
      <p> <ReadMoreReact text={"  With 30 years experience in media market and sales promotions takes up the projects which gives value for the money , having flair for marathon with absolute communication and command on product knowledge because of experience and research on the same.."}
                min={20}
                ideal={100}
                max={200}
                readMoreText= "read more.."/></p>
      </div>
    </div>
    <div className="col">
      <div className="img-section">
        <img src="./images/p4.png" alt="" />
      </div>
      <div className="name">
        <h3> Sangmeshwar Peri</h3>
      </div>
      <div className="role">
       <h5> ( Head of operations )</h5>
      </div>
      <div className="pdes">
      <p> <ReadMoreReact text={" With 30 years experience has the ability to do successful project schedules taking into consideration team members strength availability, brainstorming the team  and creating templates on project based services to complete the projects before schedule ."}
                ideal={100}
                max={200}
                readMoreText= "read more.."/></p>
      </div>
    </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default About
