import React from 'react'
import Header from '../Containers/Header'
// import NormalButton from '../Components/Cards/Product/ProductCard'
import BannerSmall from '../Components/Banner/Deals/BannerDeals.js'
// import NormalButton from '../Components/Cards/BIG/ProductBig'
import X from '../assets/Product/apple.svg'
import Y from '../assets/Product/blog-source.svg'
import {bannerOffer, bannerSale} from '../assets/Product/Banner/BannerItems.js'
import {bannerMeat, bannerFruit, bannerVegetableXS} from '../assets/Product/Banner/BannerItems.js'
import {bannerCowMilk, bannerWaterDrink, bannerBreakFast} from '../assets/Product/Banner/BannerItems.js'
import {bannerBestDealLeft , bannerBestDealRight} from '../assets/Product/Banner/BannerItems.js'
import {bannerSaleMonth} from '../assets/Product/Banner/BannerItems.js'

function Tets() {
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
          {/* <BannerSmall 
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
          /> */}
          <BannerSmall  
            key={1}
            bannerSourceURL={bannerMeat}
            productDiscount={false}
            bestSale={false}
            bannerSubTitle={`85% Fat Free`}
            bannerTitle={'Low-Fat Meat'}
            navigationURL={''}
            productDescription={'Started at'}
            productPrice={'$79.99'}
          />
          <BannerSmall  
            key={2}
            bannerSourceURL={bannerVegetableXS}
            productDiscount={true}
            bestSale={false}
            bannerSubTitle={`Best Deals`}
            bannerTitle={'Sale of the Months'}
            navigationURL={''}
            productDescription={false}
            productPrice={false}
          />
          <BannerSmall  
            key={3}
            bannerSourceURL={bannerFruit}
            productDiscount={false}
            bestSale={true}
            bannerSubTitle={`summer sale`}
            bannerTitle={'100% Fresh Fruit'}
            navigationURL={''}
            productDescription={'Up to'}
            productPrice={'64% OFF'}
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

      <BestDeal 
        bannerLeftSideSource={bannerBestDealLeft}
        bannerRightSideSource={bannerBestDealRight}
        bannerSubTitle={`Best Deals`}
        bannerTitleDown={`Deal of the Month`}
        bannerTitleUp={`Our Special Products`}
        navigationURL={``}
      />

      <BestDeal 
        bannerSource={bannerSaleMonth}
      />
        </>
      )
    }

export default Tets