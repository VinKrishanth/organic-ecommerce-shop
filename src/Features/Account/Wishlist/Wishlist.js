import React, { useEffect, useState } from 'react'
import DashboardMain from '../../../Containers/DashboardMain';
import Product from './Components/Product';

function Wishlist() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'flex',
        dxl: '2xl:px-16 mt-4',
        xl: 'xl:',
        lg: 'lg:min-w-screen ',
        md: ' ',
        sm:' sm:px-16 ',
        base: 'min-w-full '
    }
    
  return (
    <section  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} flex gap-8`}>
      <div className={`flex flex-col min-w-full justify-start items-start min-h-96 `}>
          <div className={`flex justify-center items-center min-w-full p-8`}>
              <h1 className={`text-3xl tracking-normal leading-6 font-semibold align-top text-center capitalize hover:scale-110 transition-all duration-700 ease-linear delay-200 cursor-pointer`}>My Wishlist</h1>
          </div>
          <Product />
      </div>
    </section>
  )
}

export default Wishlist