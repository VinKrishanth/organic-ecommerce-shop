import React from 'react'
import {arrowGreen, arrowNormal} from '../../../assets/Header/Nav/index.js'
import { Link, useLocation } from 'react-router-dom'
import NavLinks from '../../../Components/links/NavLinks.js'

function NavLists() {
  const location = useLocation();
  return (
    <div className={`flex-grow flex justify-between items-center px-6`}>
        {
            NavLinks.map((item, index) => {
                return(
                    <Link to={item.NavURL} key={index} className='flex justify-center items-center pr-4'>
                        <p className={`text-sm font-medium text-left leading-6 tracking-normal align-top ${location.pathname === item.NavURL ? 'text-white cursor-none' : 'text-Gray50 cursor-pointer '}`}>{item.Name}</p>
                        {
                            item.Icon && (
                                <figure className={`flex justify-center items-center min-h-5 min-w-5`}>
                                    <img 
                                        src={location.pathname === item.NavURL? arrowGreen : arrowNormal} 
                                        alt='The navigation menu icon' 
                                        className={`object-cover object-center scale-110`} 
                                    />
                                </figure>
                            )
                        }
                    </Link>
                )
            })
        }
    </div>
  )
}

export default NavLists