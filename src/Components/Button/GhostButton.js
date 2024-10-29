import React, { useState } from 'react'
import BagWhite from '../../assets/Icons/bag-white.svg'
import BagBlack from '../../assets/Icons/bag-black.svg'

function GhostButton({onClick ,minHight, minWidth, textSize, label, textHover, btnStyle}) {
    const [buttonHover, setButtonHover] = useState(false);
    const CustomerStyle = {
        smBtnFull: `${minWidth ? minWidth: 'min-w-[102px]'}  ${minHight ? minHight : 'min-h-8'} ${textSize ? textSize : 'text-xs'}  bg-HardPrimary bg-opacity-10  
        ${textHover ? 'text-black hover:bg-Primary hover:text-white ' : 'hover:bg-opacity-20 hover:text-PrimaryHover hover:text-opacity-100 hover:bg-HardPrimaryHover text-Primary text-opacity-100 '} ${btnStyle}`,
      }
      return (
        <button 
          className={`flex justify-center items-center   rounded-full  font-semibold leading-tight tracking-normal align-top  transition-all duration-300 ease-linear  ${CustomerStyle.smBtnFull} `}
          onClick={onClick}
          onMouseOut={()=>{setButtonHover(false)}}
          onMouseOver={()=>{setButtonHover(true)}}
        >
          {label}
          {
            textHover && (
              <figure className='flex justify-center items-center max-w-5 min-w-5 min-h-5 scale-150'>
                <img src={buttonHover ? BagWhite : BagBlack} alt=''className='object-cover object-center pl-2 z-10'  />
               </figure>
            )
          }
        </button>
      )
}


export default GhostButton