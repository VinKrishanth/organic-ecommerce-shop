import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRight} from '../../assets/Product/Blog/BlogItems.js'
import {freshMilk} from '../../assets/Product/Banner/BannerItems.js'

function BannerSmall({productTitle, productPrice, navigationURL}) {

  return (
    <div className={`flex justify-start items-center min-h-[400px] max-w-[536px] border-2 rounded-xl overflow-hidden relative hover:border-black hover:border-opacity-50`}>
        <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
           <img src={freshMilk} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
        </figure>
        <div className={`flex  flex-col gap-4 text-white absolute text-left z-20 pl-8`}>
            <h1 className={`text-[40px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>{productTitle}</h1>
            <p className={`text-base align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>starting at <span className='text-lg leading-6'>{productPrice}</span></p>
            
            <IconButton 
              sourceIcon ={ArrowRight}
              title={`Shop now`}
              navigationURL = {navigationURL}
              btnStyle= {`bg-Primary min-w-[162px] min-h-[45px] rounded-full`}
            />
        </div>
    </div>
  )
}

export default BannerSmall