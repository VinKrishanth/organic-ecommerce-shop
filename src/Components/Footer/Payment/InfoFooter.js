import React from 'react'
import {Link} from 'react-router-dom'
import InfoItems from './InfoItems'

function InfoFooter() {
 const textHover = `hover:translate-x-2 transition-all duration-700 delay-100 ease-linear`;
  return (
    <nav className='flex-grow grid grid-cols-4'>
        {
            InfoItems.map((item, index) => {
                return(
                    <div key={index} className={``}>
                        <h1 className={`text-base font-medium leading-10 tracking-normal align-top text-white ${textHover}`}>{item.Title}</h1>
                        <ul className={`flex flex-col justify-start items-start`}>
                            {
                                item.Pages.map((navItem, index2) => {
                                    return(
                                        <Link  to={navItem.sourceURL} key={index2} className='hover:underline'>
                                            <li id={navItem.ID} className={`text-sm font-normal leading-10 tracking-normal align-top text-Gray40 hover:text-white ${textHover}`}>{navItem.pageTitle}</li>               
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