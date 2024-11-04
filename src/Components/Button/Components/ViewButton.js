import React from 'react'

function ViewButton({onClick, ButtonHover, Icon, HoverIcon, cardStyle, altText, textHover}) {
    return (
        <button 
            className={`flex justify-center items-center transition-all duration-700 ease-in-out min-h-10 min-w-10 rounded-full border-2  ${ButtonHover && textHover ? 'bg-Primary shadow-transparent ' : 'bg-white'} ${cardStyle}`}
            onClick={onClick}
        >
            <img src={ (textHover && ButtonHover) ?  HoverIcon : Icon} alt={altText} className={`object-contain object-center`} />
        </button>
    )
}

export default ViewButton