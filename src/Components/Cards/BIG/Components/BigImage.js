import React from 'react'
import bigSource from '../../../../assets/Product/big-apple.svg'
import QuickViewBlack from '../../../../assets/Icons/Eye-black.svg'
import QuickViewWhite from '../../../../assets/Icons/Eye-white.svg'
import TagsButton from '../../../Button/TagsButton'
import GhostButton from '../../../Button/GhostButton'
import WishlistButton from '../../../Button/WishlistButton'
import QuickViewButton from '../../../Button/QuickViewButton'

function BigImage(textHoverPro) {
    const handleSaleClick = () =>{
        console.log(`Sale click `);
    }

    const handleBestSaleClick = () =>{
        console.log(`Best sale click `);
    }

    const handleWishlistClick = () =>{
        console.log(`Wishlist click `);
    }

    const handleAddCardClick = () =>{
        console.log(`Add Card click `);
    }

    const handleQuickClick = () =>{
        console.log(`Quick click `);
    }

  return (
    <div className={`sm:min-w-full sm:min-h-[446px] relative sm:px-8 overflow-hidden`}>
        <figure className={`flex  justify-center items-center pt-8`}>
            <img src={bigSource} alt='' className={`object-cover object-center cursor-pointer hover:scale-105 transition-all duration-500 ease-linear delay-100 `} />
        </figure>
        <div className='flex justify-center items-center absolute z-20 top-0 left-0 sm:p-8 p-4 gap-4 '>
            <TagsButton 
                key={1}
                Type={'Default'}
                label={'sale 50%'}
                onClick={handleSaleClick}
                tagStyle={'hover:scale-95 transition-all duration-500 ease-linear delay-100 sm:scale-110 scale-90'}
            />
            <TagsButton 
                key={2}
                Type={'BestSale'}
                onClick={handleBestSaleClick}
                tagStyle={'hover:scale-95 transition-all duration-500 ease-linear delay-100  '}
            />
        </div>
        <div className={`flex justify-between items-center gap-2 max-w-full sm:scale-100 scale-90 xl:pb-0  pb-4`}>
            <WishlistButton 
                onClick={handleWishlistClick}
            />
            <GhostButton 
                btnStyle={`flex-grow`}
                label={`Add to Cart`}
                minHight={`min-h-[45px] `}
                minWidth={`sm:min-w-[345px] `}
                textHover={true}
                textSize={'2xl:text-base'}
                onClick={handleAddCardClick}
                textHoverPro={textHoverPro}
            />
            <QuickViewButton 
                ButtonHover={true}
                cardStyle={`bg-Primary`}
                HoverIcon={QuickViewWhite}
                Icon={QuickViewBlack}
                onClick={handleQuickClick}
            />
        </div>
    </div>
  )
}

export default BigImage