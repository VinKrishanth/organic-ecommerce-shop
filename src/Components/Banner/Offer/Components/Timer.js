import React from 'react'
import { redirectDocument } from 'react-router-dom'

function Timer({timeValue, timeDescription, dotValue}) {
  return (
    <div className='flex justify-start items-end flex-col gap-2 relative  pr-4 min-h-9 max-w-8'>
        <h1 className='font-normal text-xl leading-4 tracking-widest  align-top uppercase cursor-pointer '>{timeValue}</h1>
        <p className='font-normal text-xs leading-4 tracking-widest  align-top uppercase cursor-pointer'>{timeDescription}</p>
        {
            !dotValue && (
                <div className='flex flex-col  gap-4 absolute right-0 top-1 scale-50 '>
                    <div className='min-h-1 min-w-1 bg-white rounded-full '></div>
                    <div className='min-h-1 min-w-1 bg-white rounded-full '></div>
                </div>
            )
        }
    </div>
  )
}

export default Timer