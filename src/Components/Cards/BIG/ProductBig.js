import React, { useState } from 'react'
import BigImage from './Components/BigImage';
import Stars from '../../../Components/Star/Stars'
import PriceText from '../../../Components/Text/PriceText'
import BigOffer from './Components/BigOffer';

function ProductBig() {
  const [textHover, setTextHover] = useState(false);
  return (
    <div 
      className={`sm:min-w-full sm:min-h-full   border-2  shadow-md hover:border-Primary hover:shadow-Primary transition-all duration-500 ease-linear delay-100 pb-6 `}
      onMouseOver={()=>{setTextHover(true)}}
      onMouseOut={()=>{setTextHover(false)}}
    >
        <BigImage 
          textHoverPro={textHover}
        />
        <div className={`flex flex-col sm:gap-2 gap-1 justify-start items-center min-w-full sm:min-h-[100px] sm:pt-8 sm:scale-100  scale-90 sm:translate-y-4 -translate-y-4  pt-4`}>
            <h2 className='sm:text-lg font-normal leading-5 tracking-normal text-center align-top text-Primary hover:translate-x-2 transition-all duration-500 ease-linear delay-100'>Chinese cabbage</h2>
            <PriceText  
             Price={12}
             discountPrice={`$24`}
             textSize={`sm:text-2xl`}
            />
            <Stars 
              starCount={5}
              viewCount={524}
              starStyle={`hover:translate-x-2 transition-all duration-500 ease-linear delay-100`}
              starSize={true}
            />
        </div>
        <BigOffer />
    </div>

  )
}

export default ProductBig