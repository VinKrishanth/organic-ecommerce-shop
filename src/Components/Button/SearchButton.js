import React from 'react'

function SearchButton({onClick, MouseOut, MouseOver, textHover}) {
  return (
    <div className={`flex justify-center items-center  text-center bg-Primary text-white cursor-pointer  ${textHover? 'opacity-80' : 'opacity-100'}  transition-all duration-300 ease-in-out delay-75 `}>
      <button 
        className={`min-w-[98px]`}
        onClick={onClick}
        onMouseOver={MouseOut}
        onMouseOut={MouseOver}
      >
        Search
      </button>
    </div>
  )
}

export default SearchButton