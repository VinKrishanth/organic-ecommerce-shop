import React from 'react'
import ProductHead from './table/ProductHead.js';
import ProductFooter from './table/ProductFooter.js';
import ProductBodyInfo from './table/ProductBodyInfo.js';

function ShoppingInfo() {

  return (
    <div className={`flex justify-between items-start min-w-full min-h-96  border-2 rounded-xl relative`}>
      <table className={`flex flex-col justify-start items-center min-w-full `}>
          <ProductHead />
          <ProductBodyInfo />
          <ProductFooter />
      </table>
    </div>
  )
}

export default ShoppingInfo