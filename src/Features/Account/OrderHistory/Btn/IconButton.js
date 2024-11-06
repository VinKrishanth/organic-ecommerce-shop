import React, { useState } from 'react'

function IconButton({sourceNormal , sourceHover, index}) {
    const [textHover, setTextHover]  = useState(false);  
  return (
    <div 
        key={index}
        className={`flex justify-center items-center min-h-9 min-w-9 col-span-1 bg-Gray05 rounded-full`}
        onMouseOver={() => {setTextHover(true)}}
        onMouseOut={() => {setTextHover(false)}}
    >
        <button className={`text-base  align-top font-normal leading-6 tracking-normal `}>
            <img src={textHover ? sourceHover : sourceNormal} alt='The arrow icons' className='object-cover object-center' />
        </button>
    </div>
  )
}

export default IconButton