import React from 'react'
import CardButton from '../../../Button/CardButton'
import QuickViewButton from '../../../Button/QuickViewButton'
import WishlistButton from '../../../Button/WishlistButton'
import {bagBlack, EyeWhite, EyeBlack, heardWhite, heardBlack, bagWhite} from '../../../../assets/Icons/IconsItems'
import {handleWishlistClick, handleQuickClick, handleCardClick} from '../../../Js/productNormalFunction'

function ProductNormalButton() {
  return (
    <div className={`flex  scale-90 justify-start items-start gap-4 min-w-full mim-w-full`}>
        <CardButton 
            ButtonHover={`hover:bg-Primary`}
            HoverIcon={bagWhite}
            Icon={bagBlack}
            onClick={()=>{handleCardClick()}}
        />
        <QuickViewButton 
            ButtonHover={`hover:bg-Primary`}
            HoverIcon={EyeWhite}
            Icon={EyeBlack} 
            onClick={()=>{handleQuickClick()}}
        />
        <WishlistButton 
            HoverIcon={heardWhite}
            Icon={heardBlack} 
            onClick={()=>{handleWishlistClick()}}
        />
    </div>
  )
}

export default ProductNormalButton