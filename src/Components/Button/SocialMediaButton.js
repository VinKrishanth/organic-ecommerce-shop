import React, { useState } from 'react'

function SocialMediaButton({onClick, Icon, HoverIcon, btnBG, btnBGHover }) {
    const [textHover, setTextHover] = useState(false);  
    return (
        <button 
            className={`flex justify-center items-center transition-all duration-500 ease-linear delay-75 min-h-10 min-w-10 rounded-full hover:scale-105    ${textHover  ? btnBGHover : btnBG} `}
            onClick={onClick}
            onMouseOver={()=>(setTextHover(true))}
            onMouseOut={()=>(setTextHover(false))}
        >
            <img src={ (textHover) ? HoverIcon : Icon} alt='' className={`object-contain object-center`} />
        </button>
    )
}


export default SocialMediaButton