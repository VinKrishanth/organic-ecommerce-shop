import React from 'react'

function BorderButton({onClick ,minHight, minWidth, textSize, label, type}) {
    const CustomerStyle = {
        smBtnFull: `${minWidth ? minWidth: 'min-w-[102px]'}  ${minHight ? minHight : 'min-h-8'} ${textSize ? textSize : 'text-xs'} bg-white border-2  text-Primary hover:text-PrimaryHover hover:border-PrimaryHover border-Primary `,
      }
      return (
        <button 
          className={`flex justify-center items-center   rounded-full  font-semibold leading-tight tracking-normal align-top  transition-all duration-300 ease-in-out delay-75  ${CustomerStyle.smBtnFull} `}
          onClick={onClick}
          type={type ? 'submit' : 'button'}
        >
          {label}
        </button>
      )
}

export default BorderButton