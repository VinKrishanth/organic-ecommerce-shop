import React, { useState } from 'react'
import PropType from 'prop-types'
import Stars from '../../Star/Stars'
import ProductNormalButton from './Components/ProductNormalButton'


function ProductNormal({sourceURL, sourceAlt, ProductName, ProductPrice, starCount}) {
 const [textHover, setTextHover] = useState(false);

  return (
    <div className={`flex justify-between items-center gap-2 m-16 border-2 rounded-md shadow-inner hover:border-Primary max-w-[424px] min-h-[116px] transition-all duration-700 ease-linear delay-150 p-0`}
        onMouseOver={()=>setTextHover(true)}
        onMouseOut={()=>setTextHover(false)}
    >
        <figure className={`min-h-full overflow-hidden rounded-lg`}>
            <img src={sourceURL} alt={sourceAlt} className={`object-cover object-center hover:scale-125 transition-all duration-700 ease-linear delay-150`} />
        </figure>
        <div className={`flex-grow flex-col flex justify-start  min-h-full transition-all duration-700 ease-linear delay-100 `}>
            <h1 className={`text-sm font-normal tracking-normal leading-6 align-top pl-4 ${textHover && 'text-Primary'}`}>{ProductName}</h1>
            {
                !textHover ? (
                    <>
                        <p className={`text-base font-medium tracking-normal leading-6 align-top pl-4 `}>{ProductPrice}</p>
                        <Stars 
                            starCount={starCount}
                            starStyle={'pl-4'}
                        />
                    </>
                ) : (
                    <ProductNormalButton  />
                )
            }
        </div>
    </div>
  )
}

ProductNormal.prototype = {
    sourceAlt: PropType.string.isRequired,
    sourceURL: PropType.string.isRequired,
    ProductName: PropType.string.isRequired,
    ProductPrice: PropType.string.isRequired,
    starCount: PropType.number.isRequired,
}

export default ProductNormal