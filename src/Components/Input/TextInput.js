import React, { useState } from 'react'

function TextInput({onChange, placeholder, value , type, validationText, SourceURL, SourceAlr, label ,name,  onMouseOver, onMouseOut, inputStyle, readOnly, eyeIcon,onClick}) {
  const [textHover, setTextHover] = useState();
  return (
    <div className='flex flex-col gap-1 min-w-full relative'>
        {
            label && (
                <label className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray90 capitalize`}>
                    {label}
                </label>
            )
        }
        <input 
            name={name}
            type={name === onMouseOver ? onMouseOver : type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={` ${inputStyle ? inputStyle : 'border-2 pl-4 min-h-[49px]'} min-w-full  text-base leading-5 tracking-normal align-top font-normal placeholder-Gray40 focus:outline-none rounded-lg ${textHover && validationText} focus:border-Primary `}
            autoComplete='false'
            onMouseOver={()=>setTextHover(true)}
            onMouseOut={()=>setTextHover(false)}
            readOnly={readOnly}
        />
        {
            SourceURL && (
                <figure 
                    className={`absolute right-0 ${eyeIcon  ? 'top-0' : 'top-6'}  flex justify-center items-center p-4 scale-125 cursor-pointer `}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onClick={onClick}
                >
                    <img src={SourceURL} alt={SourceAlr} className={'object-contain object-center min-w-5 min-h-5'} />
                </figure>
            )
        }
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