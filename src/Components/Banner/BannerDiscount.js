import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'


function BannerDiscount({productDiscount, navigationURL, innerHeightWidth, bannerSource , subText, subTitle}) {
    return (
        <div className={`flex justify-center items-start ${innerHeightWidth ? innerHeightWidth : 'min-h-[345px] max-w-[424px] '} shadow-md rounded-xl overflow-hidden relative  hover:shadow-sky-200 transition-all duration-700 ease-linear delay-200`}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden absolute top-0 left-0`}>
               <img src={bannerSource} alt='The Product Banner' className={`object-cover object-center scale-125 ${innerHeightWidth} hover:opacity-75 transition-all duration-700 ease-linear`} />
            </figure>
            <div className={`flex  flex-col justify-center items-center text-Gray90 z-20 p-8 cursor-pointer`}>
                <h2 className={`text-sm align-top leading-6 tracking-normal font-medium cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center uppercase`}>{subTitle}</h2>
                <h1 className={`text-2xl font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}><span className='text-Warning pr-2 text-3xl'>{productDiscount}</span>Discount</h1>
                {subText && <p className={`text-sm align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center`}>{subText}</p> }
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