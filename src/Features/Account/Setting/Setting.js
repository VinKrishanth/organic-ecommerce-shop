import React, { useEffect, useState } from 'react'
import DashboardMain from '../../../Containers/DashboardMain';
import AccountSetting from './AccountSetting';
import ChangePassword from './ChangePassword';
import BillingAddress from './BillingAddress';

function Setting() {
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
      <div className={`flex-grow flex-col grid grid-cols-9 gap-4`}>
        <AccountSetting />
        <BillingAddress />
        <ChangePassword />
      </div>
    </section>
  )
}

export default Setting