import React from 'react'

function SearchButton({onClick, MouseOut, MouseOver, textHover, searchStyle , label}) {
  return (
    <div className={`flex justify-center items-center  text-center  cursor-pointer   transition-all duration-300 ease-in-out delay-75 ${searchStyle ? 'px-8 rounded-l-full bg-Gray90 bg-opacity-100 hover:bg-opacity-75 text-white' :`bg-Primary text-white ${textHover? 'opacity-80' : 'opacity-100'}`}`}>
      <button 
        className={`min-w-[98px]`}
        onClick={onClick}
        onMouseOver={MouseOut}
        onMouseOut={MouseOver}
      >
        {label ? label : 'Search'}
      </button>
    </div>
  )
}

export default SearchButton