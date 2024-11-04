import React, { createContext, useEffect, useState } from 'react'
import SideBars from './Components/SideBars';
import Hero from './Components/Hero';
import Feature from './Components/Feature';

export const UserContext = createContext();

function HeroDefault() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: '',
        dxl: '2xl:px-16 2xl:py-16',
        xl: 'xl:py-16',
        lg: 'lg:min-w-screen ',
        md: 'md:py-10 ',
        sm:' sm:px-16 sm:py-10  ',
        base: 'min-w-full p-10'
    }
  return (
    <UserContext.Provider value={deviceSize} >
        <section id='heroMain' className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} `}>
            <div className='flex justify-start items-start min-w-full  2xl:flex-row flex-col  gap-8'>
                <SideBars />
                <Hero />
            </div>
            <Feature />
        </section>
    </UserContext.Provider>
  )
}

export default HeroDefault