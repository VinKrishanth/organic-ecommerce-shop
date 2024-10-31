import React  from 'react'
import FeatureDetails from './Components/FeatureDetails.js'

function Feature() {
  return (
    <div className={`flex justify-between items-center max-w-[1320px]  min-h-[112px] border-2 rounded-xl py-8 px-5`}>
       {
        FeatureDetails.map((item , index) => {
            return(
                <div key={index} className={`flex justify-center items-center gap-4 px-8 ${item.isBorderRight && 'border-r-[1px] border-r-Gray40'}`}>
                    <figure className={`flex justify-center items-center min-h-12 min-w-12 `}>
                        <img src={item.sourceBlackURL} alt={item.sourceAlt} className={`min-w-full min-h-full object-cover object-center hover:scale-110 transition-all duration-700 ease-linear delay-100`} />
                    </figure>
                    <div className={`flex  flex-col justify-start items-start gap-2`}>
                        <h2 className={`text-base font-semibold leading-5 tracking-normal align-top text-Gray90 hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}>{item.featureTitle}</h2>
                        <p className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray50 hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}>{item.featureDescription}</p>
                    </div>
                </div>
            )
        })
       }
    </div>
  )
}

export default Feature