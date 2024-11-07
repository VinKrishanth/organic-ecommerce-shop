import React, { useState } from 'react'

function Items({sourceMain, sourceHover, sourceAlt, index , Title, ID , NavigationURL, Location, onClick}) {
    const [textHover, setTextHover]  = useState(false); 
  return (
    <div 
        key={index}
        id={ID}
        className={`flex justify-start items-center gap-2 min-h-14  border-l-4  cursor-pointer ${NavigationURL === Location ? 'bg-Gray05 text-Gray90 border-Primary ' : 'bg-white text-Gray60 border-white '}  ${(textHover ) && 'hover:text-Gray90 hover:bg-sky-300 hover:border-textBlue' }`}
        onMouseOver={() => {setTextHover(index)}}
        onMouseOut={() => {setTextHover(false)}}
        onClick={onClick}
    >
        <div className='flex justify-center gap-2 items-center min-h-full pl-4'>
            {Location === NavigationURL ? (
              <img src={sourceHover} alt={sourceAlt} className='object-cover object-center min-h-6 min-w-6' />
            ): (
              <img src={textHover === index ?  sourceHover : sourceMain} alt={sourceAlt} className='object-cover object-center min-h-6 min-w-6' />
            )}
            <p className={`text-base tracking-normal leading-5 align-top text-left `}>{Title}</p>
        </div> 
    </div>
  )
}


export default Items