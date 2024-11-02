import React from 'react'
import LogoP from '../../../assets/Header/plant-logo.svg'

function Logo({textColor , deviceSize}) {
  return (
    <div className={`flex gap-2 ${deviceSize? '' : 'justify-center items-center '}`}>
        <figure className={``}>
            <img src={LogoP} alt='3legant Logo' className={`object-cover object-center min-w-8 min-h-8 cursor-pointer`} />
        </figure>
        <h1 className={`text-4xl font-medium leading-9 -tracking-wide ${textColor ? 'text-white' : 'text-greenGray90'}  cursor-pointer`}>Ecobazar</h1>
    </div>
  )
}

export default Logo