import React from 'react'

function BillingAddress() {
  return (
    <div className={`col-span-4 max-h-[278px]  border-2 rounded-xl p-8`}>
         <div className={`flex flex-col justify-start items-start`}>
            <h1 className={`text-sm text-Gray60 font-medium tracking-wide leading-4 uppercase cursor-pointer hover:translate-x-2 duration-700 ease-linear delay-100`}>Billing Address</h1>
            <div className={`flex  flex-col justify-start items-start`}>
                <h2 className={`text-lg text-Gray90  font-medium tracking-normal leading-6 capitalize cursor-pointer hover:translate-x-2 duration-700 ease-linear delay-100`}>Dainne Russell</h2>
                <p className={`text-sm text-Gray60 font-normal tracking-normal leading-6 capitalize cursor-pointer hover:translate-x-2 duration-700 ease-linear delay-100`}>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p className={`text-sm font-medium tracking-wide leading-4 lowercase cursor-pointer hover:translate-x-2 duration-700 ease-linear delay-100`}>dainne.ressell@gmail.com</p>
                <p className={`text-sm font-medium tracking-wide leading-4 uppercase cursor-pointer hover:translate-x-2 duration-700 ease-linear delay-100`}>(671) 555-0110</p>
            </div>
            <p className={`text-base font-medium tracking-wide leading-4 capitalize cursor-pointer hover:translate-x-2 duration-700 ease-linear delay-100 text-Primary`}>Edit Address</p>
         </div>
    </div>
  )
}

export default BillingAddress