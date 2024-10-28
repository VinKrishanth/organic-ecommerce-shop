import React, { useEffect, useState } from 'react'
import ShoppingButton from './Components/ShoppingButton';
import Apple from '../../../assets/Product/apple.svg'
import Lemon from '../../../assets/Product/lemon.svg'
import CartProducts from './Components/CartProducts'

function ShoppingCartPopup() {
  var [productData, setProductData] = useState({
    productCount : '',
    subTotal : ''
  });

  useEffect(()=> {
    const count = document.querySelectorAll('.product-list .product-item');
    const total = document.querySelectorAll('.product-list .product-item .product-price');
     
    let subTotalValue = null;
    total.forEach((item ) => {
      subTotalValue += parseFloat(item.textContent);
    })

    setTimeout(()=>{
      setProductData({
        productCount: count.length,
        subTotal: parseFloat(subTotalValue).toFixed(2)
      });
    }, 1000)
  }, []);

  const handleCheckout = () => {
    console.log(`handle checkout`)
  };

  const handleGoToCard = () => {
    console.log(`handle Go to card`)
  };
  
  return (
    <div className={`flex flex-col justify-start items-center max-w-[424px] min-h-[466px] border-2 m-32 px-8 overflow-hidden relative rounded-md shadow-lg `}>
      <div className={`product-list min-w-full pt-4`}>
        <CartProducts 
           productName={`Fresh Indian Orange`}
           productPrice={`72.00`}
           sourceSRC={Lemon}
           sourceAlt={`The Product Lemon`}
           key={1}
        />

        <CartProducts 
          productName={`Green Apple`}
          productPrice={`14.00`}
          sourceSRC={Apple}
          sourceAlt={`The Product Apple`}
          key={2}
        />
        
      </div>
      <div className={`min-w-full flex justify-between items-center min-h-14 border-b-2 mb-8`}>
        <p className='text-base font-normal align-top tracking-normal leading-5 text-left hover:translate-x-2 duration-500  ease-linear delay-100 cursor-pointer '><span className=''>{productData.productCount}</span> Product</p>
        <p className='text-right font-semibold text-base align-top tracking-normal leading-5 hover:-translate-x-2 duration-500  ease-linear delay-100 cursor-pointer '>$<span className=''>{productData.subTotal}</span></p>
      </div>
      <ShoppingButton 
        handleGoToCard = {handleGoToCard}
        handleCheckout= {handleCheckout}
      />
    </div>
  )
}

export default ShoppingCartPopup