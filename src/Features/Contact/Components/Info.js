import React, { useState } from 'react'

function Info({sourceMainURL, sourceHoverURL, title, index, unique} ) {
    const [textHover, setTextHover] = useState(false);
  return (
    <div 
        key={index}
        className={`flex flex-col col-span-1 justify-center items-center border-b-2 pb-4 gap-2`}
        onMouseOut={()=>{setTextHover(false)}}
        onMouseOver={()=>{setTextHover(index)}}
    >
        <figure className={`flex justify-center items-center w-[51px] h-[51px]`}>
            <img 
                src={textHover === index ? sourceHoverURL : sourceMainURL}
                alt='The source information' 
                className={`object-cover object-center cursor-pointer `}
            />
        </figure>
        {unique && <p className={`text-base text-center align-top tracking-normal hover:text-textSuccessDark transition-all duration-700 ease-linear delay-75 `}>
            {title}
        </p>}
        {
          !unique &&  (<p className={`text-base text-center align-top tracking-normal hover:text-textSuccessDark transition-all duration-700 ease-linear delay-75 max-w-[50%]`}>
                {title}
            </p>)
        }
    </div>
  )
}

export default Info