import React, { useState } from 'react'

function Gallery({sourceURL, index}) {
  const [textHover, setTextHover] = useState();

  return (
    <div key={index} className={`flex justify-start items-start text-xs`}>
        <figure 
          className={`flex justify-center items-center w-[100px] h-[100px]  border-2 border-white hover:border-sky-400 overflow-hidden rounded-md transition-all duration-500 delay-100 cursor-pointer`}
          onMouseOver={()=>{{setTextHover(index)}}}
          onMouseOut={()=>{{setTextHover(false)}}}
        >
            <img src={sourceURL} alt='The our gallery source' className={`object-cover object-center rounded-xl scale-150 ${textHover === index && 'hover:opacity-75 transition-all duration-500 delay-75 ease-linear'}`} />
        </figure>
    </div>
  )
}

export default Gallery