import React, { useState } from 'react'
import PropTypes from'prop-types'

function TagInfo({index, SourceHoverURL,SourceURL, sourceAlt, Title, subTitle}) {
  const [textHover , setTextHover] = useState(false); 
  return (
    <ul key={index} className={`flex justify-center items-center gap-1 min-h-5 translate-x-0 transition-all duration-500 ease-linear delay-75 ${textHover && 'hover:translate-x-2 '}`}
        onMouseOver={()=>{setTextHover(true)}}
        onMouseOut={()=>{setTextHover(false)}}
    >
        <li className='text- min-w-5 min-h-5 cursor-pointer'>
            <img src={textHover ? SourceHoverURL : SourceURL} alt={sourceAlt} className='object-cover object-center transition-all duration-500 ease-linear delay-75' />
        </li>
        <li className='text-sm font-normal text-left align-top tracking-normal text-Gray50 pb-1'>{Title} <span className='text-Gray90'> {subTitle}</span></li>
    </ul>
  )
}

TagInfo.prototype = {
    index: PropTypes.number.isRequired,
    sourceAlt: PropTypes.string.isRequired,
    SourceURL: PropTypes.string.isRequired,
    SourceHoverURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
}

export default TagInfo