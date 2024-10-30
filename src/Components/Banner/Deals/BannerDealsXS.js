import React from 'react'
import IconButton from '../../Button/IconButton'
import {ArrowRightGreen} from '../../../assets/Product/Blog/BlogItems.js'

function BannerDealsXS({navigationURL, textHover , newSale, textItemLeft, productSubTitle, productTitleUp, productTitleDrown , productPrice, bannerSourceURL}) {
    return (
        <div className={`flex  ${textItemLeft ? ' justify-end' : 'justify-start items-start'} min-h-[255px] max-w-[424px] border-2  overflow-hidden relative hover:border-sky-300 hover:border-opacity-50`}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerSourceURL} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
            </figure> 
            <div className={`flex  flex-col ${textHover ? 'text-white' : 'text-Gray90 gap-6'}   absolute text-left z-20 m-8 gap-3 `}>
                <div className=' flex flex-col  gap-4'>
                    { !newSale && <p className={`text-base align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear uppercase`}>{productSubTitle}</p> }
                    <h1 className={`text-[32px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear  `}>{productTitleUp}</h1>
                    <h1 className={`text-[32px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear  `}>{productTitleDrown}</h1>
                    { newSale && <p className={`text-base align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>Starting at <span className='text-xl font-medium leading-6'>{productPrice}</span></p> }
                </div>
                
                <IconButton 
                  sourceIcon ={ArrowRightGreen}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`bg-white text-Primary max-w-[162px] min-h-[45px] rounded-full justify-center `}
                />
            </div>
        </div>
      )
}

export default BannerDealsXS