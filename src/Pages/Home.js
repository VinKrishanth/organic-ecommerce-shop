import React from 'react'
import Header from '../Containers/Header'
// import NormalButton from '../Components/Cards/Product/ProductCard'
import BannerSmall from '../Components/Banner/Offer/NewSale'
// import NormalButton from '../Components/Cards/BIG/ProductBig'
import X from '../assets/Product/apple.svg'
import Y from '../assets/Product/blog-source.svg'
import {bannerOffer, bannerSale} from '../assets/Product/Banner/BannerItems.js'

function Home() {
  return (
    <>
      <Header 
        toggleMenu={true}
      />
      {/* <NormalButton 
        Price={'$120'}
        discountPrice={'$150'}
        offer={true}
        btnLabel={'sale 50 %'}
        cardSourceURL={X}
        viewRate={4}
        cardTitle={`Sri Lanka Apple`}
        productID={3}
      /> */}
      <BannerSmall 
        bannerSubTitle={`Sales of the Year`}
        bannerTitle={`sale off the week`}
        sourceBannerURL={bannerSale}
        offerDescription={true}
        newSaleDescription={false}
        key={1}
      />
      <BannerSmall 
        bannerSubTitle={`100% Organic`}
        bannerTitle={`Fruit & Vegetable`}
        sourceBannerURL={bannerOffer}
        offerDescription={false}
        newSaleDescription={true}
        key={2}
      />
    </>
  )
}

export default Home