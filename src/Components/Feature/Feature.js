import React, { useContext, useState }  from 'react'
import FeatureDetails from './Components/FeatureDetails.js'
import {UserContext} from '../../Features/Home/Hero/HeroMain'

function Feature() {
    const {deviceSize} = useContext(UserContext);
    const [textHover, setTextHover] = useState(false);
  return (
    <div className={`flex justify-between items-center ${deviceSize ? '' : 'min-h-28 '} 2xl:border-2 rounded-xl py-8 2xl:px-5 px-0`}>
       <div className={`grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3`}>
            {
                FeatureDetails.map((item , index) => {
                    return(
                        <div 
                            key={index} className={`col-span-1  ${item.isBorderRight && '2xl:border-r-2'} 2xl:py-0 my-4 sm:px-4`}
                        >
                            <div  
                                className={`flex justify-center items-center gap-4 px-8 2xl:border-0 border-2   ${textHover === index ? 'border-Primary' : 'border-Gray90'} min-h-32 rounded-xl transition-all duration-700 ease-linear delay-200 `}
                                onMouseOver={()=>{setTextHover(index)}}
                                onMouseOut={()=>{setTextHover(false)}}
                            >
                                <figure className={`flex justify-center items-center max-h-12 max-w-12 `}>
                                    <img src={item.sourceGreenURL} alt={item.sourceAlt} className={`min-w-full min-h-full object-cover object-center hover:scale-110 transition-all duration-700 ease-linear delay-100`} />
                                </figure>
                                <div className={`flex  flex-col justify-start items-start gap-2`}>
                                    <h2 className={`text-base font-semibold leading-5 tracking-normal align-top text-Gray90 hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}>{item.featureTitle}</h2>
                                    <p className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray50 hover:translate-x-2 transition-all duration-700 ease-linear delay-100`}>{item.featureDescription}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
       </div>
    </div>
  )
}

export default Feature