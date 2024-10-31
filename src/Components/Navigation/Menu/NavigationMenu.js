import React from 'react'
import NavItem from '../../../assets/Header/Nav/nav-menu.svg'
import HomeMenu from '../../../assets/Header/Nav/home-1.svg'
import ArrowRight from '../../../assets/Header/Nav/arrow-right.svg'


function NavigationMenu() {
  return (
    <div className={`flex justify-start item-center m-h-[120px] mt-8 relative`}>
        <figure className='min-w-full min-h-full'>
            <img src={NavItem} alt='The menu background' className={`object-cover items-center`} />
        </figure>
        <div className={`absolute z-20`}>
            <div className={`flex justify-start items-center px-64 py-12 gap-2 cursor-pointer`}>
                <img src={HomeMenu} alt='The menu icon' className={`object-cover items-center min-h-6 min-w-6`} />
                <figure className={`min-h-6 min-w-6 flex justify-center items-center`}>
                    <img src={ArrowRight} alt='The arrow right icon' className={`object-cover items-center`} />
                </figure>
                <h2 className={`text-sm leading-6 tracking-normal text-left align-top text-Primary hover:scale-110 duration-700 ease-linear delay-100`}>Vegetables</h2>
            </div>
        </div>
    </div>
  )
}

export default NavigationMenu