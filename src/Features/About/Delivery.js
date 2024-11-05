import React  from 'react'
import Service from './Components/Service'
import {DeliveryBGSource} from '../../assets/About/index.js'

function Delivery() {
  return (
    <section  className={`flex justify-end items-start min-w-screen min-h-[685px] bg-Gray05 bg-opacity-10 relative pl-64 my-16`}>
      <div className={`flex justify-start items-start flex-col px-32 max-w-[60%] py-16 gap-8 pl-4 `}>
        <h1 className={`text-5xl tracking-normal  font-semibold capitalize text-Gray90 max-w-[75%] cursor-pointer`}>100% Trusted Organic Food Store</h1>
        <p className={`text-base tracking-normal leading-6 align-top font-normal text-Gray50 text-justify cursor-pointer max-w-[75%] `}>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
        <Service />
      </div>
      <figure className={`absolute top-0 left-0 -z-10`}>
        <img src={DeliveryBGSource} alt='The right icon' className={`object-cover object-center cursor-pointer`} />
      </figure>
    </section>
  )
}

export default Delivery