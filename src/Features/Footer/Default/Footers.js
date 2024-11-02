import React, { createContext, useEffect, useState } from 'react'
import MainFooter from './Components/MainFooter'
import TopFooter from './Components/TopFooter'

export const UserContext = createContext();

function Footers() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'mt-16',
        dxl: '2xl:px-32 2xl:py-16',
        xl: 'xl:py-16',
        lg: 'lg:min-w-screen ',
        md: 'md:py-10 ',
        sm:' sm:px-16 sm:py-10  ',
        base: 'min-w-full p-10'
    }

    return (
        <UserContext.Provider value={{deviceSize, setDeviceSize}}>
            <footer>
                <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} `}>
                    <TopFooter />
                </div>
                <MainFooter />
            </footer>

        </UserContext.Provider>
    )
}

export default Footers