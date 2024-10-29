import React, { useEffect, useState } from 'react';
import ShoppingButton from './Components/ShoppingButton';
import products from '../../../Components/Js/productData'; 
import CartProducts from './Components/CartProducts';

function ShoppingCartPopup() {
  const [productData, setProductData] = useState({
    products: products, // Initialize with imported products
    subTotal: 0,
    productCount: 0,
  });

  useEffect(() => {
    const subTotalValue = productData.products.reduce((total, product) => total + product.productPrice, 0);
    const productCountValue = productData.products.length;

    setProductData((prevData) => ({
      ...prevData,
      subTotal: subTotalValue.toFixed(2),
      productCount: productCountValue,
    }));
  }, [productData.products]);

  const handleRemoveProduct = (id) => {
    setProductData((prevData) => ({
      ...prevData,
      products: prevData.products.filter((product) => product.id !== id),
    }));
  };

  const handleCheckout = () => {
    console.log('handle checkout');
  };

  const handleGoToCard = () => {
    console.log('handle Go to card');
  };

  return (
    <div className='flex flex-col justify-start items-center max-w-[424px] min-h-[466px] border-2 m-32 px-8 overflow-hidden relative rounded-md shadow-lg'>
      <div className='product-list min-w-full pt-4'>
        {productData.products.map((product) => (
          <CartProducts
            key={product.id}
            sourceSRC={product.sourceSRC}
            sourceAlt={product.sourceAlt}
            productName={product.productName}
            productPrice={product.productPrice.toFixed(2)}
            onClick={() => handleRemoveProduct(product.id)} // Pass the remove handler
          />
        ))}
      </div>
      <div className='min-w-full flex justify-between items-center min-h-14 border-b-2 mb-8'>
        <p className='text-base font-normal tracking-normal cursor-pointer'>
          <span>{productData.productCount}</span> Products
        </p>
        <p className='text-right font-semibold text-base cursor-pointer'>
          $<span>{productData.subTotal}</span>
        </p>
      </div>
      <ShoppingButton handleGoToCard={handleGoToCard} handleCheckout={handleCheckout} />
    </div>
  );
}

export default ShoppingCartPopup;
