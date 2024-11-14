import React, { useContext, useState } from 'react'
import Phone from '../../../assets/Header/PhoneCall.svg'
import PhoneGreen from '../../../assets/Header/PhoneCall-green.svg'
import {UserContext} from '../../../Features/Header/Navigation'
import NavigationPage from './NavigationPage.js'
import NavigationMenuPage from './NavigationMenuPage.js'
import Logo from '../logo/Logo.js'
import Payment from '../Payment/Payment.js'
import TextInputSearch from '../../Input/TextInputSearch.js'


function MainHeader({toggleMenu}) {
 const {deviceSize} = useContext(UserContext);
 const [textHover, setTextHover] = useState(false); 
  return (
    <>
        <main className={`flex justify-between items-center ${deviceSize ? '': 'min-h-11 2xl:px-[300px] xl:px-16'} min-h-24 `}>
          <Logo />
          <TextInputSearch 
            deviceSize={deviceSize}
            placeholder={false}
          />
          <Payment 
            display={true}
          />
        </main>
        <footer className={`flex justify-between items-center bg-black ${deviceSize ? '': '2xl:min-h-[60px]'}`}>
          {
            toggleMenu ? (
              <NavigationMenuPage deviceSize={deviceSize} />
            ) : (
              <NavigationPage  deviceSize={deviceSize} />
            )
          }
            <div className={`flex items-center justify-between gap-4 ${deviceSize ? '': 'min-h-11 2xl:pr-[300px] xl:pr-16 2xl:min-140'}`}>
              <img 
                src={textHover ? PhoneGreen : Phone} alt='' className={`object-cover object-center cursor-pointer scale-115 transition-all duration-300 ease-in-out delay-75 ${deviceSize? '' : 'min-h-7 min-w-7' }`} 
                onMouseOver={()=>(setTextHover(true))}
                onMouseOut={()=>(setTextHover(false))}
              />
              <p className={`cursor-pointer hover:text-Primary ${deviceSize? '' : 'min-h-7 min-w-7' }`}>(+94) 77-3235540</p>
            </div>
        </footer> 
    </>
  )
}

export default MainHeader