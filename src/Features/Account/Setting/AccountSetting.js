import React  from 'react'
import Account from './Component/Account'
import User from './Component/User'
import CommonTitle from './Component/CommonTitle'


function AccountSetting() {
    const customerStyle = {
        textHover: 'transition-all duration-500 ease-linear hover:translate-x-14 hover:scale-110'
    }
  return (
    <div className={`flex justify-start flex-col items-start col-span-9 min-h-[533px] border-2 rounded-xl gap-8`}>
       <CommonTitle 
         TitleName={'Account Settings'}
         textStyle={customerStyle.textHover}
       />
       <div className={`min-w-full grid grid-cols-9`}>
          <User />
          <Account />
       </div>
    </div>
  )
}

export default AccountSetting