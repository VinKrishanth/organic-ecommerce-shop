import React from 'react'
import NormalButton from '../../../../Components/Button/NormalButton'
import GhostButton from '../../../../Components/Button/GhostButton'


function ShoppingButton({ handleCheckout , handleGoToCard}) {
  return (
    <div className={`min-w-full flex flex-col gap-2 `}>
        <NormalButton 
          label={`Checkout`}
          minWidth={`min-w-full`}
          minHight={`min-h-[45px]`}
          textSize={'text-base'}
          onClick={handleCheckout}
        />
        <GhostButton 
          label={`Go To Cart`}
          minWidth={`min-w-full`}
          minHight={`min-h-[45px]`}
          textSize={'text-base'}  
          onClick={handleGoToCard}         
        />
    </div>
  )
}

export default ShoppingButton