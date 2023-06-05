import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'


function navber() {
  return (

     <div className='container'>
        
        <div className='brand' style={{marginLeft:"60px",marginTop:"20px",width:"900px"}}>Dharmpal Kumar</div>
         
          <div   className="d-flex">
            <Link className="homlink"  
             to="/">Home</Link>
            <Link className="reglink" 
             to="/register">Signup</Link>
            <Link className="loglink" 
            to="/login">Login</Link>
          </div>

     </div>

  )
}

export default navber