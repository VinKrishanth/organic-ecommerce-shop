import React from 'react'
import demoBilling from './Table/demoBilling.js'
function BillingShipping() {
  return (
    <div className={'flex justify-start rounded-lg col-span-6 max-h-72 min-h-[280px] ml-8 duration-700 transition-all ease-linear delay-200'}>
      <div className={`flex justify-between items-start min-w-full min-h-full`}>
        {demoBilling.map((data, index) => {
          return(
            <table key={index} className={`flex-1 flex justify-start flex-col items-start max-w-[50%] min-h-full border-2`}>
              <thead className={`flex flex-col justify-start items-start min-h-full border-b-2  min-w-full p-4`}>
                <tr className={`flex justify-start items-center`}> 
                  <th className={`text-sm font-medium leading-4 tracking-wide align-top text-Gray40 uppercase hover:scale-90 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>{data.Title}</th>
                </tr>
              </thead>
              <tbody className={`flex-grow flex flex-col justify-start items-start min-h-full p-4 `}>
                <tr className={`flex flex-col justify-start items-start min-h-full gap-2`}>
                  {
                    data.userName && (
                      <td className={`flex flex-col justify-start items-start `}>
                        <h1 className={`text-base font-normal leading-6 tracking-normal align-top text-Gray90 capitalize  hover:scale-90 transition-all  duration-700 ease-linear delay-100 cursor-pointer`}>{data.userName}</h1>
                        <p className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray40 capitalize hover:scale-90 transition-all duration-700 ease-linear delay-100 cursor-pointer max-w-[80%]`}>{data.address}</p>
                      </td>
                    )
                  }
                  <td className={`flex flex-col justify-start items-start `}>
                    <h1 className={`text-xs font-medium leading-6 tracking-wide align-top text-Gray40 uppercase hover:scale-90 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>{data.emailLabel}</h1>
                    <p className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray90 lowercase hover:scale-90 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>{data.emailAddress}</p>
                  </td>
                  <td className={`flex flex-col justify-start items-start `}>
                    <h1 className={`text-xs font-medium leading-6 tracking-wide align-top text-Gray40 uppercase hover:scale-90 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>{data.phoneLabel}</h1>
                    <p className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray90 capitalize hover:scale-90 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>{data.phoneNumber}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>
    </div>
  )
}

export default BillingShipping