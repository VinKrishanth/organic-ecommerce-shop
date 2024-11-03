import React from 'react'
import Header from '../Containers/Header'
import Footer from '../Containers/Footer'
import HeroMain from '../Features/Home/Hero/HeroMain'
import PopularCategory from '../Features/Home/Popular/Category'
import LatestNews from '../Features/Home/Blog/LatestNews'
import  NewsLetter from '../Components/popup/NewsLetter'

function Home() {
  return (
    <div>
      <Header />
      <HeroMain />
      <PopularCategory />
      <NewsLetter />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default Home