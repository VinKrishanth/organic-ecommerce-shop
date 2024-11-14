import React, { useEffect, useState } from 'react'
import ShoppingInfo from './Components/ShoppingInfo';
import CouponCode from './Components/CouponCode';
import CartTotal from './Components/CartTotal';

function ShoppingCart() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'flex',
        dxl: '2xl:px-16 pt-16  ',
        xl: 'xl:',
        lg: 'lg:min-w-screen ',
        md: ' ',
        sm:' sm:px-16 ',
        base: 'min-w-full '
    }
    
  return (
    <section  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} flex gap-8`}>
    <div className={`flex flex-col min-w-full justify-start items-start min-h-96 `}>
      <div className={`flex justify-center items-center min-w-full pb-16`}>
        <h1 className={`text-3xl tracking-normal leading-6 font-semibold align-top text-center capitalize hover:scale-110 transition-all duration-700 ease-linear delay-200 cursor-pointer`}>My Shopping Cart</h1>
      </div>
      <div className={`grid grid-cols-12 justify-start items-start gap-16 min-w-full`}>
          <div className={`flex flex-col justify-start items-start col-span-8 gap-4 min-w-full`}>
            <ShoppingInfo />
            <CouponCode />
          </div>
          <div className={`flex justify-start items-start col-span-4`}>
            <CartTotal />
          </div>
      </div>
    </div>
  </section>
  )
}

export default ShoppingCart