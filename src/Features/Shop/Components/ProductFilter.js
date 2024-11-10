import React from 'react'
import CategoryData from './Filter/CategoryData'
import BannerDiscount from '../../../Components/Banner/BannerDiscount'
import {bannerSource} from '../../../assets/Shop/index.js'
import Tags from './Filter/Tags.js'
import Rating from './Filter/Rating.js'
import ProductSale from './Filter/ProductSale.js'

function ProductFilter() { 

  return (
    <div className={`flex justify-start items-start col-span-3`}>
        <div className={`flex flex-col justify-start items-start min-w-full`}> 
           <CategoryData />
           <Rating />
           <Tags />
           <div className={`flex min-w-full justify-start items-center mt-8`}>
                <BannerDiscount 
                    innerHeightWidth={`min-h-[295px] min-w-full`}
                    bannerSource={bannerSource}
                    subText={`on your first order`}
                    Title={``}
                    productDiscount={`79%`}
                />
           </div>
          <ProductSale />
        </div>
    </div>
  )
}

export default ProductFilter