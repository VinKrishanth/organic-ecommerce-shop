import React from 'react'

function OrderButton({label, onClick, textSize, defaultStyle}) {
  return (
    <button     
        className={`${textSize ? 'text-sm' : 'text-base'} font-medium leading-6 tracking-normal align-top text-left text-Primary hover:text-PrimaryHover transition-all duration-700 ease-linear delay-75 capitalize ${defaultStyle}`}
        onClick={onClick}
    >
        {label}
    </button>
  )
}

export default OrderButton