import React from 'react'
import Header from '../Containers/Header'
import Footer from '../Containers/Footer'
import HeroMain from '../Features/Home/Hero/HeroMain'
import PopularCategory from '../Features/Home/Popular/Category'

function Home() {
  return (
    <div>
      <Header />
      <HeroMain />
      <PopularCategory />
      <Footer />
    </div>
  )
}

export default Home