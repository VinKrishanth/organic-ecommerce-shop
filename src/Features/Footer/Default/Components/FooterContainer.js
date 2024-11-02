import React, { useContext } from 'react'
import Logo from '../../../../Components/Navigation/logo/Logo'
import {UserContext} from '../../../../Features/Footer/Default/Footers'
import InfoFooter from '../../../../Components/Footer/Payment/InfoFooter';


function FooterContainer() {
  const {deviceSize} = useContext(UserContext);  
  return (
    <section className={`flex  ${deviceSize  ? 'flex-col min-w-full gap-10' : 'justify-between  items-start gap-16' }`}>
      <div className={`flex flex-col justify-start items-start gap-6`}>
        <Logo 
          textColor={true}
          deviceSize={deviceSize}
        />
        <h2 className={`max-w-96`}>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
        </h2>
        <div className={`flex gap-4 ${deviceSize ? ' flex-col' : 'flex-row md:flex-col'  }`}> 
          <p className={``}> +94 773-235-540 {!deviceSize && <span className='pl-4'>or</span> }</p> 
          <p className={``}>  Krishanth.cse@gmail.com</p></div>
      </div>
      <InfoFooter deviceSize={deviceSize}/>
    </section>
  )
}

export default FooterContainer