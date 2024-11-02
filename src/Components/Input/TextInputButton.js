import React, { useState } from 'react'
import {handleFooterSubscribe} from '../Js/commonButtonFunction'

function TextInputButton() {
    const [textHover, setTextHover] = useState(false);
    const [formData, setFormData] = useState('');
  return (
    <div className={`flex justify-between items-center flex-grow`}>
        <div 
            className={`flex justify-between min-w-full md:min-h-14 min-h-10   z-10 overflow-hidden border-2 rounded-l-full rounded-r-full  ${textHover ? 'border-Primary' : 'border-Gray10 '} z-10 overflow-hidden`}
            onMouseOver={()=>{setTextHover(true)}} 
            onMouseOut={()=>{setTextHover(false)}} 
        >
            <input  
                type='email' 
                className={`flex-grow text-base font-normal align-top text-left focus:outline-none pl-8 `} 
                placeholder='Your email address'
                value={formData}
                onChange={(e) =>{setFormData(e.target.value)}}
            /> 
            <button className={`md:text-base lg:text-xs text-xs font-semibold  bg-Primary rounded-l-full text-white  leading-5 tracking-normal align-top hover:bg-PrimaryHover transition-all duration-700 ease-linear delay-100   border-r-0 min-w-[30%]  z-0` }
                onClick={()=>{handleFooterSubscribe(formData, setFormData)}}
            >
               Subscribe
            </button>
        </div>
    </div>
  )
}

export default TextInputButton