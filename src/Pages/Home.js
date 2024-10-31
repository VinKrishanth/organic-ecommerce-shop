import React from 'react'
import Header from '../Containers/Header'
import BestDeal from '../Components/Banner/Best/BestDealXS.js'
import {bannerSaleMonth} from '../assets/Product/Banner/BannerItems.js'

function Home() {
  return (
    <>
      <Header 
        toggleMenu={true}
      />

      <BestDeal 
        bannerSource={bannerSaleMonth}
      />
    </>
  )
}

export default Home