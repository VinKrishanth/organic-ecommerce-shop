import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRight} from '../../assets/Product/Blog/BlogItems.js'
import {bannerXL} from '../../assets/Product/Banner/BannerItems.js'

function BannerBigXL({navigationURL}) {
    return (
        <div className={`flex justify-end items-center min-h-[358px] max-w-[1320px] border-2 rounded-xl overflow-hidden relative hover:border-black hover:border-opacity-50 `}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerXL} alt='The Product Banner' className={`object-cover object-center hover:scale-110 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col gap-4 text-white absolute text-left z-20 pr-32 `}>
                <h2 className={`text-base font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4uppercase`}>Summer Sale</h2>
                <h1 className={`text-[40px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4 text-textWaring`}>37% <span className='text-white'> OFF</span></h1>
                <p className={`text-base align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear max-w-[400px] text-Gray30`}>Free on all your order, Free Shipping and  30 days money-back guarantee</p>
                <IconButton 
                  sourceIcon ={ArrowRight}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`bg-Primary min-w-[162px] min-h-[51px] max-w-[192px] rounded-full`}
                />
            </div>
        </div>
      )
}

export default BannerBigXL