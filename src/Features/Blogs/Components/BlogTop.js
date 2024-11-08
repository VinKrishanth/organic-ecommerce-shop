import React from 'react'
import {Filter} from '../../../assets/Blog/index.js'

function BlogTop() {
  return (
    <div className={`grid grid-cols-12 min-w-full gap-16`}>
        <div className={`col-span-4`}>
           <button className={` flex justify-center items-center text-sm font-semibold leading-5 tracking-normal align-top text-white min-h-11 min-w-40 rounded-full bg-Primary hover:bg-PrimaryHover transition-all duration-700 ease-linear`}>
              <span className='pr-2'>filter</span>
              <img src={Filter} alt='The filter source' className={`object-cover object-center scale-90`} />
           </button>
        </div>
        <div className={`flex justify-between items-center col-span-8`}>
            <div className={`flex justify-start items-center gap-2`}>
              <p className={`text-sm font-normal leading-6 tracking-normal cursor-pointer align-top text-Gray60 capitalize hover:text-Primary transition-all duration-700 ease-linear`}>Sort by:</p>
              <div className={`flex  cursor-pointer justify-center items-center min-w-[160px] min-h-10 border-2 text-center rounded-md text-sm tracking-normal leading-6 align-top font-normal text-Gray90 overflow-hidden selection:outline-none hover:outline-none focus:outline-none hover:border-Primary` }>
                 Latest 
              </div>
            </div>
            <div className={`flex justify-start items-start`}>
              <p className={`text-base font-normal leading-6 tracking-normal cursor-pointer align-top text-Gray60 capitalize hover:text-Primary transition-all duration-700 ease-linear`}><span className={`text-Gray90 font-medium`}>52</span> Results Found</p>
            </div>
        </div>
    </div>
  )
}

export default BlogTop