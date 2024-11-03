import React from 'react'
import Header from '../Containers/Header'
import Footer from '../Containers/Footer'
import HeroMain from '../Features/Home/Hero/HeroMain'
import PopularCategory from '../Features/Home/Popular/Category'
import LatestNews from '../Features/Home/Blog/LatestNews'
import  NewsLetter from '../Components/popup/NewsLetter'
import Testimonial from '../Features/Home/Client/Testimonial'
import Members from '../Features/Home/Client/Members'
import Products from '../Features/Home/Popular/Products'

function Home() {
  return (
    <div>
      <Header />
      <HeroMain />
      <PopularCategory />
      <Products />
      <NewsLetter />
      <LatestNews />
      <Members />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home