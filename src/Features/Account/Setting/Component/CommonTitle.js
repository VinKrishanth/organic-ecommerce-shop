import React from 'react'
import {Link} from 'react-router-dom'

function CommonTitle({TitleName, textStyle, buttonTitle, subTitle}) {
  return (
    <div className={`flex flex-col justify-between items-center min-w-full`}>
        <div className='flex justify-between items-center min-w-full p-8 border-b-2 ' >
          <div className={`flex justify-start items-center`}>
            <h1 className={`text-xl font-medium text-left align-top tracking-normal leading-6 text-Gray90 cursor-pointer ${textStyle}`}>{TitleName}</h1>
             {
              subTitle && (
                <ul className={`flex list-disc pl-8 gap-8`}>
                  <li className={`text-sm font-normal leading-6 tracking-normal text-Gray70 text-left hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}> April 24, 2021</li>
                  <li className={`text-sm font-normal leading-6 tracking-normal text-Gray70 text-left hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}> 3 products</li>
                </ul>
              )
             }
          </div>
          {buttonTitle && (
            <Link to='/organic-ecommerce-shop/my-account/order-history'>
                <button className={`text-base font-medium align-top leading-6 tracking-normal text-Primary hover:text-PrimaryHover transition-all duration-700 ease-linear delay-100 cursor-pointer`}>{buttonTitle}</button>
            </Link>
          ) }
        </div>
    </div> 

  )
}

export default CommonTitle