import React from 'react'

function MainCenter({Title, Subtitle}) {
  return (
    <div className={`flex flex-col justify-center items-center xl:py-8 sm:py-6 py-4  mb-8`}>
        <p className='text-sm uppercase  font-medium tracking-normal leading-5 align-top hover:translate-x-2 hover:scale-110 duration-700 ease-linear delay-100 cursor-pointer text-center text-Primary'>{Subtitle}</p>
        <h1 className='2xl:text-4xl sm:text-2xl md:text-3xl text-lg font-semibold tracking-normal leading-5 align-top hover:translate-x-2 hover:scale-110 duration-700 ease-linear delay-100 cursor-pointer text-center'>{Title}</h1>
    </div>
  )
}

export default MainCenter