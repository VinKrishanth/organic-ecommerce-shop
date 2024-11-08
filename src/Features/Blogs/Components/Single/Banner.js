import React from 'react'
import {bannerSource} from '../../../../assets/Blog/Single/index.js'
import IconButton from '../../../../Components/Button/IconButton'
import {arrowWhite} from '../../../../assets/Header/Nav/index.js'

function Banner() {
  return (
    <div className={`flex justify-start items-start min-w-full min-h-64 bg-Gray90 col-span-1 pt-16 relative overflow-hidden`}>
        <div className={`flex justify-start items-start z-10 px-16 gap-16 `}>
          <div className='flex flex-col justify-start items-start gap-4'>
            <div className={`flex flex-col min-w-full gap-2`}>
                <h2 className={`text-sm font-medium leading-4 tracking-wider align-top text-justify cursor-pointer text-Gray40 uppercase hover:translate-x-2 transition-all duration-500 ease-linear delay-75`}>summer sales</h2>
                <h1 className={`text-4xl font-semibold  tracking-normal align-top text-justify cursor-pointer text-white capitalize hover:translate-x-2 transition-all duration-500 ease-linear delay-75`}>Fresh fruit</h1>
            </div>
            <IconButton 
                sourceIcon={arrowWhite} 
                title={`Shop Now `} 
                navigationURL={``} 
                btnStyle={`bg-Primary text-white text-sm rounded-full p-2 px-4`} 
                iconShow={true}
              />
          </div>
          <div className={`flex flex-col justify-center items-center min-h-24 min-w-24 rounded-full bg-Gray90 gap-[2px] cursor-pointer hover:bg-opacity-75 transition-all duration-700 ease-linear`}>
              <h2 className={`text-sm font-semibold leading-4 tracking-wider align-top text-justify cursor-pointer text-Gray30 uppercase`}>Up to</h2>
              <h1 className={`text-base font-medium leading-4 tracking-wider align-top text-justify cursor-pointer text-Warning `}>56%</h1>
              <p className={`text-sm font-medium leading-4 tracking-wider align-top text-justify cursor-pointer text-Gray40 capitalize`}>off</p>
          </div>
        </div>
        <figure className={`flex justify-center items-center absolute top-0 left-0 `}>
            <img src={bannerSource} alt='The banner source' className='object-contain object-center scale-150 ' />
        </figure>
    </div> 
  )
}

export default Banner