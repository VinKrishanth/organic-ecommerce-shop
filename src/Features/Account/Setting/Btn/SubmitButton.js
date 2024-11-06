import React from 'react'

function SubmitButton({Title}) {
  return (
    <div className={`flex justify-center items-center min-w-40 min-h-11 bg-Primary hover:bg-PrimaryHover text-white hover:text-opacity-75 transition-all duration-700 delay-100 ease-linear  rounded-full`}>
        <button 
            type='submit'
            className={`text-sm font-semibold align-top tracking-normal leading-6 min-h-full min-w-full`}
        >
            {Title}
        </button>
    </div>
  )
}

export default SubmitButton