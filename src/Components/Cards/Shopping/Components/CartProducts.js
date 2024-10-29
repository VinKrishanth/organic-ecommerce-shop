import React from 'react';
import CloseButton from '../../../../Components/Button/CloseButton';

function CartProducts({ sourceSRC, sourceAlt, productName, productPrice, onClick }) {
  return (
    <div className={`product-item flex justify-between overflow-hidden border-b-2 mb-4`}>
      <figure className={`max-h-[100px] max-w-[120px] hover:scale-110 duration-500 ease-linear`}>
        <img src={sourceSRC} alt={sourceAlt} className='object-cover object-center' />
      </figure>
      <div className={`flex-grow flex flex-col justify-center items-start text-left gap-[2px] relative`}>
        <h2 className='text-sm font-normal leading-5 tracking-normal align-top cursor-pointer capitalize'>
          {productName}
        </h2>
        <p className='text-Gray40 text-sm font-normal leading-5 tracking-normal align-top cursor-pointer'>
          <span>1kg </span> x <span className='product-price text-Gray90 font-semibold leading-4'>${productPrice}</span>
        </p>
        <CloseButton btnStyle={`absolute right-0`} onClick={onClick} />
      </div>
    </div>
  );
}

export default CartProducts;
