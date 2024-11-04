import React, { useEffect, useState } from 'react'
import TopHeader from './Components/TopHeader'
import MiddleHeader from './Components/MiddleHeader'
import MainHeader from './Components/MainHeader';

function DefaultHeader() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'px-16',
        dxl: '',
        base: ''
    }
    return (
        <div className={`${customerStyle.container} ${customerStyle.dxl}${customerStyle.base} `}>
            <TopHeader />
            <MiddleHeader />
            <MainHeader />
        </div>
    )
}

export default DefaultHeader