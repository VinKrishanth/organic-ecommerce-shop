import React, {useEffect, useState } from 'react'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import {FaqsSource} from'../../assets/Team/index.js'
import FaqItem from './Components/FaqItem.js';


function Faq() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    const [textHover, setTextHover]  = useState(false);

    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: '',
        dxl: '2xl:px-16 2x:pt-20',
        xl: 'xl:py-16',
        lg: 'lg:min-w-screen ',
        md: 'md:py-10 ',
        sm:' sm:px-16 sm:py-10  ',
        base: 'min-w-full p-10'
    }

  return (
    <div className={`flex flex-col justify-start items-start`}>
        <NavigationMenu 
            pageName = {`Faqs`}
        />
        <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} grid grid-cols-2 gap-32`}>
            <div className={`flex justify-start items-center`}>
                <div className={`flex justify-start items-start flex-col gap-8 col-span-1`}>
                    <h1 className={`text-5xl font-semibold leading-tight text-left tracking-wide align-top cursor-pointer text-Gray90 max-w-[75%] first-letter:text-Primary ${textHover && 'first-letter:hover:text-Warning transition-all duration-700 ease-linear'} `}
                        onMouseOver={() => {setTextHover('W')}}
                        onMouseOut={() => {setTextHover(false)}}
                    >Welcome, Let’s Talk About Our Ecobazar</h1>
                    <FaqItem  />
                </div>
            </div> 
            <div className={`col-span-1`}>
                <figure className={`flex justify-center items-center max-h-[808px] min-w-full overflow-hidden`}>
                    <img src={FaqsSource} alt='The faqs source' className={`object-cover object-center hover:scale-90 hover:translate-x-4 hover:translate-y-4 transition-all duration-700 ease-linear delay-200 cursor-pointer`} />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Faq