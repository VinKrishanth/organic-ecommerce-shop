import React, { useState } from 'react'
import SocialMediaItems from './Components/SocialMediaItems';
import PropTypes from 'prop-types'

function TeamCards({memberName, memberJob, sourceURL}) {
  const [textHover, setTextHover] = useState(false);
  const [textHover2, setTextHover2] = useState(false);
  return (
    <div 
      className={`flex flex-col justify-start items-start max-w-[312px] min-h-[368px] border-2 rounded-md m-10 transition-all duration-1000 ease-linear delay-100 shadow ${textHover || textHover2 ? 'border-sky-300' : ' border-white'}`}
    >
        <div className={'flex min-w-full overflow-hidden relative '}
         onMouseOver={()=>{setTextHover(true)}}
         onMouseOut={()=>{setTextHover(false)}}
        >
            <figure className={`flex justify-center items-center hover:scale-105 transition-all duration-500ease-linear z-10`}>
               <img src={sourceURL} alt='' className='object-cover object-center'  />
            </figure>
            {
              textHover && (
                <div className='flex justify-center items-center absolute min-w-full min-h-full z-30  bg-black bg-opacity-50 rounded-md cursor-pointer  transition-all duration-1000 ease-linear delay-100'>
                  <SocialMediaItems />
                </div>
              )
            }
        </div>
        <div className={`flex-grow flex flex-col justify-center items-center min-w-full gap-2 cursor-pointer`}
          onMouseOver={()=>{setTextHover2(true)}}
          onMouseOut={()=>{setTextHover2(false)}}
        >
           <h2 className={`text-lg font-medium tracking-normal text-left align-top leading-5 cursor-pointer text-Gray90 capitalize hover:translate-x-1 transition-all duration-500 ease-linear`}>{memberName}</h2>
           <p className={`text-sm font-normal tracking-normal leading-5 text-left align-top text-Gray50 cursor-pointer hover:translate-x-1 transition-all duration-500 ease-linear`}>{memberJob}</p>
        </div>
    </div>
  )
}

TeamCards.propTypes = {
  memberName : PropTypes.string.isRequired,
  memberJob : PropTypes.string.isRequired,
  sourceURL : PropTypes.string.isRequired,
}

export default TeamCards