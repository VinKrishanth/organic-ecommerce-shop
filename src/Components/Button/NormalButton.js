import React from 'react'

function NormalButton({onClick ,minHight, minWidth, textSize, label, styleColor}) {
  const CustomerStyle = {
    smBtnFull: `${minWidth ? 'min-w-fit px-4': 'min-w-[102px]'}  ${minHight ? minHight : 'min-h-8'} ${textSize ? textSize : 'text-xs'} ${styleColor ? 'bg-Gray05 text-Gray90 hover:bg-Primary hover:text-white' : 'bg-Primary text-white  hover:bg-PrimaryHover'}  `,
  }
  return (
    <button 
      className={`flex justify-center  items-center  rounded-full  font-semibold leading-tight tracking-normal align-top  transition-all duration-500 ease-linear ${CustomerStyle.smBtnFull}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default NormalButton