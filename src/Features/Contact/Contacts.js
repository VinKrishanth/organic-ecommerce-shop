import React, {useEffect, useState } from 'react'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import ContactInfo from './Components/ContactInfo';
import Form from './Components/Form';
import {mapSource} from '../../assets/About/index.js'

function Contacts() {
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
            pageName = {`Contact`}
        />
        <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} flex flex-col gap-16`}>
            <div className={`min-w-full grid  grid-cols-12 gap-16 min-h-[507px]`}>
                <ContactInfo />
                <Form />
            </div>
            <div className={`flex justify-center items-center min-w-full min-h-[400px] border-2 hover:border-sky-300 transition-all duration-700 ease-linear delay-100 cursor-pointer overflow-hidden`}>
                <img src={mapSource} alt='The map source' className='object-cover object-center scale-150 ' />
            </div>
        </div>
    </section>
  )
}

export default Contacts