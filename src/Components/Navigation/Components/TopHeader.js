import React, { useContext, useState } from 'react'
import mapPin from '../../../assets/Header/Map-Pin.svg'
import arrowDown from '../../../assets/Header/Arrow-down.svg'
import mapPinWhite from '../../../assets/Header/Map-Pin-white.svg'
import arrowDownWhite from '../../../assets/Header/Arrow-down-white.svg'
import {UserContext} from '../../../Features/Header/Navigation'
import CustomerStyle from '../../Style/CustomerStyle.js'

function TopHeader() {
  const [textHover, setTextHover] = useState(false);
  const {deviceSize} = useContext(UserContext);
  return (
    <header 
        className={`border-b-2 ${textHover ? 'bg-Primary text-white' : 'bg-white text-Gray40'}`}
        onMouseOver={()=>{setTextHover(true)}}
        onMouseOut={()=>{setTextHover(false)}}
    >
        <div className={`flex justify-between items-center ${deviceSize ? '': 'min-h-11 2xl:px-[300px] xl:px-16'}`}>
            <div className='flex justify-start items-center gap-2'>
                <figure className={`min-w-4 min-h-4`}>
                    <img src={textHover? mapPinWhite : mapPin} alt='' className={`object-cover object-center`} />
                </figure>
                <p className={`${CustomerStyle[0].Typography.bodyL400}  cursor-pointer`}>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className={``}>
                <ul className={`flex justify-start items-center gap-4`}>
                    <li className={`flex items-center justify-center gap-1`} >
                        <p className={`${CustomerStyle[0].Typography.bodyM400}`}>Eng</p>
                        <figure className={``}>
                            <img src={textHover? arrowDownWhite : arrowDown} alt='The down English' className={`object-cover object-center`} />
                        </figure>
                    </li>
                    <li className={`flex items-center justify-center gap-1`} >
                        <p className={`${CustomerStyle[0].Typography.bodyM400}`}>USD</p>
                        <figure className={``}>
                            <img src={textHover? arrowDownWhite : arrowDown} alt='The down USd' className={`object-cover object-center`} />
                        </figure>
                    </li>
                    <li className={`flex justify-center items-center gap-2`} >
                        <p className={`${CustomerStyle[0].Typography.bodyM400}`}>Sign In</p>
                            <div className={`border-r-2 min-w-1 min-h-4 ${textHover ? 'border-white' : 'border-Gray50'} bg-red rotate-[15deg]`}></div>
                        <p className={`${CustomerStyle[0].Typography.bodyM400}`}>Sign Up</p>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default TopHeader