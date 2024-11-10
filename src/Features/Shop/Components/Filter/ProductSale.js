import React  from 'react'
import CommonTitle from './CommonTitle'
import SaleProductData from './SaleProductData'
import SaleProductCart from '../../../../Components/Cards/Product/SaleProductCart'

function ProductSale() {

  return (
    <div className={`grid grid-cols-1 min-w-full gap-4 mt-8`}>
        <CommonTitle 
            Title={`Sale Products`}
            ID={`saleProduct`}
            isIconShow={true}
        />
        <div 
            id={`saleProduct`}
            className={`flex flex-col justify-start items-start col-span-1 gap-4`}
        >
            {
                SaleProductData.map((item, index)=> {
                    return(
                        <SaleProductCart
                            mainSource={item.sourceURL} 
                            index={index} 
                            productName={item.name} 
                            discountPrice={item.discountPrice} 
                            Price={item.price} 
                            startCount={item.starCount}
                            key={index}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
export default ProductSale