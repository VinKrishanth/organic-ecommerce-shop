import React, { useContext } from 'react'
import Logo from '../../Components/Navigation/logo/Logo'
import {UserContext} from '../../Features/Footer/Footers'
import InfoFooter from './Payment/InfoFooter';

function FooterContainer() {
  const {deviceSize} = useContext(UserContext);  
  return (
    <section className={`flex ${deviceSize? 'flex-col justify-center items-center' : ' flex-row justify-between items-start gap-32'}`}>
      <div className={`flex  gap-5 ${deviceSize? 'flex-col justify-start pb-8' : 'flex-col justify-start items-start'} `}>
        <Logo 
          textColor={true}
          deviceSize={deviceSize}
        />
        <h2 className={`text-sm font-normal leading-6 tracking-normal  align-top cursor-pointer text-justify ${deviceSize ? '' : 'max-w-[300px]  px-8'}`}>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
        </h2>
        <div className={`flex  text-base font-normal leading-6 tracking-normal align-top text-Gray50  cursor-pointer  ${deviceSize? 'flex-col-reverse  scale-110 gap-2 mx-4' : 'min-w-full flex-row gap-4 justify-center items-center'}`}> 
          <p className={`font-medium text-sm ${deviceSize ? 'hover:translate-x-2' : 'mr-4 border-b-2 border-Primary pb-2 text-white hover:border-sky-500'}  transition-all duration-700 ease-linear delay-100`}> {deviceSize && <span>Tel:-</span>} +94 773-235-540</p> 
          {!deviceSize && <span>or</span> }
          <p className={`font-medium text-sm ${deviceSize ? 'hover:translate-x-2' : ' ml-4 border-b-2 border-Primary pb-2 text-white hover:border-sky-500 '}    transition-all duration-700 ease-linear delay-100`}> {deviceSize && <span>Email:-</span>} Krishanth.cse@gmail.com</p></div>
      </div>
      <InfoFooter deviceSize={deviceSize}/>
    </section>
  )
}

export default FooterContainer