import React from 'react'

function NormalButton({onClick ,minHight, minWidth, textSize, label}) {
  const CustomerStyle = {
    smBtnFull: `${minWidth ? minWidth: 'min-w-[102px]'}  ${minHight ? minHight : 'min-h-8'} ${textSize ? textSize : 'text-xs'}  bg-Primary text-white  hover:bg-PrimaryHover`,
  }
  return (
    <button 
      className={`flex justify-center items-center   rounded-full  font-semibold leading-tight tracking-normal align-top  transition-all duration-300 ease-in-out delay-75 ${CustomerStyle.smBtnFull}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default NormalButton