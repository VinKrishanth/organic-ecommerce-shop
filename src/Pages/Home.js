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
import Banner from '../Features/Home/Banner/Banner'
import HotDeal from '../Features/Home/Popular/HotDeal'
import HeroDefault from '../Features/Home/Hero/HeroDefault'
import HeroGallery from '../Features/Home/Hero/Components/HeroGallery.js'

function Home() {
  return (
    <div>
      <Header />
      <HeroDefault 
        HeroSourceTitle={HeroGallery} 
        mainHeading={`Fresh & Healthy Organic Food`} 
        subHeading={`48%`}
      />
      <PopularCategory />
      <Products />
      <NewsLetter />
      <Banner/>
      <HotDeal />
      <HeroMain />
      <LatestNews />
      <Members />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home