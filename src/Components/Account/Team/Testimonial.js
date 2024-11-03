import React, { useState } from 'react'
import Stars from '../../Star/Stars'
import {vectorArrow, vectorArrowBlue} from '../../../assets/Team/Member/index.js'
 
function Testimonial({reviewerName, reviewerJob, sourceURL , reviewDescription}) {
    const [textHover, setTextHover] = useState(false);
  return (
    <div 
        className={`flex flex-col justify-start items-start gap-8 p-8 border-2 max-w-[384px]  min-h-[254px] text-gray-700 relative hover:border-sky-500  hover:-translate-x-2 hover:scale-95 transition-all duration-700 delay-300 ease-linear bg-white`}
        onMouseOver={()=>{setTextHover(true)}}
        onMouseOut={()=>{setTextHover(false)}}
    >
        <div className='flex justify-center items-center min-w-8 min-h-6 cursor-pointer'>
            <img src={ textHover ? vectorArrowBlue : vectorArrow} alt='The review description' className={`object-cover object-center`} />
        </div>
        <div className={`tracking-normal leading-6 align-top`}>
            <p className={`text-sm font-normal cursor-pointer`}>{reviewDescription}</p>
        </div>
        <div className={`flex lg:flex-row flex-col lg:justify-between justify-end items-end lg:items-center gap-4 min-w-full`}>
            <div className={`flex justify-center items-center gap-4`}>
                <figure className='flex justify-center items-center max-w-14 max-h-14 border-2 rounded-full cursor-pointer'>
                    <img src={sourceURL} alt='The review description user source' className={`object-cover object-center min-h-full min-w-full`} />
                </figure>
                <div className={`text-left align-top leading-6 tracking-normal`}>
                    <h2 className={`text-base font-medium text-Gray90 cursor-pointer`}>{reviewerName}</h2>
                    <p className={`text-sm font-normal text-Gray40 cursor-pointer`}>{reviewerJob}</p>
                </div>
            </div>
            <div className='flex justify-end items-center'> 
                <Stars 
                    starCount={5}
                    viewCount={false}
                    starStyle={''}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonial