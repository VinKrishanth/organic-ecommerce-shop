import React  from 'react'
import Account from './Component/Account'
import User from './Component/User'


function AccountSetting() {
    const customerStyle = {
        textHover: 'transition-all duration-500 ease-linear hover:translate-x-14 hover:scale-110'
    }
  return (
    <div className={`flex justify-start flex-col items-start col-span-9 min-h-[533px] border-2 rounded-xl gap-8`}>
       <div className='min-w-full p-8 border-b-2' >
            <h1 className={`text-xl font-medium text-left align-top tracking-normal leading-6 text-Gray90 cursor-pointer ${customerStyle.textHover}`}>Account Settings</h1>
       </div>
       <div className={`min-w-full grid grid-cols-9`}>
          <User />
          <Account />
       </div>
    </div>
  )
}

export default AccountSetting