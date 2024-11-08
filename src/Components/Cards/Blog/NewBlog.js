import React from 'react'
import {calender} from '../../../assets/Blog/index.js'

function NewBlog({sourceURL, updateDate, index}) {
  return (
    <div key={index} className={`flex justify-between items-center min-h-20 min-w-full gap-4`}>
        <figure className={`min-h-full border-2 rounded-md border-white hover:border-sky-300 overflow-hidden transition-all duration-700 delay-75 ease-linear cursor-pointer`}>
            <img src={sourceURL}  alt='The recently added source' className={`object-cover object-center scale-150`} />
        </figure>
        <div className={`flex flex-col justify-center items-start gap-2 `}>
            <h2 className={`text-base font-medium tracking-normal align-top cursor-pointer max-w-[80%] hover:text-opacity-75 transition-all duration-300 ease-linear`}>Curabitur porttitor orci eget nequ accumsan.</h2>
            <div className={`flex justify-start items-center gap-2 text-sm font-normal text-left align-top text-Gray6 cursor-pointer`}>
                <img src={calender}  alt='The calender source' className={`object-cover object-center hover:scale-110 transition-all duration-500 ease-linear delay-75`} />
                <p className={`text-Gray60 hover:text-Primary cursor-pointer`}>{updateDate}</p>
            </div>
        </div>
    </div>
  )
}

export default NewBlog