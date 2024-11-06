import React from 'react'

function Page({active, pageNumber }) {
  return (
    <div key={pageNumber} className={`flex justify-center items-center min-h-9 min-w-9 col-span-1  ${active ? 'bg-Primary text-white' : 'bg-Gray05 text-Gray60 '}  rounded-full   transition-all duration-300 ease-linear  cursor-pointer`}>
        <p className={`text-base  align-top font-normal leading-6 tracking-normal `}>{pageNumber}</p>
    </div>
  )
}

export default Page