import React, { useState } from 'react'
import {CheckBlueSource, CheckGreenSource} from '../../../assets/About/index.js'

function Feature() {
    const [textHover, setTextHover]  = useState(false); 
    const FeatureItems = [
        {ID: 1, desc : 'Sed in metus pellentesque.'},
        {ID: 2, desc : 'Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.'},
        {ID: 3, desc : 'Maecenas ut nunc fringilla erat varius.'},
    ];
  return (
    <div className={`grid grid-rows-3 gap-4`}>
         {
            FeatureItems.map((item, index) => {
                return(
                    <div 
                        key={index}
                        className={`flex justify-start items-center  gap-2 row-span-1`}
                        onMouseOver={() => {setTextHover(index)}}
                        onMouseOut={() => {setTextHover(false)}}
                    >
                        <figure className={`flex justify-center items-center min-w-5 min-h-5 bg-textBright rounded-full`}>
                            <img src={textHover === index ?  CheckBlueSource : CheckGreenSource} alt='The right icon' className={`object-cover object-center cursor-pointer`} />
                        </figure>
                        <p className={'text-sm font-normal tracking-normal leading-6 align-top cursor-pointer text-Gray60 hover:translate-x-2 duration-700 ease-linear transition-all'}>{item.desc}</p>
                    </div>
                )
            })
         }
    </div>
  )
}

export default Feature