import React, { useState } from 'react'
import NormalButton from '../../../../Components/Button/NormalButton'
import PriceText from '../../../../Components/Text/PriceText'
import {closeNormalSource, closeHoverSource} from '../../../../assets/Shop/index.js'
import { useNavigate } from 'react-router-dom'

function ProductInfo({sourceURL, productName, productPrice, isStockStatus ,index, id}) {
    const [textHover, setTextHover] = useState(false);
    const navigate = useNavigate();
    const handelClick = () =>{
        navigate(`/organic-ecommerce-shop/my-account/shopping-cart`);
    } 
    const handleClose = () =>{

    }
  return (
    <tr
        id={id}
        key={index}
        className={`grid grid-cols-12 min-w-full min-h-10 text-sm font-medium tracking-wide leading-4 text-left align-top capitalize  text-Gray40 py-4 border-b-2`}
    >
        <th className={`flex justify-start items-center col-span-5 cursor-pointer min-w-full  gap-4`}>
            <img src={sourceURL || ``} alt='The product information' className={`object-cover object-center max-h-[70px] max-w-[70px]`} />
            <p className={`text-base capitalize font-normal leading-6 tracking-normal text-Gray90`}>{productName || ``}</p>
        </th>
        <th className={`flex justify-start items-center col-span-3 cursor-pointer min-w-full `}>
            <PriceText 
                Price={productPrice || `0`}
            />
        </th>
        <th className={`flex justify-start items-center col-span-2 cursor-pointer min-w-full `}>
            <p className={`${ isStockStatus === 'In Stock' ? 'bg-textBright text-Primary' : 'bg-textError text-textError'} bg-opacity-20    rounded font-normal text-sm tracking-normal p-1`}>{isStockStatus}</p>
        </th>
        <th 
            className={`flex justify-between  items-center ${!isStockStatus === 'In Stock' ? 'cursor-not-allowed' : 'cursor-pointer'} col-span-2  min-w-full gap-4 pr-16`}
        >
            {
                isStockStatus === 'In Stock' ? (
                    <NormalButton 
                        label={`Add to cart`}
                        onClick={()=>{handelClick()}}
                    />
                ) : (
                    <NormalButton 
                        label={`Add to cart`}
                        onClick={()=>{handelClick()}}
                        styleColor={`${true} `}
                        disabled={true}
                    />
                )
            }
            <figure 
                onClick={()=>{handleClose()}}
                onMouseOver={()=>{setTextHover(index)}}
                onMouseOut={()=>{setTextHover(false)}}
                className={`min-h-6 min-w-6 bg-Gray05 rounded-full text-xs`}
            >
                <img src={textHover === index ? closeHoverSource: closeNormalSource} alt={`The close source`} className={`object-center object-cover`} />
            </figure>
        </th>
    </tr>
  )
}

export default ProductInfo