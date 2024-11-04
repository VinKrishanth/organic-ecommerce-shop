import React, { useState } from 'react'
import {arrowGreen, arrowNormal} from '../../../assets/Header/Nav/index.js'

export default function Lag() {
  const [textHover, setTextHover] = useState(false);
  const language = [
     {ID: 'lag1', lag: 'Eng'}, {ID: 'lag2', lag: 'USD'}
  ]
  return (
    <ul className={`flex justify-center items-center gap-2 `}>
        {
            language.map((item , index)=>{
                return(
                    <li key={index} id={item.ID} className={`flex justify-center items-center gap-1 text-Gray60 hover:text-Primary transition-all duration-500 ease-linear cursor-pointer`}
                        onMouseOut={()=>{setTextHover(false)}}
                        onMouseOver={()=>{setTextHover(index)}}
                    >
                        <h1 className={`text-xs font-normal tracking-normal leading-5 align-top`}>{item.lag}</h1>
                        <img src={textHover === index ? arrowGreen : arrowNormal} alt='The Navigation arrow' className={`object-cover object-center`} />
                    </li>
                )
            })
        }
    </ul>
  )
}
