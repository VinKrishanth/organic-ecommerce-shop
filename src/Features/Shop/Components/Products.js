import React from 'react'
import ProductCard from '../../../Components/Cards/Product/ProductCard'
import ProductItems from '../../../Features/Home/Popular/Components/ProductItems.js'

function Products() {
  return (
    <div className={`flex flex-col justify-start items-start col-span-9 overflow-hidden`}>
        <div className='grid grid-cols-3 gap-4 min-w-full'>
            {
                ProductItems.map((item, index)=> {
                    return(
                    !item.isFruit && (
                        <div key={index} className={`flex justify-start items-start  rounded-md p-4 col-span-1 cursor-pointer `}>
                            <div  className={`flex justify-center items-center min-w-full min-h-full bg-white overflow-hidden` }>
                                <ProductCard 
                                    Price={item.Price}
                                    cardSourceAlt={item.cardSourceAlt}
                                    sourceURL={item.cardSourceURL}
                                    name={item.cardTitle}
                                    discountPrice={item.discountPrice}
                                    offer={item.offer}
                                    id={item.productID}
                                    viewRate={item.viewRate}
                                    btnLabel={item.btnLabel}
                                    key={item.productID}
                                    stock={item.stock}
                                />
                            </div>
                        </div>
                    )
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products