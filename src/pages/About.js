import React from 'react'
import "../css/about.css"


export default function About() {
  return (
    <>
      <div className='aboutus-container'>
      <h1 className='about-head-1'>ABOUT US</h1>
        <div className='about-part-1'>
          <div className='about-head-2'>
            <div className='about-head-left'>
              <h2>Vedic Architecture & <br /> Interiors</h2>
              <p>Discover the perfect blend of innovation and elegance. Our architects and designers <br />
                craft spaces that tell your unique story. From concept to creation. let us transfrom <br />
                your vistion into reality. Discover the perfect blend of innovation and elegance. Our <br />
                architects and designers craft spaces that tell your unique story. From concept to <br />
                creation, let us transform your vision into reality.</p>
              <p>
                Discover the perfect blend of innovation and elegance. Our architects and designers <br />
                craft spaces that tell your unique story. From concept to creation, let us transform <br />
                your vision into reality.
              </p>
            </div>
            <img className='about-head-right' src="./images/about_img1.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
