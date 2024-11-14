import React from 'react'
import SocialMedia from '../../../../assets/Icons/SocialMedia/SocialMedia.js'
import SocialMediaButton from '../../../../Components/Button/SocialMediaButton'
import ProductInfo from './ProductInfo.js'
import SampleData from '../../OrderDetails/Components/Table/SampleData.js'

function Product() {
  return (
    <div className={`flex justify-start items-start min-w-full`}>
        <table className={`flex flex-col justify-start items-start  min-h-[500px] min-w-full rounded-xl  border-2 gap-0 relative`}>
            <thead className={`flex justify-start items-start border-b-2  min-w-full px-8 py-4`}>
                <tr className={`grid grid-cols-12 min-w-full min-h-10 text-sm font-medium tracking-wide leading-4 text-left align-top uppercase text-Gray40`}>
                    <th className={`flex justify-start items-center col-span-5 cursor-pointer min-w-full `}>Product</th>
                    <th className={`flex justify-start items-center col-span-3 cursor-pointer min-w-full `}>Price</th>
                    <th className={`flex justify-start items-center col-span-4 cursor-pointer min-w-full `}>Stock status</th>
                </tr>
            </thead>
            <tbody className={`flex flex-grow flex-col justify-start items-start min-h-80 min-w-full px-8`}>
                {
                    SampleData.map((item, index)=>{
                        return(
                            <ProductInfo 
                                isStockStatus={item.isStock}
                                productName={item.productName}
                                productPrice={item.Price}
                                key={index}
                                index={index}
                                sourceURL={item.sourceURL}
                            />
                        )
                    })
                }
            </tbody>
            <tfoot className={`flex  min-w-full border-t-2 absolute bottom-0 left-0 py-4 px-8`}>
                <tr className={`flex justify-between items-center min-w-full text-sm font-medium tracking-wide leading-4 text-left align-top capitalize text-Gray40 min-h-8 gap-4`}>
                    <td className={`flex justify-start items-center col-span-5 cursor-pointer`}>Share:</td>
                    <td className={` flex flex-grow justify-start items-start`}>
                        <ul className={`flex justify-start items-start gap-4`}>
                            {
                                SocialMedia.map((item, index) => {
                                    return(
                                        item.available && (
                                            <li key={index} className={'flex justify-start items-center'}>
                                                <SocialMediaButton 
                                                    HoverIcon={item.SourceHoverURL}
                                                    Icon={item.SourceURL}
                                                    key={index}
                                                    btnBG={'bg-Gray05'}
                                                    btnBGHover={'bg-Primary'}
                                                    onClick={()=>{}}
                        
                                                />
                                            </li>
                                        )
                                    )
                                })
                            }
                        </ul>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default Product