import React from 'react'

function TagButton({onClick, textBackground, label, tagStyle}) {
  return (
    <button 
        className={`text-center ${textBackground} text-white m-1 py-1 px-4 rounded text-sm font-normal align-top leading-5 tracking-normal hover:translate-x-1 transition-all duration-500 ease-linear capitalize ${tagStyle}`}
        onClick={onClick}
    >
       {label}
    </button>
  )
}

export default TagButton