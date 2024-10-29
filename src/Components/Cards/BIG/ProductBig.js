import React from 'react'
import BigImage from './Components/BigImage';
import Stars from '../../../Components/Star/Stars'
import PriceText from '../../../Components/Text/PriceText'
import BigOffer from './Components/BigOffer';

function ProductBig() {
  return (
    <div className={`min-h-[654px]  max-w-[528px] border-2 rounded-lg shadow-md hover:border-sky-300 transition-all duration-500 ease-linear delay-100`}>
        <BigImage />
        <div className={`flex flex-col gap-2 justify-start items-center min-w-full min-h-[100px] pt-8 `}>
            <h2 className='text-lg font-normal leading-5 tracking-normal text-center align-top text-Primary hover:translate-x-2 transition-all duration-500 ease-linear delay-100'>Chinese cabbage</h2>
            <PriceText  
             Price={`$12`}
             discountPrice={`$24`}
             textSize={`text-2xl`}
            />
            <Stars 
              starCount={1}
              viewCount={524}
              starStyle={`hover:translate-x-2 transition-all duration-500 ease-linear delay-100`}
            />
        </div>
        <BigOffer />
    </div>

  )
}

export default ProductBig