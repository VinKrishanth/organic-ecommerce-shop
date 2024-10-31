import React from 'react'

function Timer({timeValue, timeDescription, dotValue, timerStyle}) {
  
  return ( 
    <div className={`flex  flex-col gap-2 ${timerStyle ? 'bg-gray-2000 min-h-16 min-w-16 items-start' : 'min-h-24  min-w-24 bg-white justify-center items-center'}   bg-opacity-100 rounded-md relative cursor-pointer  transition-all duration-700 ease-linear delay-150 hover:scale-90`}

    >
       <div className={`flex flex-col text-center gap-2`}>
            <h2 className={` ${timerStyle ? 'text-2xl ' : 'text-3xl '}font-normal leading-5 tracking-normal align-top text-Primary`}>{timeValue}</h2>
            <p className={`${timerStyle ? 'text-xs ' : 'text-sm  '} text-sm font-medium leading-5 tracking-wide align-top uppercase`}>{timeDescription}</p>
       </div>
       {
        !dotValue && (
            <div className={`flex  flex-col  justify-end items-end absolute  ${timerStyle ? ' top-3 left-12 gap-2' : ' top-10 left-28 gap-4'}`}>
                <div className='min-h-1 min-w-1 bg-Gray90 rounded-full'></div>
                <div className='min-h-1 min-w-1 bg-Gray90 rounded-full'></div>
            </div>
        )
       }
    </div>
  )
}

export default Timer