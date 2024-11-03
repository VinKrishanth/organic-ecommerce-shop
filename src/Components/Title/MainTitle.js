import React from 'react'
import IconButton from '../Button/IconButton'
import {ArrowRightGreen} from '../../assets/Product/Blog/BlogItems.js'
function MainTitle({titleCenter, Title}) {
  return (
    <div className={`flex ${titleCenter? 'justify-center' : 'justify-between'} items-center xl:py-8 sm:py-6 py-4`}>

        {
          titleCenter ? (
            <>
              <h1 className='2xl:text-4xl sm:text-2xl md:text-3xl text-lg font-semibold tracking-normal leading-5 align-top hover:translate-x-2 hover:scale-110 duration-700 ease-linear delay-100 cursor-pointer text-center text-Primary'>{Title}</h1>
            </>
          ) : (
            <>
              <h1 className='2xl:text-4xl sm:text-2xl md:text-3xl text-lg font-semibold tracking-normal leading-5 align-top hover:translate-x-2 hover:scale-110 duration-700 ease-linear delay-100 cursor-pointer'>{Title}</h1>
              <div className={`scale-100 hover:scale-110`}>
                  <IconButton 
                      sourceIcon={ArrowRightGreen} 
                      title={'View All'}
                      navigationURL={`/`}
                      btnStyle={`text-base text-Primary`}
                  />
              </div>
            </>
          ) 
        }
    </div>
  )
}

export default MainTitle