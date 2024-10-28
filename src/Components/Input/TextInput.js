import React, { useState } from 'react'

function TextInput({onChange, placeholder, value , type, validationText, SourceURL, SourceAlr}) {
  const [textHover, setTextHover] = useState();
  return (
    <div className='flex flex-col gap-1 m-32 w-[428px] relative'>
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={`border-2 min-w-full min-h-[49px] pl-4 text-base leading-5 tracking-normal align-top font-normal placeholder-Gray40 focus:outline-none rounded-lg ${textHover && validationText}`}
            onMouseOver={()=>setTextHover(true)}
            onMouseOut={()=>setTextHover(false)}
        />
        {
            validationText && (
                <>
                    <label className={`text-sm font-medium leading-5 tracking-normal text-left align-top ${validationText && validationText } pl-2 `}>
                        Validation Warning
                    </label>
                    <figure className={`absolute right-0 flex justify-center items-center p-4 `}>
                        <img src={SourceURL} alt={SourceAlr} className={'object-contain object-center'} />
                    </figure>
                </>
            )
        }
    </div>
  )
}

export default TextInput