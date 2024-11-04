import React from 'react'
import {PhoneCallGreen} from '../../../assets/Header/Nav/index.js'

function Call() {
  return (
    <div className={`flex justify-start items-center gap-4`}>
        <img 
            src={PhoneCallGreen} 
            alt='The customer service icon' 
            className={`object-cover object-center min-w-10 min-h-10 hover:scale-90 transition-all duration-700 ease-linear cursor-pointer`} 
        />
        <div className={`flex justify-start items-start flex-col gap-2 tracking-normal leading-6 align-top`}>
            <p className={`text-sm font-normal text-Gray40 hover:scale-90 transition-all duration-700 ease-linear cursor-pointer hover:text-Primary`}>Customer Services</p>
            <h2 className={`text-xl font-medium text-Gray90 hover:scale-90 transition-all duration-700 ease-linear hover:text-Primary`}>(+94 773-235-540)</h2>
        </div>
    </div>
  )
}

export default Call