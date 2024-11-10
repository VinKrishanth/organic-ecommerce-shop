import React from 'react'

function TackerButton({title, subTitle ,sourceURL, textStyle ,state , index}) {
  return (
    <div key={index} className={`flex flex-col justify-center items-center`}>
        <div className={`flex flex-col justify-center items-center min-h-10 min-w-10 rounded-full cursor-pointer  ${textStyle}`}>
            {subTitle && <p className={'text-sm font-medium leading-10 align-top'}>{subTitle}</p> }
            {sourceURL && <img src={sourceURL} alt='The check icon' className={`object-cover object-center`} />}
        </div> 
        {
          !title && (
            <h2 className={`text-sm  tracking-normal ${state === `active` && 'font-medium text-PrimaryHover'} ${state === `visited` && 'font-normal text-Primary'}  leading-6 align-top cursor-pointer hover:scale-110 transition-all duration-700 ease-linear `}>{title}</h2>
          )
        }  
        
    </div>
  )
}

export default TackerButton