import React, {useEffect, useState } from 'react'
import HeroDefault from '../../Home/Hero/HeroDefault';
import HeroSource from './Components/HeroSource.js';


function Cakes() {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
  useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [deviceSize]); 

  const customerStyle = {
      container: 'pb-32  pt-16',
      dxl: '2xl:px-16 ',
      xl: '',
      lg: 'lg:min-w-screen ',
      md: '',
      sm:' sm:px-16  ',
      base: 'min-w-full '
  }

  return (
    <div className={`flex flex-col justify-start items-start min-w-full`}>
      <div className={`flex justify-start items-start min-w-full`}>
        <HeroDefault 
          HeroSourceTitle={HeroSource} 
          mainHeading={`Fresh & Healthy Organic Food`} 
          subHeading={`30%`}
        />
      </div>
      <div  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
      
      </div>
    </div>
  )
}

export default Cakes