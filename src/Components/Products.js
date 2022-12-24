import {useState} from 'react'
import React from 'react'
import {HiBars3BottomRight} from "react-icons/hi2";
import {FaTimes} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import list from '../productdata';
import Productlist from './Productlist';
const Products = ({setShow , handleClick }) => {
  const [click,setClick] = useState(false);
  const handlClick = () => setClick(!click);
  const [searchTerm, setSearchTerm] = useState("");

  return(
    <>
      <div className="section1-bar" onClick={handlClick}>
        {click ?
           (<FaTimes size={25} style={{color:"black"}} />):
           (<HiBars3BottomRight size={25} style={{color:"black"}}/>) 
        }
        </div>
      <div className="products"  onClick={()=>setShow(true)}>
        <div className= {click ? 'section1 active':'section1'}>
          <div className="categories">
         <h2>Categories</h2>
      
      <div className="shapes">
        <p>All products</p>
        <p>Round shape</p>
        <p>Heart shape</p>
        <p>Hexagon shape</p>
      </div>
      </div>
      <div className="size">
        <h3>Size</h3>
        <p>Small</p>
        <p>Medium</p>
        <p>Large</p>
      </div>
      <div className="product-price">
        <p>Price</p>
      </div>
        </div>
        <div className="section2">
          <div className="product-right">
          <div className="search">
            <div className="search-input">
            <input className='search-input1' placeholder='Search for products'  onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />  <FaSearch/>
            </div>
            <>
            <select id="sort"  className='dropdown'  >
              <option value="Filter">Sort by</option>
              <option value="1">low to high</option>
              <option value="2">high to low</option>
               <option value="3">a to z</option>
               <option value="4">z to a</option>
            </select>
            </>
          </div>
          
        <div className='product'  >
        {
        
            list.filter((item) => {
                if(searchTerm === ""){
                  return item;
                }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
                
              })
            .map((item)=>(
                <Productlist item={item} key={item.id} handleClick={handleClick} />
            ))
        }
         
  
          
         </div>
        </div>
      </div>
      </div>
     
     </>
  )
}

export default Products
