import React, { useContext } from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'
import {bannerMedium} from '../../assets/Product/Banner/BannerItems.js'
import TagsButton from '../Button/TagsButton.js'
import {UserContext} from '../../Features/Home/Hero/HeroMain'

function BannerBig({navigationURL}) {
  const {deviceSize} = useContext(UserContext);
    return (
        <div className={`flex justify-start items-center ${deviceSize ? '' : '2xl:min-h-[600px] 2xl:max-w-[872px] '} rounded-xl overflow-hidden relative hover:border-black hover:border-opacity-50`}>
            <figure className={`max-w-full max-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerMedium} alt='The Product Banner' className={`object-cover object-center hover:scale-110 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col 2xl:gap-8 sm:gap-4 gap-2 text-white absolute text-left z-20 2xl:pl-16  2xl:scale-100 sm:scale-75 scale-50 2xl:translate-x-0 2xl:translate-y-0  md:translate-x-16 md:-translate-y-8 sm:translate-x-2 -translate-x-12 -translate-y-4`}>
                <div className='flex flex-col gap-6'>
                    <h1 className={`2xl:text-6xl sm:text-5xl text-3xl font-semibold tracking-normal  align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4 sm:max-w-[70%]`}>Fresh & Healthy Organic Food</h1>
                </div>
                <div className='flex flex-col justify-between 2xl:border-l-4 border-l-2 pl-4 border-textBright min-h-[67px]'>
                  <div className='flex justify-start items-center 2xl:gap-4 -translate-y-2'>
                    <h2 className={`text-xl align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>Sale up to</h2>
                    <TagsButton 
                        Type={`New`}
                        label={`30 % OFF`}
                        tagStyle={`xl:text-xl 2xl:min-h-9 2xl:scale-100 md:scale-75 scale-50`}
                    />
                  </div>
                  <p className={`2xl:text-sm text-base align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>Free shipping on all your order.</p>
                </div>
                <IconButton 
                  sourceIcon ={ArrowRightGreen}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`bg-white text-Primary max-w-[191px] min-h-[51px] rounded-full justify-center md:scale-100 sm:scale-90 scale-50`}
                />
            </div>
        </div>
      )
    }

export default BannerBig