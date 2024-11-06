import React from 'react'
import CommonTitle from './Component/CommonTitle'
import Password from './Component/Password'

function ChangePassword() {
    const customerStyle = {
        textHover: 'transition-all duration-500 ease-linear hover:translate-x-14 hover:scale-110'
    }
  return (
    <div className={`flex justify-start flex-col items-start col-span-9 min-h-[333px] border-2 rounded-xl gap-8`}>
       <CommonTitle 
         TitleName={'Change Password'}
         textStyle={customerStyle.textHover}
       />
       <div className={`min-w-full grid grid-cols-9`}>
            <Password />
       </div>
    </div>
  )
}

export default ChangePassword