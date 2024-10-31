import React from 'react'
import "../css/navbar.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id='nav'>
          <div className='logo'>  
          <img src="./images/logo.jpg" alt="" />
          </div>
          <div className="collapse navbar-collapse" id='nav-head'>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-items">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item " id="nav-item-4 ">
                <Link className="nav-link color" to="/contact">Contact Us</Link>
              </li>
              
            </ul>
          </div>
      </nav>
    </>
  )
}
