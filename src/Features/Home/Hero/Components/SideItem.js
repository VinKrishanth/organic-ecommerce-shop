import React, { useState } from 'react'
import PropType from 'prop-types'

function SideItem({ID, sourceMainURL, sourceHoverURL, Title, onClick}) {
  const [textHover, setTextHover]  = useState(false);

  return (
    <li 
      key={ID}
      id={ID}
      className={`flex justify-start items-center min-h-14 min-w-full gap-4 p-4 text-Gray90 bg-white hover:text-white hover:bg-Primary transition-all duration-400 ease-linear `}
      onMouseOver={() => {setTextHover(true)}}
      onMouseOut={() => {setTextHover(false)}}
      onClick={onClick}
    >
        <figure className='flex justify-center items-center max-w-6 max-h-6'>
            <img src={textHover ?  sourceHoverURL : sourceMainURL } alt={Title} className={'object-cover object-center min-h-full min-w-full'} />
        </figure>
        <h2 className={`text-sm font-normal leading-6 tracking-widest align-top text-left `}>{Title}</h2>
    </li>
  )
}

SideItem.prototype = {
  ID: PropType.string.isRequired,
  sourceHoverURL: PropType.string.isRequired,
  sourceMainURL: PropType.string.isRequired,
  Title: PropType.string.isRequired,
}

export default SideItem