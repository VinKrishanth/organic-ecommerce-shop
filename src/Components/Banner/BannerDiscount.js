import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'
import {bannerDiscount} from '../../assets/Product/Banner/BannerItems.js'


function BannerDiscount({productDiscount, navigationURL}) {
    return (
        <div className={`flex justify-center items-start min-h-[345px] max-w-[424px] border-2 rounded-xl overflow-hidden relative hover:border-black hover:border-opacity-50 `}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerDiscount} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col justify-center items-center gap-3 text-Gray90 absolute text-left z-20 pt-4`}>
                <p className={`text-sm align-top leading-6 tracking-normal font-medium cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center uppercase`}>Yearly Sale</p>
                <h1 className={`text-4xl font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}><span className='text-Primary'>{productDiscount}</span>Discount</h1>
                <p className={`text-sm align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center`}>on all your order, Free Shipping and  30 days <br></br> money-back guarantee</p>
                <IconButton 
                  sourceIcon ={ArrowRightGreen}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                />
            </div>
        </div>
      )
    }

export default BannerDiscount