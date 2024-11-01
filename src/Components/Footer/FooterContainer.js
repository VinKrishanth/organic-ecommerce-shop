import React, { useContext } from 'react'
import Logo from '../../Components/Navigation/logo/Logo'
import {UserContext} from '../../Features/Footer/Footers'
import InfoFooter from './Payment/InfoFooter';

function FooterContainer() {
  const {deviceSize} = useContext(UserContext);  
  return (
    <section className={`flex justify-between items-start gap-32`}>
      <div className={`flex  flex-col justify-start items-start gap-5`}>
        <Logo 
          textColor={true}
        />
        <h2 className={`text-sm font-normal leading-6 tracking-normal  align-top cursor-pointer text-justify ${deviceSize ? '' : 'max-w-[300px]'}`}>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
        </h2>
        <div className={`flex text-base font-normal leading-6 tracking-normal align-top text-Gray50  cursor-pointer`}> 
          <p className={`font-medium text-sm text-white mr-4 border-b-2 border-Primary pb-2 hover:border-sky-500 transition-all duration-700 ease-linear delay-100`}>(+94) 773-235-540</p> 
          <span>or</span>
          <p className={`font-medium text-sm text-white ml-4 border-b-2 border-Primary pb-2  hover:border-sky-500  transition-all duration-700 ease-linear delay-100`}>Krishanth.cse@gmail.com</p></div>
      </div>
      <InfoFooter />
    </section>
  )
}

export default FooterContainer