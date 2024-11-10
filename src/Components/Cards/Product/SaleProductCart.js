import React, { useState } from 'react'
import PropType from 'prop-types'
import Stars from '../../../Components/Star/Stars';

function SaleProductCart({mainSource, index, productName, discountPrice, Price, startCount}) {
    const [textHover, setTextHover] = useState(false); 
    return (
        <div 
            key={index}
            className={'flex justify-start items-start min-w-full border-2  max-h-28 rounded-md hover:border-Primary transition-all duration-700 ease-linear delay-100 text-xs cursor-pointer'}
            onMouseOut={()=>{setTextHover(false)}}
            onMouseOver={()=>{setTextHover(true)}}
        >
            <div className={`flex justify-between items-center gap-4 min-h-full min-w-full`}>
                <figure 
                    className={`flex justify-center items-center cursor-pointer min-h-[102px] max-w-[102px] overflow-hidden`}
                >
                    <img src={mainSource} alt='The Filter source' className={`object-cover object-center hover:scale-110 transition-all duration-700 delay-100 ease-linear`} />
                </figure>
                <div className={`flex flex-col justify-between items-start flex-grow`}>
                    <h2 className={`text-sm font-normal leading-6 tracking-normal align-top text-left  ${textHover ? 'text-Primary' : 'text-Gray70'}`}>{productName}</h2>
                    <p className={`text-base font-medium leading-6 tracking-normal align-top text-left text-Gray90`}>{Price}<span className={`pl-2 text-Gray40 line-through`}>{discountPrice}</span></p>
                    <div className={`flex justify-start items-center scale-75 -translate-x-4 hover:opacity-75 transition-all duration-700 delay-75 ease-linear` }>
                            <Stars  starCount={startCount} />
                    </div>
                </div>
            </div>
        </div>
    )
}

SaleProductCart.prototype = {
    mainSource: PropType.string.isRequired,
    index: PropType.number.isRequired,
    productName: PropType.string.isRequired,
    discountPrice: PropType.string.isRequired,
    Price: PropType.string.isRequired,
    Price: PropType.string.isRequired,
    starCount: PropType.number.isRequired
}

export default SaleProductCart