import React, {useEffect, useState } from 'react'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import BlogTop from '../Blogs/Components/BlogTop';
import ProductFilter from './Components/ProductFilter';
import Products from './Components/Products';
import Pagination from './Components/Product/Pagination'

function Shops() {
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
            pageName = {'vegetable'}
            subNav={'shop'}
        />
        <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
            <BlogTop 
                gridColSize={true}
            />
            <div className={`min-w-full grid  grid-cols-12 gap-16 min-h-96 m-0 mt-10`}>
                <ProductFilter />
                <Products />
            </div>
            <div className={`grid grid-cols-12 min-w-full`}>
                <Pagination />
            </div>
        </div>
    </section>
  )
}
export default Shops