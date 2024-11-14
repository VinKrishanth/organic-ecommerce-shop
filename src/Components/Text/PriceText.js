import React from 'react'

function PriceText({textSize, Price, discountPrice}) {
  Price = parseFloat(Price).toFixed(2);
  return (
    <>
      <p className={`${textSize ? textSize: 'text-base'} font-medium leading-6 align-top tracking-normal text-Gray90 cursor-pointer hover:translate-x-2 transition-all duration-500 ease-linear`}>
        ${parseFloat(Price).toFixed(2)}
        {discountPrice && (
          <span className='line-through pl-2 text-Gray40'>
           ${parseFloat(discountPrice).toFixed(2)}
          </span>
        )}  
      </p>
    </>
  )
}

export default PriceText