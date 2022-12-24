import React from 'react'
import {NavLink} from 'react-router-dom'
import { GoLocation} from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { FaFacebook , FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";
import {  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer-head">
       <div className="footer">
        <div className="row">
        <div className="col1">
            <img className='logof' src="./images/logo5.png" alt="" />
            <p>Less Soil- less Water.</p>
        </div>
        <div className="col2">
            <h2 className='fh'>Company</h2>
            <li > <NavLink className='list' to='/about'>About Us</NavLink></li>
            <li>Carrers</li>
            <li>Blogs</li>
        </div>
        <div className="col3">
            <h2 className='fh'>Resourses</h2>
            <li>Our work</li>
            <li> <NavLink className='list' to='/services'>Services</NavLink></li>
            <li>FAQ</li>
        </div>
        <div className="col4">
            <h2 className='fh'>Contact Us</h2>
            <div className="fp">
            <FiPhone/>
            <p>-040-35174270</p>
            </div>
            <div className="fe">
            <TfiEmail />
            <p>info.planterszone@gmail.com</p>
            </div>

            <div className="fl">
            <GoLocation/>
            <p>201, Parimala Residency, Road No. 2, <br />
                Jubilee Hills, Krishna Nagar Main Road, <br />above More Super Market</p>
        </div>
        </div>
        <div className="col5">
            <h2 className='fh'>Follow Us</h2>
            <div className="social">
            <div className='social-icons'>
                <a href="https://www.facebook.com/profile.php?id=100088524890266" target=''>
            <FaFacebook/>
            </a>
            </div>
            <div className='social-icons'>
            <a href="https://www.instagram.com/planterszone_official/" target=''>
            <FaInstagram/>
            </a>
            </div>
            <div>
            <a href="" target='_blank'>
            <FaYoutube/>
            </a>
            </div>
            <div>
            <a href="" target='_blank'>
            <FaTwitter/>
            </a>
            </div>
        </div>
        </div>
  </div>
  </div>
    <div className="footer-bottom">
        <hr className='H-line'/>
        <div className="content">
            <p>@{new Date().getFullYear()} PlantersZone. All Rights Reserved</p>
        </div>
    </div>
  </div>
  </footer>
  )
}

export default Footer
