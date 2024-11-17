import React, {useEffect, useState } from 'react'
import HeroDefault from '../../Home/Hero/HeroDefault';
import HeroSource from '../IceCream/Components/HeroSource.js';
import MoreProductLikeThis from '../../../Containers/MoreProductLikeThis.js';
import MainTitle from '../../../Components/Title/MainTitle.js';
import MeatDB from './Components/MeatDB.js'

function Meats() {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
  useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [deviceSize]); 

  const customerStyle = {
      container: 'pb-32  pt-16',
      dxl: '2xl:px-16 ',
      xl: '',
      lg: 'lg:min-w-screen ',
      md: '',
      sm:' sm:px-16  ',
      base: 'min-w-full '
  }

  return (
    <div className={`flex flex-col justify-start items-start min-w-full`}>
      <div className={`flex justify-start items-start min-w-full`}>
        <HeroDefault 
          HeroSourceTitle={HeroSource} 
          mainHeading={`Fresh & Healthy Organic Food`} 
          subHeading={`30%`}
        />
      </div>
      <div  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
        <div className={`flex flex-col justify-start items-start min-w-full`}>
          {/* <MainTitle 
            Title={`Popular Products`}
            addStyle={`min-w-full`}
          /> */}
          <div className={`grid 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-0 gap-8 min-w-full`}>
            {/* {
              IceCreamsDB.map((item, index)=> {
                return(
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
              })
            } */}
          </div>
        </div>
        <MoreProductLikeThis 
          Title={`More product like this`}
          productSource={MeatDB}
        />
      </div>
    </div>
  )
}

export default Meats