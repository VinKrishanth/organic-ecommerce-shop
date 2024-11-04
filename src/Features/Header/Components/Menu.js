import React from 'react'
import {menuWhite , arrowWhite } from '../../../assets/Header/Nav/index.js'

function Menu() {
  return (
    <ul className={`flex justify-start items-center min-w-80 bg-Gray80 z-10`}>
        <figure className={`flex justify-center items-center min-h-16 min-w-16 bg-Primary cursor-pointer hover:bg-opacity-70 transition-all duration-75 ease-linear delay-75`}>
            <img 
                src={menuWhite} 
                alt='The navigation menu icon' 
                className={`object-cover object-center min-h-8 min-w-8`} 
            />
        </figure>
        <div className={`flex-grow flex justify-between items-center px-4 text-white`}>
            <p className={`text-base font-medium text-left lead6 tracking-normal align-top`}>All Categories</p>
            <figure className={`flex justify-center items-center min-h-5 min-w-5`}>
                <img 
                    src={arrowWhite} 
                    alt='The navigation menu icon' 
                    className={`object-cover object-center scale-110`} 
                />
            </figure>
        </div>
    </ul>
  )
}

export default Menu