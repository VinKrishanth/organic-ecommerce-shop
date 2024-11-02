import React, { useState } from 'react'
import MenuWhite from '../../../assets/Header/menu-white.svg'
import ArrowDown from '../../../assets/Header/Arrow-down-white.svg'
import CustomerStyle from '../../Style/CustomerStyle'

export default function Menu({deviceSize}) {
  let toggleMenu = JSON.parse(localStorage.getItem('ToggleMenu'));
  const [textMenu , setTextMenu] = useState(toggleMenu);

  const handleMenuClick = () => {
    textMenu ? setTextMenu(false) :  setTextMenu(true) 
    toggleMenu = {
        isMenuShow : textMenu
    };
    localStorage.setItem('ToggleMenu' , JSON.stringify(toggleMenu));
  }
  return (
    <div className={`flex justify-start items-center ${deviceSize ? '': 'min-h-11 2xl:ml-[300px] xl:ml-16 '} bg-Gray80`} >
       <button 
            className={`flex justify-center items-center min-h-16 min-w-16 bg-Primary`}
            onClick={handleMenuClick}
        >
            <figure className={``}>
                <img src={MenuWhite} alt='' className={`object-cover object-center`} />
            </figure>
       </button>
       {
        toggleMenu.isMenuShow && (
                <div className={`flex-grow flex justify-center items-center px-4 `}>
                <p className={`${CustomerStyle[0].Typography.bodyM500} min-w-[170px] text-white`} >
                    All Categories
                </p>
                <figure className={`flex justify-center items-center min-w-5 min-h-5`}>
                    <img src={ArrowDown} alt='' className={`object-cover object-center scale-150`} />
                </figure>
            </div>
        )
       }
    </div>
  )
}
