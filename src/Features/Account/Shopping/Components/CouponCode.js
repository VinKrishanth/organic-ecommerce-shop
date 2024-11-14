import React from 'react'
import TextInputSearch from '../../../../Components/Input/TextInputSearch'

function CouponCode() {
  return (
    <div className={`flex justify-start items-start min-w-full min-h-24 p-8 border-2 rounded-xl`}>
        <div className={`flex justify-between gap-8 items-center min-w-full`}>
            <h1 className={`text-xl tracking-normal leading-6 font-medium cursor-pointer text-left align-top`}>Coupon Code</h1>
            <div className={`flex justify-start items-start flex-grow`}>
                <TextInputSearch 
                    placeholder={`Enter code`}
                    inputIcon={true}
                    inputStyle={true}
                    label={`Apply Coupon`}
                    searchStyle={true}
                />
            </div>
        </div>
    </div>
  )
}

export default CouponCode