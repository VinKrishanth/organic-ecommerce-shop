import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'
import {bannerVegetable} from '../../assets/Product/Banner/BannerItems.js'

function BannerSM({navigationURL}) {
    return (
        <div className={`flex justify-start items-start min-h-[228px] max-w-[423px] border-2 rounded-xl overflow-hidden relative hover:border-sky-300 hover:border-opacity-50`}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerVegetable} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col  text-Gray60 absolute text-left z-20 m-8 gap-2 `}>
                <h1 className={`text-sm font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-Gray90 uppercase`}>Summer Sale</h1>
                <h1 className={`text-[28px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-Gray90 `}>75% OFF</h1>
                <p className={`text-base align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear py-2`}>Only Fruit & Vegetable</p>
                
                <IconButton 
                  sourceIcon ={ArrowRightGreen}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`text-Primary rounded-full`}
                />
            </div>
        </div>
      )
}

export default BannerSM