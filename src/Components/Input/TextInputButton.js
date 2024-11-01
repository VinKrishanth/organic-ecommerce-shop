import React, { useContext, useState } from 'react'
import {handleFooterSubscribe} from '../Js/commonButtonFunction'
import { UserContext } from '../../Features/Footer/Footers' 

function TextInputButton() {
    const [textHover, setTextHover] = useState(false);
    const [formData, setFormData] = useState('');
    const {deviceSize} = useContext(UserContext); 
  return (
    <div className='flex justify-between items-center'>
        <div className={`border-[1px] rounded-l-full rounded-r-full flex justify-between min-w-[536px] min-h-[52px] z-10 overflow-hidden 4 ${textHover ? 'border-Primary' : 'border-Gray10'} z-10`}>
            <input  
                type='email' 
                className={`flex-grow text-base font-normal align-top text-left ${deviceSize ? '' : 'min-h-full'} focus:outline-none pl-8`} 
                placeholder='Your email address'
                value={formData}
                onChange={(e) =>{setFormData(e.target.value)}}
                onMouseOver={()=>{setTextHover(true)}} 
                onMouseOut={()=>{setTextHover(false)}} 
            /> 
            <button className={'font-semibold min-w-[162px] min-h-full bg-Primary rounded-l-full text-white text-balance leading-5 tracking-normal align-top hover:bg-PrimaryHover transition-all duration-700 ease-linear delay-100  border-[1px] border-r-0' }
                onClick={()=>{handleFooterSubscribe(formData, setFormData)}}
            >
               Subscribe
            </button>
        </div>
    </div>
  )
}

export default TextInputButton