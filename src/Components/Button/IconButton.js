import React from 'react'
import PropType from 'prop-types'
import { useNavigate } from 'react-router-dom'

function IconButton({sourceIcon, title, navigationURL}) {
  const navigate = useNavigate();
  const handleReadMoreButton = () =>{
    navigate(navigationURL);
  }
  
  return (
    <button 
        className={'flex justify-center items-center min-h-5 gap-2 text-base leading-5 tracking-normal font-semibold align-top opacity-100 text-Primary hover:opacity-70 transition-all duration-500 ease-linear'}
        onClick={handleReadMoreButton}
    >
        {title}
        <img src={sourceIcon} alt='' className='object-cover object-center max-h-3 min-w-4 pt-1' />
    </button>
  )
}

IconButton.prototype = {
    sourceIcon: PropType.string.isRequired,
    title: PropType.string.isRequired,
    navigationURL: PropType.string.isRequired
}

export default IconButton