import React, {useEffect, useState } from 'react'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import Blog from './Components/Blog';
import Filter from './Components/Filter';
import BlogTop from './Components/BlogTop';

function Blogs() {
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
            pageName = {`Blog`}
        />
        <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
            <BlogTop />
            <div className={`min-w-full grid  grid-cols-12 gap-16 first-line:min-h-96`}>
                <Filter />
                <Blog />
            </div>
        </div>
    </section>
  )
}

export default Blogs