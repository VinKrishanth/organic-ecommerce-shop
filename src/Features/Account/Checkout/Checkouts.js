import React, {useEffect, useState } from 'react'
import BillingInfo from './Components/BillingInfo';
import OrderInfo from './Components/OrderInfo';

function Checkouts() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'flex',
        dxl: '2xl:px-16 pt-8',
        xl: 'xl:',
        lg: 'lg:min-w-screen ',
        md: ' ',
        sm:' sm:px-16 ',
        base: 'min-w-full '
    }

  return (
    <section  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} flex gap-8`}>
      <div className={`flex-grow grid grid-cols-12 gap-16`}>
        <div className={`flex justify-start items-start min-w-full col-span-8`}>
            <BillingInfo />
        </div>
        <div className={`flex justify-start items-start min-w-full col-span-4`}>
            <OrderInfo />
        </div>
      </div>
    </section>
  )
}

export default Checkouts