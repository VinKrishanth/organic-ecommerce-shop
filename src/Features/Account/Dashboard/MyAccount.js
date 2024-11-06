import React, {useEffect, useState } from 'react'
import DashboardMain from '../../../Containers/DashboardMain';
import Profile from './Components/Profile';
import BillingAddress from './Components/BillingAddress';
import OrderHistory from './Components/OrderHistory';
import demoHistory from '../OrderHistory/Components/demoHistory.js'

function MyAccount() {
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
      <div className={`min-w-[312px]`}>
        <DashboardMain />
      </div> 
      <div className={`flex-grow grid grid-cols-9 gap-4`}>
        <Profile />
        <BillingAddress />
        <OrderHistory historyData={demoHistory} />
      </div>
    </section>
  )
}

export default MyAccount