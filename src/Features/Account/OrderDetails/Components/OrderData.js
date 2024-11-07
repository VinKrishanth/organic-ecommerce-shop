import React from 'react'
import CommonTitle from '../../Setting/Component/CommonTitle'
import BillingShipping from './BillingShipping'
import CartInfo from './CartInfo'
import ProgressTracker from './ProgressTracker'
import ProductsInfo from './ProductsInfo'

function OrderData() {
    const customerStyle = {
        textHover: 'transition-all duration-500 ease-linear hover:translate-x-14 hover:scale-110'
    }
  return (
    <div className={`flex justify-start flex-col items-start col-span-9 min-h-[825px] border-2 rounded-xl gap-4`}>
       <CommonTitle 
         TitleName={'Order Details'}
         textStyle={customerStyle.textHover}
         buttonTitle={'Back to list'}
         subTitle={true}
       />
       <div className={`min-w-full grid grid-cols-9 py-4 gap-8`}>
            <BillingShipping />
            <CartInfo />
            <ProgressTracker 
                trackerState={'processing'}
            />
            <ProductsInfo />
       </div>
    </div>
  )
}

export default OrderData