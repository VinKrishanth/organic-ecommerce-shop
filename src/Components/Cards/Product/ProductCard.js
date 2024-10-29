import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import PriceText from '../../Text/PriceText';
import CardButton from '../../../Components/Button/CardButton';
import BagWhite from '../../../assets/Icons/bag-white.svg';
import BagBlack from '../../../assets/Icons/bag-black.svg';
import QuickIcon from '../../../assets/Icons/Eye-white.svg';
import QuickIconHover from '../../../assets/Icons/Eye-black.svg';
import TagsButton from '../../Button/TagsButton';
import WishlistButton from '../../Button/WishlistButton';
import QuickViewButton from '../../Button/QuickViewButton';
import Stars from '../../Star/Stars';

import {
  handleClickCard,
  handleClickSale,
  handleClickWishlist,
  handleClickQuickView
} from '../../Js/productCardFunctions'; 

function ProductCard({ cardTitle, discountPrice, Price, offer, cardSourceAlt, cardSourceURL, btnLabel, viewRate , productID }) {
  const [textHover, setTextHover] = useState(false);

  return (
    <div 
      className={`max-w-[264px] min-h-[327px] m-8 border-[1px] shadow-md rounded relative transition-all duration-500 ease-linear delay-75 ${textHover ? 'border-sky-300' : 'border-white'} overflow-hidden`}
      onMouseOut={() => setTextHover(false)}
      onMouseOver={() => setTextHover(true)}
      id={productID}
    >
      {offer && (
        <TagsButton 
          Type="Default"
          onClick={handleClickSale}
          tagStyle="absolute text-xs scale-75 top-1 left-0 z-20"
          label={btnLabel}
        />
      )}
      <div className='flex flex-col absolute right-0 top-0 z-20 py-2 px-4'>
        <WishlistButton 
          btnStyle="scale-75 m-0 hover:translate-y-2 transition-all duration-500 ease-linear"
          onClick={handleClickWishlist}
        />
        <QuickViewButton 
          ButtonHover={true}
          HoverIcon={QuickIcon}
          Icon={QuickIconHover}
          cardStyle="scale-75 m-0 hover:translate-y-2 transition-all duration-500 ease-linear"
          onClick={handleClickQuickView}
        />
      </div>
      <figure className='flex justify-center items-center min-w-full cursor-pointer hover:scale-105 transition-all duration-500 ease-linear'>
        <img src={cardSourceURL} alt={cardSourceAlt} className='object-cover object-center' />
      </figure>
      <div className='relative p-4'>
        <h1 className='text-sm leading-5 tracking-normal font-normal text-left align-top cursor-pointer'>{cardTitle}</h1>
        <PriceText 
          Price={Price}
          discountPrice={discountPrice}
          textSize='text-base text-xs'
        />
        <Stars 
          starCount={viewRate}
          starStyle='scale-105 pl-1 hover:translate-x-2 transition-all duration-500 ease-linear'
        />
        <CardButton 
          ButtonHover={true}
          Icon={BagBlack}
          HoverIcon={BagWhite}
          cardStyle='absolute right-4 top-4 z-20 scale-75 hover:translate-y-2 transition-all duration-500 ease-linear'
          onClick={() => handleClickCard(Price, cardTitle, cardSourceURL, productID)}
        />
      </div>
    </div>
  );
}


ProductCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  discountPrice: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired,
  offer: PropTypes.bool.isRequired,
  cardSourceAlt: PropTypes.string.isRequired,
  cardSourceURL: PropTypes.string.isRequired,
  btnLabel: PropTypes.string,
  viewRate: PropTypes.number.isRequired,
};

export default ProductCard;
