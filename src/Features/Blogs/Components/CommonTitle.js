import React, { useState } from 'react'

function CommonTitle({index, blogCount, Title, ID}) {
  const [textHover, setTextHover] = useState(false);
  return (
    <div 
      id={ID}
      className={`flex justify-between items-start min-w-full text-sm font-normal leading-6 tracking-normal  align-top text-left col-span-1`}
      onMouseOver={()=>{setTextHover(index)}}
      onMouseOut={()=>{setTextHover(false)}}
    >
        <h2 className={` ${textHover === index ? 'text-Primary' : 'text-Gray90'} cursor-pointer hover:scale-110  hover:translate-x-1 transition-all duration-500 ease-linear`}>{Title}</h2>
        <p className={`${textHover === index? 'text-Primary' : 'text-Gray50'} cursor-pointer hover:scale-110  hover:translate-x-1 transition-all duration-500 ease-linear`}>({parseInt(blogCount)})</p>
    </div>
  )
}

export default CommonTitle