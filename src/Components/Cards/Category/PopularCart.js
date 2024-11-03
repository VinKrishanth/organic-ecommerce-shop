import React, { useState } from 'react'
import PropType from 'prop-types'
import CardMotion from '../../Animation/CardMotion';

function PopularCart({ID, sourceURL, sourceAtl, productName}) {
  const [textHover, setTextHover] = useState();
  return (
    <div 
      id={ID} 
      className={`flex justify-start items-start max-w-52 2xl:min-h-52 py-4 border-[1px] rounded-lg shadow-md  ${textHover === ID ? 'text-Primary border-Primary  shadow-md shadow-softPrimary' : 'text-Gray90 '} transition-all duration-700 delay-100 ease-linear overflow-hidden relative`}
      onMouseOver={()=>{setTextHover(ID)}}
      onMouseOut={()=>{setTextHover(false)}}
    >
        <div className='flex-grow flex flex-col gap-4'>
          <figure className={`flex  justify-center items-center max-w-full min-h-full overflow-hidden`}>
              <img src={sourceURL} alt={sourceAtl} className={`object-cover object-center hover:scale-95 transition-all duration-700 delay-100 ease-linear cursor-pointer`} />
          </figure>
          <h2 className={`2xl:text-lg text-sm font-medium leading-6 capitalize align-top tracking-normal text-center cursor-pointer`}>{productName}</h2>
        </div>
      <CardMotion 
        isVisible={`${textHover === ID ?'visible' : 'hidden'}`}
      />
    </div>
  )
} 

PopularCart.prototype = {
  ID: PropType.string.isRequired,
  sourceAtl: PropType.string.isRequired,
  sourceURL: PropType.string.isRequired,
  productName: PropType.string.isRequired,
}

export default PopularCart