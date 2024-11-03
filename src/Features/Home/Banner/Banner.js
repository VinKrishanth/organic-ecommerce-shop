import React, {  useEffect, useState } from 'react'
import {BannerBigXL} from '../../../Components/Banner/index.js'

function Banner() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'mt-16',
        dxl: '2xl:px-32 ',
        xl: 'xl:py-16',
        lg: 'lg:min-w-screen ',
        md: 'md:py-10 ',
        sm:' sm:px-16 sm:py-10  ',
        base: 'min-w-full p-10'
    }
  return (
    <section className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
        <BannerBigXL />
    </section>
  )
}

export default Banner