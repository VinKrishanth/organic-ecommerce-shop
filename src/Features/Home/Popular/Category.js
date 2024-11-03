import React, {  useEffect, useState } from 'react'
import PopularCart from '../../../Components/Cards/Category/PopularCart'
import CategoryItems from './Components/CategoryItems'
import MainTitle from '../../../Components/Title/MainTitle';

function Category() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: '',
        dxl: '2xl:px-32 2xl:py-16',
        xl: 'xl:py-16',
        lg: 'lg:min-w-screen ',
        md: 'md:py-10 ',
        sm:' sm:px-16 sm:py-10  ',
        base: 'min-w-full p-10'
    }

  return (
    <section className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
      <MainTitle />
      <div className={`grid  ${deviceSize ? 'grid-cols-2 sm:grid-cols-3' : 'xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4'}`}>
        {
          CategoryItems.map((item, index)=> {
            return(
              <div key={index} className={`col-span-1 2xl:p-4 p-2` }>
                <PopularCart 
                  ID ={item.ID} 
                  sourceURL ={item.sourceURL} 
                  sourceAtl ={item.sourceAlt} 
                  productName = {item.Name}
                />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Category