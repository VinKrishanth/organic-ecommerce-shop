import React from 'react'

function GhostButton({onClick ,minHight, minWidth, textSize, label}) {
    const CustomerStyle = {
        smBtnFull: `${minWidth ? minWidth: 'min-w-[102px]'}  ${minHight ? minHight : 'min-h-8'} ${textSize ? textSize : 'text-xs'} text-Primary text-opacity-100 bg-HardPrimary bg-opacity-10 hover:bg-HardPrimaryHover hover:bg-opacity-20 hover:text-PrimaryHover hover:text-opacity-100`,
      }
      return (
        <button 
          className={`flex justify-center items-center   rounded-full  font-semibold leading-tight tracking-normal align-top  transition-all duration-300 ease-in-out delay-75  ${CustomerStyle.smBtnFull} `}
          onClick={onClick}
        >
          {label}
        </button>
      )
}


export default GhostButton