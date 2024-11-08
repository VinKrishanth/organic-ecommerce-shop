import React from 'react'

function Comment({sourceURL, name, updateDate, comment ,index, singleUse}) {
  return (
    <div key={index} className={`flex justify-between items-start gap-4`}>
        <figure className={`flex justify-center items-start min-h-10 min-w-10 rounded-full border-white cursor-pointer border-2 hover:border-sky-300 transition-all duration-700 ease-linear delay-100`}>
            <img 
                src={sourceURL}  
                alt='single blog source' 
                className={`object-cover object-center hover:opacity-75 transition-all duration-300 ease-linear`} 
            />
        </figure>
        <div className={`flex flex-col justify-start items-start`}>
            <div className={`flex justify-start  ${singleUse ? 'flex-col items-start ' : 'flex-row items-center  gap-4'}`}>
                <h2 className={`text-sm font-medium text-Gray90 text-left align-top tracking-normal leading-6 cursor-pointer hover:text-Primary  transition-all duration-500 ease-linear delay-75`}>{name}</h2>
                    <div className={`flex justify-between items-center `}>
                    {singleUse &&  <p className={`text-sm font-normal text-Gray60 text-justify align-top tracking-normal leading-6 cursor-pointer hover:text-opacity-90 transition-all duration-500 ease-linear delay-75 pr-4`}>{comment}</p> }
                        <ul className={`flex justify-start items-center list-disc pl-2 text-Gray90`}>
                            <li className={`text-sm font-normal text-Gray40 text-left align-top tracking-normal leading-6 cursor-pointer hover:text-Primary hover:scale-90 transition-all duration-500 ease-linear delay-75 `}>{updateDate}</li>
                        </ul>
                    </div>
            </div>
           {!singleUse && <p className={`text-sm font-normal text-Gray60 text-justify align-top tracking-normal leading-6 cursor-pointer hover:text-opacity-90 transition-all duration-500 ease-linear delay-75`}>{comment}</p>} 
        </div>
    </div>
  )
}

export default Comment