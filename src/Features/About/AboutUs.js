import React, {useEffect, useState } from 'react'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import {AboutUsSource} from '../../assets/About/index.js'

function AboutUs() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'pb-32 pt-16',
        dxl: '2xl:px-16 ',
        xl: '',
        lg: 'lg:min-w-screen ',
        md: '',
        sm:' sm:px-16  ',
        base: 'min-w-full '
    }
  return (
    <section  className={`flex flex-col justify-start items-start`}>
        <NavigationMenu 
            pageName = {`About`}
        />
        <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} grid grid-cols-2`}>
           <div className={`flex justify-start items-center col-span-1 `}>
                <div className={`flex flex-col justify-start items-start gap-8 `}>
                    <h1 className={`text-[56px] font-semibold tracking-normal  align-top text-Gray90  cursor-pointer max-w-[75%]`}><span className={`text-Primary hover:text-opacity-75 duration-700 ease-linear delay-75`}>100%</span> Trusted Organic Food Store</h1>
                    <p className={`text-lg font-semibold tracking-normal  leading-8 text-Gray60 align-top   text-justify cursor-pointer pr-32`}>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
                </div>
           </div>
           <div className={`col-span-1`}>
                <div className='flex justify-end items-center'>
                    <figure className={`flex justify-end items-center max-h-[492px] min-w-full overflow-hidden rounded-m`}>
                        <img src={AboutUsSource} alt='The faqs source' className={`object-cover object-center cursor-pointer`} />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs