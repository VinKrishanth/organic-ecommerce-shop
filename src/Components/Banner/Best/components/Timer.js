import React from 'react'

function Timer({timeValue, timeDescription, dotValue}) {
  
  return (
    <div className='flex justify-center items-center flex-col gap-2  min-h-24  min-w-24 bg-white bg-opacity-100 rounded-md relative cursor-pointer  transition-all duration-700 ease-linear delay-150 hover:scale-90 hover:bg-sky-300'

    >
       <div className={`flex flex-col text-center gap-2`}>
            <h2 className={`text-3xl font-normal leading-5 tracking-normal align-top text-Primary`}>{timeValue}</h2>
            <p className={`text-sm font-medium leading-5 tracking-wide align-top uppercase`}>{timeDescription}</p>
       </div>
       {
        !dotValue && (
            <div className={`flex  flex-col gap-4 justify-end items-end absolute top-10 left-28`}>
                <div className='min-h-1 min-w-1 bg-Gray90 rounded-full'></div>
                <div className='min-h-1 min-w-1 bg-Gray90 rounded-full'></div>
            </div>
        )
       }
    </div>
  )
}

export default Timer