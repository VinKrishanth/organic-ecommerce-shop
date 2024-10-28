import React, { useState } from 'react'
import CloseNormal from '../../assets/Icons/close-hover.svg'
import CloseHOver from '../../assets/Icons/close-normal.svg'

function CloseButton({onClick}) {
    const [textHover, setTextHover] = useState(false);
      return (
        <button 
          className={`flex justify-center items-center transition-all duration-300 ease-in-out delay-75 min-h-6 min-w-6 `}
          onClick={onClick}
          onMouseOver={()=>(setTextHover(true))}
          onMouseOut={()=>(setTextHover(false))}
        >
          <img src={textHover? CloseNormal: CloseHOver} alt='' className={`object-contain object-center`} />
        </button>
      )
}

export default CloseButton