import React, { createContext, useEffect, useState } from 'react'
import Feature from '../../../Components/Feature/Feature'
import {BannerBig, BannerSM} from '../../../Components/Banner/index'
import {bannerVegetable, bannerNewSmall} from '../../../assets/Product/Banner/BannerItems.js'

export const UserContext = createContext();

function HeroMain() {
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
        <div id='hero' className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} `}>
            <div className={`grid grid-cols-12 grid-rows-1 pb-16 ${deviceSize ? 'min-w-full gap-4' : 'gap-6'}`}>
                <div className={`${deviceSize ? 'col-span-12' : 'col-span-8 '} `}>
                    <BannerBig />
                </div>
                <div className={`flex  gap-4 ${deviceSize ? 'col-span-12 ' : 'col-span-4 flex-col '}`}>
                    <BannerSM 
                        key={1}
                        deal={false}
                        bannerSourceURL={bannerVegetable}
                    />
                    <BannerSM 
                        key={2}
                        deal={true}
                        bannerSourceURL={bannerNewSmall}
                    />
                </div>
            </div>
            <Feature />
        </div>
    </UserContext.Provider>
  )
}

export default HeroMain