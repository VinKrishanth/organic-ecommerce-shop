import React, { useState } from 'react'
import Lag from './Lag'
import Log from './Log'
import {MapPinGreen, MapPinNormal} from '../../../assets/Header/Nav/index.js'

function TopHeader() {
const [textHover, setTextHover] = useState(false); 
  return (
    <div className={`flex justify-between items-center min-h-12 border-b-2`}>
        <div 
            className={`flex justify-center items-center gap-2`}
            onMouseOver={()=>setTextHover(true)}
            onMouseOut={()=>setTextHover(false)}
        >
            <img src={textHover  ?  MapPinGreen : MapPinNormal } alt='The Navigation arrow' className={`object-cover object-center min-w-4 min-h-[18px]`} />
            <p className={`text-xs font-normal font-5 tracking-normal align-top text-left text-Gray60 ${textHover && 'text-Primary'} transition-all duration-500 ease-linear  cursor-pointer`}>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className={`flex justify-end items-center gap-8`}>
            <Lag />
            <p className='min-h-3 min-w-[1px] bg-Gray60 '></p>
            <Log />
        </div>
    </div>
  )
}

export default TopHeader