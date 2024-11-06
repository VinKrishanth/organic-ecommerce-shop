import React, { useState } from 'react'

function Items({sourceMain, sourceHover, sourceAlt, index , Title, ID}) {
    const [textHover, setTextHover]  = useState({
      mainHover: 0,
      subHover: false
    }); 

  return (
    <div 
        key={index}
        id={ID}
        className={`flex justify-start items-center gap-2 min-h-14  border-l-4  
          ${textHover.mainHover === index ? 'bg-Gray05 text-Gray90 border-Primary ' : 'bg-white text-Gray60 border-white '} 
          ${(textHover.subHover === index && textHover.mainHover !== index) && 'text-Gray90 bg-sky-300 border-textBlue' }
        `}
        onMouseOver={() => {setTextHover({
          mainHover: 0,
          subHover: index
        })}}
        onMouseOut={() => {setTextHover(
          {
            mainHover: 0,
            subHover: false
          }
        )}}
    >
        <div className='flex justify-center gap-2 items-center min-h-full pl-4'>
            {index === 0 ? (
              <img src={sourceHover} alt={sourceAlt} className='object-cover object-center min-h-6 min-w-6' />
            ): (
              <img src={textHover.subHover === index ?  sourceHover : sourceMain} alt={sourceAlt} className='object-cover object-center min-h-6 min-w-6' />
            )}
            <p className={`text-base tracking-normal leading-5 align-top text-left `}>{Title}</p>
        </div> 
    </div>
  )
}


export default Items