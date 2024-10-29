import React from 'react'
import bigSource from '../../../../assets/Product/big-apple.svg'
import QuickViewBlack from '../../../../assets/Icons/Eye-black.svg'
import QuickViewWhite from '../../../../assets/Icons/Eye-white.svg'
import TagsButton from '../../../Button/TagsButton'
import GhostButton from '../../../Button/GhostButton'
import WishlistButton from '../../../Button/WishlistButton'
import QuickViewButton from '../../../Button/QuickViewButton'

function BigImage() {
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
    <div className={`min-w-full min-h-[446px] relative px-8 overflow-hidden`}>
        <figure className={`flex  justify-center items-center pt-8`}>
            <img src={bigSource} alt='' className={`object-cover object-center cursor-pointer hover:scale-105 transition-all duration-500 ease-linear delay-100`} />
        </figure>
        <div className='flex justify-center items-center absolute z-20 top-0 left-0 p-8 gap-2 '>
            <TagsButton 
                key={1}
                Type={'Default'}
                label={'sale 50%'}
                onClick={handleSaleClick}
                tagStyle={'hover:scale-95 transition-all duration-500 ease-linear delay-100'}
            />
            <TagsButton 
                key={2}
                Type={'BestSale'}
                onClick={handleBestSaleClick}
                tagStyle={'hover:scale-95 transition-all duration-500 ease-linear delay-100'}
            />
        </div>
        <div className={`flex justify-between items-center absolute bottom-0 max-w-full  gap-4`}>
            <WishlistButton 
                onClick={handleWishlistClick}
            />
            <GhostButton 
                btnStyle={`flex-grow`}
                label={`Add to Cart`}
                minHight={`min-h-[45px]`}
                minWidth={`min-w-[345px]`}
                textHover={true}
                textSize={'text-base'}
                onClick={handleAddCardClick}
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