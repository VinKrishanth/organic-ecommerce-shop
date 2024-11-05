import React, {useEffect, useState } from 'react'
import {DeliverySource} from '../../assets/About/index.js'
import Feature from './Components/Feature.js';
import {ArrowRight} from '../../assets/Product/Blog/BlogItems.js'

function AboutMe() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: 'pt-16',
        dxl: '2xl:px-16 ',
        xl: '',
        lg: 'lg:min-w-screen ',
        md: ' ',
        sm:' sm:px-16   ',
        base: 'min-w-full '
    }
  return (
    <section  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} grid grid-cols-2 gap-8`}>
        <div className={`flex justify-start items-center col-span-1 `}>
            <div className={`flex flex-col justify-start items-start gap-8 pr-16`}>
                <h1 className={`text-[56px] font-semibold tracking-normal  align-top text-Gray90  cursor-pointer max-w-[75%]`}><span className={`text-Primary hover:text-opacity-75 duration-700 ease-linear delay-75`}>We Delivered,</span>You Enjoy Your Order.</h1>
                <p className={`text-lg font-semibold tracking-normal  leading-8 text-Gray60 align-top   text-justify cursor-pointer pr-16`}>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
                <Feature />
                <button className={`flex justify-center items-center gap-2 bg-Primary text-white capitalize text-base  min-h-12 min-w-48 rounded-full hover:bg-PrimaryHover`}>
                    <span>show now</span>
                    <img src={ArrowRight} alt='The arrow right' className='min-w-4 min-h-4' />
                </button>
            </div>
        </div>
        <div className={`flex justify-start items-center col-span-1`}>
            <figure className={`flex justify-end items-center  min-w-full overflow-hidden rounded-m`}>
                <img src={DeliverySource} alt='The faqs source' className={`object-cover object-center cursor-pointer rounded-md`} />
            </figure>
        </div>
    </section>
  )
}

export default AboutMe