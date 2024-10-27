import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import NavLinks from '../../links/NavLinks.js'
import arrowDown from '../../../assets/Header/Arrow-down.svg'
import CustomerStyle from '../../Style/CustomerStyle.js'
import arrowDownHover from '../../../assets/Header/Arrow-down-hover.svg'
import arrowDownGreen from '../../../assets/Header/Arrow-down-green.svg'

function NavigationPage({deviceSize, paddingLeft}) {
    const [textHover, setTextHover] = useState(false); 
    const location = useLocation()
  return (
    <nav className={`flex justify-center items-center ${deviceSize ? '': `min-h-11 ${paddingLeft ? '' : '2xl:pl-[300px] xl:pl-16' }`} `}>
        <ul className={`flex ${deviceSize ? '' : 'gap-16 '}`}>
            {
                NavLinks.map((item, index) => {
                    return(
                        location.pathname === item.NavURL ? (
                            <li key={item.ID} className={`flex justify-center items-center gap-2 cursor-none  ${deviceSize  ? '' : 'min-w-4 min-h-4'}`}>
                                <Link 
                                    to={`${item.NavURL}`} 
                                    className={`flex gap-1 ${deviceSize ? '' : ''} ${paddingLeft && 'scale-150'}`}
                                >
                                    <p className={`${CustomerStyle[0].Typography.bodyS500} text-white`}>{item.Name}</p>
                                    {
                                        item.Icon && (
                                            <figure className={`flex justify-center items-center pt-1 ${deviceSize?'' : 'min-w-4 min-h-4'}`}>
                                                <img src={arrowDownHover} alt='' className={`object-contain object-center min-h-2 min-w-2`} />
                                            </figure>
                                        )
                                    }
                                </Link>
                            </li>
                        ) : (
                            <li key={item.ID} className={`flex justify-center items-center gap-2 cursor-pointer ${deviceSize  ? '' : 'min-w-4 min-h-4'}`}>
                                <Link 
                                    to={`${item.NavURL}`} 
                                    className={`flex gap-1 ${deviceSize ? '' : ''} ${paddingLeft && 'scale-150'}`}
                                    onMouseOver={()=>{setTextHover(item.ID)}}
                                    onMouseOut={()=>{setTextHover(false)}}
                                >
                                    <p className={`${CustomerStyle[0].Typography.bodyS500} ${(textHover === index) && 'text-Primary scale-115 transition-all duration-300 ease-in-out delay-75'}`}>{item.Name}</p>
                                    {
                                        item.Icon && (
                                            <figure className={`flex justify-center items-center pt-1 ${deviceSize?'' : 'min-w-4 min-h-4'}`}>
                                                <img src={(textHover === index) ? arrowDownGreen : arrowDown} alt='' className={`object-contain object-center min-h-2 min-w-2 ${textHover && 'scale-115 transition-all duration-300 ease-in-out delay-75'}`} />
                                            </figure>
                                        )
                                    }
                                </Link>
                            </li>
                        )
                    )
                })
            }
        </ul>               
    </nav>
  )
}

export default NavigationPage