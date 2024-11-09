import React from 'react'

function TextAreaInput({onChange, placeholder, index, name, value}) {
  return (
    <div 
        className={`flex justify-start items-start min-w-full`}
        id={index}
    >
        <textarea
            placeholder={placeholder}
            className={`min-w-full p-4 row-4 col-1 border-2 focus:outline-none focus:border-Primary rounded-lg  `}
            onChange={onChange}
            name={name}
            value={value}
        >
        </textarea>
    </div>
  )
}

export default TextAreaInput