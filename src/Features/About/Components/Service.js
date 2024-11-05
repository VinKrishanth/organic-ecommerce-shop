import React, { useState } from 'react'
import FeatureDetailsUpdate from '../../../Components/Feature/Components/FeatureDetailsUpdate.js'

function Service() {
    const [textHover, setTextHover]  = useState(false); 
  return (
    <div className={`grid grid-cols-2 gap-2`}>
        {
            FeatureDetailsUpdate.map((item, index) => {
                return(
                    <div 
                        key={index} className={`flex justify-start items-center col-span-1 gap-4 border-2 rounded-xl p-4 cursor-pointer  ${textHover === index ? 'border-Primary' : 'border-white'}`}
                        onMouseOver={() => {setTextHover(index)}}
                        onMouseOut={() => {setTextHover(false)}}
                    >
                        <figure className={`flex justify-center items-center min-w-[72px] min-h-[72px] ${textHover === index ? 'bg-textBlue' : 'bg-textBright '} rounded-full`}>
                            <img src={textHover === index ?  item.sourceWhiteURL : item.sourceGreenURL} alt='The right icon' className={`object-cover object-center cursor-pointer`} />
                        </figure>
                        <div className={`flex justify-between items-start flex-col gap-2`}>
                            <h2 className={`text-lg text-Gray90 leading-6 tracking-normal align-top font-semibold hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}>{item.featureTitle}</h2>
                            <p className={`text-sm text-Gray50 leading-6 tracking-normal align-top font-normal hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}>{item.featureDescription}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Service