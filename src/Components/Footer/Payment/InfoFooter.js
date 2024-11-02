import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import InfoItems from './InfoItems'
import {UserContext} from '../../../Features/Footer/Default/Footers'

function InfoFooter() {
 const [textHover, setTextHover] = useState(false)
 const {deviceSize} = useContext(UserContext);
 const txtHover = `hover:translate-x-2 transition-all duration-700 delay-100 ease-linear`;
  return (
    <nav className={`flex-grow grid  ${deviceSize ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-4 '}`}>
        {
            InfoItems.map((item, index) => {
                return(
                    <div key={index}>
                        <h1 className={` font-medium leading-10 tracking-normal align-top text-white ${txtHover}`}>{item.Title}</h1>
                        <ul className={`flex flex-col justify-start items-start`}>
                            {
                                item.Pages.map((navItem, index2) => {
                                    return(
                                        <Link  
                                            to={navItem.sourceURL} key={index2} className={` ${deviceSize ? 'min-w-full pl-6' : 'hover:underline'} ${(textHover === navItem.ID && deviceSize) && 'bg-Gray40 bg-opacity-70 rounded-lg'}`} 
                                            onMouseOver={()=>{setTextHover(navItem.ID)}}
                                            onMouseOut={()=>{setTextHover(false)}}
                                        >
                                            <li id={index2} className={`${deviceSize ? 'text-base' : 'text-sm'} font-normal leading-10 tracking-normal align-top text-Gray40 hover:text-white ${!deviceSize && txtHover}`}>{navItem.pageTitle}</li>               
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }
    </nav>
  )
}

export default InfoFooter