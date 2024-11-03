import React, { useContext } from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'
import {UserContext} from '../../Features/Home/Hero/HeroMain.js'

function BannerSM({navigationURL , deal, bannerSourceURL}) {
  const {deviceSize} = useContext(UserContext);
    return (
        <div className={`flex justify-start items-start ${deviceSize ? 'min-w-full min-h-56' : '2xl:min-h-[228px] 2xl:max-w-[423px]'}  rounded-xl overflow-hidden relative hover:border-sky-300 hover:border-opacity-50  2xl:mt-2`}>
            <figure className={`max-w-full max-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerSourceURL} alt='The Product Banner' className={`object-cover object-center  hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            {
              !deal && (
                <div className={`flex  flex-col   text-Gray60 absolute  text-left z-20 2xl:m-8  2xl:gap-2 sm:gap-2 2xl:scale-100 2xl:translate-x-0 2xl:translate-y-0 sm:translate-x-4 sm:translate-y-4 -translate-x-6 -translate-y-2 xl:scale-100 sm:scale-90 scale-50 `}>
                  <h1 className={`2xl:text-sm text-xs font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-Gray90 uppercase`}>Summer Sale</h1>
                  <h1 className={`2xl:text-3xl text-2xl font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-Gray90 `}>75% OFF</h1>
                  <p className={`2xl:text-base text-sm align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear 2x:py-2 py-0  min-w-40`}>Only Fruit & Vegetable</p>
                  
                  <IconButton 
                    sourceIcon ={ArrowRightGreen}
                    title={`Shop now`}
                    navigationURL = {navigationURL}
                    btnStyle= {`text-Primary rounded-full`}
                  />
                </div>
              )
            }
            {
              deal && (
                <div className={`min-h-full  flex justify-center items-center absolute z-20 top-0 2xl:p-8 2xl:scale-100 sm:scale-90 scale-50 sm:translate-y-0 sm:translate-x-0 -translate-y-6 -translate-x-16`}>
                  <div className={`flex  flex-col justify-center items-center text-white 2xl:pt-10  2xl:px-8 2xl:gap-4  p-4 gap-2`}>
                    <h2 className={`text-sm font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear  uppercase`}>Deal</h2>
                    <h1 className={`2xl:text-3xl text-xl font-semibold tracking-normal 2xl:leading-10 leading-6 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center min-w-56`}>Special Products Deal of the Month</h1>
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

        </div>
      )
}

export default BannerSM