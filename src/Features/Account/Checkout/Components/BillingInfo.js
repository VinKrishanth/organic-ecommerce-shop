import React, { useState } from 'react'
import Billing from '../../Setting/Component/Billing'
import TextAreaInput from '../../../../Components/Input/TextAreaInput'

function BillingInfo() {
  const [formData, setFormData] =  useState('');

  return (
    <div className={`flex flex-col justify-start items-start min-w-full rounded-xl gap-8 border-2 p-8`}>
       <div className='flex flex-col justify-start items-start min-w-full gap-4'>
          <div className={`flex justify-start items-start`}>
            <h1 className={`text-2xl font-medium text-left tracking-normal align-top leading-6 text-Gray90 cursor-pointer hover:text-textSuccessDark transition-all duration-700 ease-linear delay-150`}>Billing Information</h1>
          </div>
          <Billing 
            isVisibleSaveButton={true}
            billingStyle={true}
          />
          <div className={`flex justify-start items-start border-b-2 min-w-full p-0 pb-2`}>
            <div className={`flex justify-start items-center py-2 gap-2`}>
              <input type='checkbox' className='min-w-5 min-h-5 border-Gray05'/>
              <label className={`text-sm font-normal align-top text-left tracking-normal leading-6 text-Gray70 cursor-pointer`} > Ship to a different address</label>
            </div>
          </div>
       </div>
       <div className={`flex flex-col justify-start items-start min-w-full gap-4 `}>
          <div className={`flex justify-start items-start p-0 pb-2`}>
            <h1 className={`text-2xl font-medium text-left tracking-normal align-top leading-6 text-Gray90 cursor-pointer hover:text-textSuccessDark transition-all duration-700 ease-linear delay-150`}>Additional Info</h1>
          </div>
          <div className={`flex flex-col justify-start items-start min-w-full gap-2`}>
            <label className={`text-sm font-normal leading-6 tracking-normal align-top text-Gray90 text-left cursor-pointer`}>Order Notes (Optional)</label>
            <TextAreaInput 
              placeholder={`Notes about your order, e.g. special notes for delivery`}
              name={'formData'}
              value={formData}
              onChange={(e)=>{setFormData(e.target.value)}}
            />
          </div>
       </div>
    </div>
  )
}

export default BillingInfo