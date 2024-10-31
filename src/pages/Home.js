import React from 'react'
import "../css/home.css"
import OurProcess from './OurProcess'
import About from './About'
import Projects from './Projects'
import Testimonial from './Testimonial'
import NavImages from './NavImages'
import Footer from '../components/Footer'

export default function Home (){


  return (
    <>
    <NavImages/>
    <About/>
    <OurProcess/>
    <Projects/>
    <Testimonial />
    <Footer />
    </>
  )
}


