import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'
import {bannerMedium} from '../../assets/Product/Banner/BannerItems.js'
import TagsButton from '../Button/TagsButton.js'

function BannerBig({navigationURL}) {
    return (
        <div className={`flex justify-start items-center min-h-[600px] max-w-[872px] border-2 rounded-xl overflow-hidden relative hover:border-black hover:border-opacity-50`}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerMedium} alt='The Product Banner' className={`object-cover object-center hover:scale-110 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col gap-8 text-white absolute text-left z-20 pl-16`}>
                <div className='flex flex-col gap-6'>
                    <h1 className={`text-6xl font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4`}>Fresh & Healthy </h1>
                    <h1 className={`text-6xl font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4`}>Organic Food</h1>
                </div>
                <div className='flex flex-col justify-between border-l-4 pl-4 border-textBright min-h-[67px]'>
                  <div className='flex justify-start items-center gap-4'>
                    <h2 className={`text-xl align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>Sale up to</h2>
                    <TagsButton 
                        Type={`New`}
                        label={`30 % OFF`}
                        tagStyle={`text-xl min-h-9`}
                    />
                  </div>
                  <p className={`text-sm align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>Free shipping on all your order.</p>
                </div>
                <IconButton 
                  sourceIcon ={ArrowRightGreen}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`bg-white text-Primary max-w-[191px] min-h-[51px] rounded-full justify-center`}
                />
            </div>
        </div>
      )
    }

export default BannerBig