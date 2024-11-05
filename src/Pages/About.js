import React from 'react'
import Header from '../Containers/Header'
import Footer from '../Containers/Footer'
import Testimonial from '../Features/Home/Client/Testimonial'
import Members from '../Features/Home/Client/Members'
import AboutUs from '../Features/About/AboutUs'
import AboutMe from '../Features/About/AboutMe'
import Delivery from '../Features/About/Delivery'


function About() {
  return (
    <>
      <Header />
      <AboutUs />
      <Delivery />
      <AboutMe />
      <Members />
      <Testimonial />
      <Footer />
    </>
  )
}

export default About