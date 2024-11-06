import React from 'react'
import Items from './Item/Items'
import Navigation from './Navigation'
import { useLocation, useNavigate } from 'react-router-dom'

function NavigationMenu() {
    const location = useLocation();
    const navigation = useNavigate();

    const handleClick = (url) => {
        navigation(url);
    }

  return (
    <div className={`grid grid-cols-1 border-2 max-w-[312px] rounded-xl shadow-md pb-4 `}>
        <div className={`flex justify-start items-center  min-h-14  col-span-1`}>
        <p className={`text-xl tracking-normal font-medium leading-5 align-top text-left p-4`}>Navigation</p>
        </div>
        {
            Navigation.map((nav, index) => {
                return(
                    <Items 
                        ID={nav.ID}
                        Title={nav.NavigationName}
                        index={index}
                        sourceAlt={nav.sourceAlt}
                        sourceHover={nav.sourceHover}
                        sourceMain={nav.sourceNormal}
                        key={index}
                        Location={location.pathname}
                        NavigationURL={nav.NavigationURL}
                        onClick={()=>{handleClick(nav.NavigationURL)}}
                    />
                )
            })
        }
    </div>
  )
}

export default NavigationMenu