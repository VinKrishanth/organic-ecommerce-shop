import React from 'react'
import Header from '../Containers/Header'
import BannerSmall from '../Components/Banner/Deals/BannerDealsXS'
import {bannerCowMilk, bannerWaterDrink, bannerBreakFast} from '../assets/Product/Banner/BannerItems.js'

function Home() {
  return (
    <>
      <Header 
        toggleMenu={true}
      />
      <BannerSmall 
        key={1}
        bannerSourceURL={bannerCowMilk}
        newSale={true}
        productTitleUp={`100% Fresh`}
        productSubTitle={false}
        productTitleDrown={`Cow Milk`}
        productPrice={'$14.99'}
        textHover={true}
      />
      <BannerSmall 
        key={2}
        bannerSourceURL={bannerWaterDrink}
        newSale={false}
        productTitleUp={`Water &`}
        productSubTitle={`Drink Sale`}
        productTitleDrown={`Soft Drink`}
        productPrice={'$14.99'}
        textHover={false}
        textItemLeft={true}
      />
      <BannerSmall 
        key={3}
        bannerSourceURL={bannerBreakFast}
        newSale={false}
        productTitleUp={`quick`}
        productSubTitle={`100% Organic`}
        productTitleDrown={`Breakfast`}
        productPrice={'$14.99'}
        textHover={false}
      />

    </>
  )
}

export default Home