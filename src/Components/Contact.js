
import React from 'react'
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
const Contact = () => {
  return (
    <>
    <div className="Contact">
    <h2 className='c-head'>Contact Us</h2>
    <p className='c-des'>Get in touch, Don’t Be a Stranger </p>
   <div className="address">
    <div className="phone">
   <FiPhone className='phone'/>
    <p>-040-35174270</p>
    </div>
    <div className="tmail">
    <TfiEmail className='temail'/>
    <p>info.planterszone@gmail.com</p>
    </div>
    <div className="location">
    <GrLocation className='location1'  />
    <p>201, Parimala Residency, Road No. 2, Jubilee Hills, Krishna Nagar Main Road, above More Super Market</p>
    </div>
    </div>
    </div>
    <div className="contact-info">
      <div className="contact-img">
        <img className='contactimg' src="./images/c1.jpg" alt="" />
      </div>
    <div className="contact-form">
      <form action="https://formspree.io/f/mqkjodwo" method="POST"> 
      <input className='fullname' type="text" name='name' placeholder='Full Name'  required />
      <input className='email' type="email" name='email' placeholder='Email'  required />
      <textarea className='message' name="message" placeholder='Message' id="" cols="30" rows="6" required></textarea>
      <input className='send' type="submit" value="Send"/>
      </form> 
    </div>
    </div>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.3061814617697!2d78.42392322407267!3d17.430380873756267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9100e4df89b3%3A0xb3fb59adb85c5272!2sPlanters%20Zone!5e0!3m2!1sen!2sin!4v1669374452845!5m2!1sen!2sin" 
    width="90%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
     </>
  )
}

export default Contact
