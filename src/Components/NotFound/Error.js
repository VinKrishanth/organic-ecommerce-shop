import React, {useEffect, useState } from 'react'
import {errorNotFound} from '../../assets/Team/index.js'
import NormalButton from '../Button/NormalButton.js';
import {Link} from 'react-router-dom'

function Error() {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [deviceSize]); 

  const customerStyle = {
      container: '',
      dxl: '2xl:px-16 2x:pt-20',
      xl: 'xl:py-16',
      lg: 'lg:min-w-screen ',
      md: 'md:py-10 ',
      sm:' sm:px-16 sm:py-10  ',
      base: 'min-w-full p-10'
  }

  return (
    <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} flex flex-col justify-center items-center max-w-[582px]  min-h-[30vh]`}>
        <div className={`flex justify-start items-start`}>
          <figure 
            className={`flex justify-center items-center`}
          >
            <img 
              src={errorNotFound} 
              alt='The not found source' className={`object-cover object-center cursor-pointer scale-90`} 
            />
          </figure>
        </div>
        <div className={`flex flex-col gap-8 justify-center items-center leading-6 align-top tracking-normal`}>
            <h1 className={`font-semibold text-[40px] text-gray-900 cursor-pointer `}>Oops! page not found</h1>
            <p className={`font-normal text-base text-Gray50 cursor-pointer text-center  px-16 max-w-[80%]`}>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
            <Link to='/'>
              <NormalButton 
                label={`Back to Home`}
                textSize={'min-h-12 min-w-[162px]'}
              />
            </Link>
        </div>
    </div>
  )
}

export default Error