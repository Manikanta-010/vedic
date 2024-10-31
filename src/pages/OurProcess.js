import React from 'react'
import "../css/ourprocess.css"
import one from "../assests/one.png"



export default function OurProcess() {
  return (
    <div className='container'>
        <div className='heading-one'>
          <h5>our process</h5>
          <h3>Streamlined Design Journey: Our Three Step Process</h3>
          <p className="the">Discover the perfect blind of innovation and elegance</p>
        </div>


        <div className='body-container'>
        <div className='body-one'>
          <div className='body-one-left'>
            <img className='pic-one' src='./images/01.jpg' alt='no'/>
          </div>
          <div className='body-one-right'>
            <h3>CLIENT DISCUSSION</h3>
            <img className='pic-two' src={one} alt='srfnj'/>
            <p>We start by talking with you.you insights and vision guide us. Share your thoughts, preferences, and <br/>
            dreams for your space. we're here to listen.</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className='body-one'>
          <div className='body-one-left'>
            <img className='pic-one' src='./images/02_left.jpg' alt='no'/>
          </div>
          <div className='body-one-right'>
            <h3>CLIENT DISCUSSION</h3>
            <img className='pic-two' src="./images/02_jpg_right.jpg" alt='srfnj'/>
            <p>We start by talking with you.you insights and vision guide us. Share your thoughts, preferences, and <br/>
            dreams for your space. we're here to listen.</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className='body-one'>
          <div className='body-one-left'>
            <img className='pic-one' src='./images/03_left.jpg' alt='no'/>
          </div>
          <div className='body-one-right'>
            <h3>CLIENT DISCUSSION</h3>
            <img className='pic-two' src="./images/03_jpg_right.png" alt='srfnj'/>
            <p>We start by talking with you.you insights and vision guide us. Share your thoughts, preferences, and <br/>
            dreams for your space. we're here to listen.</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}
