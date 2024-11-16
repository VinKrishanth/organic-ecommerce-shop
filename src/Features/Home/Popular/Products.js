import React, {  useEffect, useState } from 'react'
import MainTitle from '../../../Components/Title/MainTitle';
import  ProductItems from './Components/ProductItems.js'
import ProductCard from '../../../Components/Cards/Product/ProductCard'

function Products() {
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
    <section className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
      <MainTitle 
        Title={`Popular Products`}
      />
      <div className={`grid 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-0 gap-8`}>
        {
          ProductItems.map((item, index)=> {
            return(
              !item.isNew && (
                <div key={index} className={`col-span-1` }>
                    <ProductCard 
                      Price={item.Price}
                      cardSourceAlt={item.cardSourceAlt}
                      sourceURL={item.cardSourceURL}
                      name={item.cardTitle}
                      discountPrice={item.discountPrice}
                      offer={item.offer}
                      id={item.productID}
                      viewRate={item.viewRate}
                      btnLabel={item.btnLabel}
                      key={item.productID}
                      stock={item.stock}
                    />
                </div>
              )
            )
          })
        }
      </div>
    </section>
  )
}

export default Products