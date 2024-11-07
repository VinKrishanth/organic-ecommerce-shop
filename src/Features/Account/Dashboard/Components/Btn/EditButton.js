import React from 'react'

function EditButton({label, onClick, textSize, defaultStyle, type}) {
  return (
    <button 
        type={type}    
        className={`${textSize ? 'text-sm' : 'text-base'} font-medium leading-6 tracking-normal align-top text-left text-Primary hover:text-PrimaryHover transition-all duration-700 ease-linear delay-75 capitalize ${defaultStyle}`}
        onClick={onClick}
    >
        {label}
    </button>
  )
}

export default EditButton