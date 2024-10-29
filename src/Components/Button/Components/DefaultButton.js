import React, { useState } from 'react'

function DefaultButton({onClick, ButtonHover, Icon, HoverIcon, cardStyle, altText}) {
    const [textHover, setTextHover] = useState(false);  
    return (
        <button 
            className={`flex justify-center items-center transition-all duration-700 ease-in-out min-h-10 min-w-10 rounded-full border-2  ${ButtonHover && textHover ? 'bg-Primary shadow-transparent ' : 'bg-white'} ${cardStyle}`}
            onClick={onClick}
            onMouseOver={()=>(setTextHover(true))}
            onMouseOut={()=>(setTextHover(false))}
        >
            <img src={ (textHover && ButtonHover) ?  HoverIcon : Icon} alt={altText} className={`object-contain object-center`} />
        </button>
    )
}

export default DefaultButton