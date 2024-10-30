import React from 'react'
import Header from '../Containers/Header'
import BestDeal from '../Components/Banner/Best/BestDeal'
import {bannerBestDealLeft , bannerBestDealRight} from '../assets/Product/Banner/BannerItems.js'

function Home() {
  return (
    <>
      <Header 
        toggleMenu={true}
      />

      <BestDeal 
        bannerLeftSideSource={bannerBestDealLeft}
        bannerRightSideSource={bannerBestDealRight}
        bannerSubTitle={`Best Deals`}
        bannerTitleDown={`Deal of the Month`}
        bannerTitleUp={`Our Special Products`}
        navigationURL={``}
      />
    </>
  )
}

export default Home