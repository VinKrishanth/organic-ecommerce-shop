import React, { useState } from 'react'
import HeartWhite from '../../assets/Icons/heart-white.svg'
import HeartBlack from '../../assets/Icons/heart-black.svg'
import HeartGreen from '../../assets/Icons/heart-green.svg'

function WishlistButton({onClick, ButtonHover, btnStyle}) {
  const [textHover, setTextHover] = useState(false);  
  return (
      <button 
          className={`flex justify-center items-center transition-all duration-300 ease-in-out delay-150 min-h-10 min-w-10 rounded-full border-2 bg-white ${ButtonHover  ? 'hover:bg-white shadow-transparent' : ' hover:bg-Primary '} ${btnStyle}`}
          onClick={onClick}
          onMouseOver={()=>(setTextHover(true))}
          onMouseOut={()=>(setTextHover(false))}
      >
        {
          ButtonHover ? (
            <img src={ (textHover) ? HeartGreen : HeartBlack} alt='' className={`object-contain object-center`} />
          ) : (

            <img src={ (textHover) ? HeartWhite : HeartBlack} alt='' className={`object-contain object-center`} />
          )
        }
      </button>
  )
}


export default WishlistButton