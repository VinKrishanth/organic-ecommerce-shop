import React from 'react'

function Timer({textStyle, timeCount, timeDescription}) {
  return (
    <ul className='flex flex-col justify-center items-center min-w-[60px] min-h-[37px] relative '>
        <li className='text-lg font-medium tracking-normal leading-5 text-center text-Gray90 cursor-pointer'>{timeCount}</li>
        <li className='uppercase text-[10px] font-medium text-left align-top -tracking-tighter cursor-pointer'>{timeDescription}</li>
       {
        textStyle && (
            <li className='flex flex-col absolute right-0 max-h-full scale-50 gap-5'> 
                <div className='min-h-2 min-w-2 bg-Gray40 rounded-full '></div>
                <div className='min-h-2 min-w-2 bg-Gray40 rounded-full '></div>
            </li>
        )
       }
    </ul>
  )
}

export default Timer