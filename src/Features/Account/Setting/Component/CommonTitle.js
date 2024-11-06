import React from 'react'

function CommonTitle({TitleName, textStyle}) {
  return (
    <div className='min-w-full p-8 border-b-2' >
        <h1 className={`text-xl font-medium text-left align-top tracking-normal leading-6 text-Gray90 cursor-pointer ${textStyle}`}>{TitleName}</h1>
    </div>
  )
}

export default CommonTitle