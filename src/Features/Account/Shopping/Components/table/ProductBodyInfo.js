import React, { useState } from 'react';
import {closeNormalSource, closeHoverSource,minusBlackSource,minusNormalSource,plusBlackSource,plusNormalSource} from '../../../../../assets/Shop/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { cartActions } from '../../../../../reducer/cart-slice.js';

function ProductBodyInfo() { 
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [textHover, setTextHover] = useState(false);
    const itemsList = useSelector(state => state.cart.itemsList);

    const handleAddToCart = (item)=>{
        dispatch(cartActions.addToCart(item));
    }
    const handleRemoveToCart = (item)=>{
        dispatch(cartActions.removerFormCart(item.id));
    }
    const handleClose = (item) =>{
        dispatch(cartActions.deleteFormCart(item.id));
    }
    const handleBackToHome = () =>{
        navigate('/organic-ecommerce-shop/shop')
    }

    
  return (
    <tbody className={`flex flex-col justify-start items-start min-w-full  text-Gray50 ${itemsList.length === 0 ? 'px-0 bg-Gray05' : 'px-8'} py-4 min-h-72`}>
        {
            itemsList.length === 0 ? (
                <>
                    <tr className={`flex flex-col justify-center items-center min-w-full min-h-[400px] gap-8`}>
                        <td className={`flex justify-center items-center text-xl font-medium tracking-wide cursor-pointer  text-Gray50 text-center max-w-[75%]`}>
                            Your wishlist is empty. Add items to start building your favorites!
                        </td>
                        <td 
                            onClick={()=>{handleBackToHome()}}
                            className={`flex justify-center items-center text-lg capitalize  font-semibold cursor-pointer hover:scale-110 transition-all duration-700 ease-linear bg-Primary text-white py-2 px-4 rounded-xl`}
                        >
                            Shop
                        </td>
                    </tr>
                </>
            ) : (
                itemsList.map((item, index) => {
                    return(
                        <tr key={index}  className={`grid grid-cols-8 items-center min-w-full ${itemsList.length === (index + 1) ? 'border-b-0' : 'border-b-2' }  pb-4`}>
                            <th className={`flex justify-start items-center col-span-3 cursor-pointer gap-4`}>
                                <img 
                                    src={item.sourceURL || ``} 
                                    alt='The product information' 
                                    className={`object-cover object-center max-h-[70px] max-w-[70px] cursor-pointer`} 
                                />
                                <p className={`text-base capitalize font-normal leading-6 tracking-normal text-Gray90 cursor-pointer`}>{'Green Capsicum '|| ``}</p>                 
                            </th>
                            <td className={`flex justify-between items-center col-span-1 cursor-pointer text-base font-normal tracking-normal leading-6 align-top  text-Gray90`}>
                                ${parseFloat(item.price).toFixed(2)}
                            </td>
                            <td className={`flex justify-between items-center col-span-2 cursor-pointer`}>
                                <ul className={`flex justify-start items-start  cursor-pointer border p-1 rounded-full gap-1`}>
                                    <li 
                                        onClick={()=>{handleRemoveToCart(item)}}
                                        className={`flex justify-center items-center min-h-8 min-w-8 bg-Gray05 rounded-full`}
                                    >
                                        <img 
                                            src={textHover === index ? minusBlackSource : minusNormalSource} 
                                            alt='The minus Source' 
                                            className='object-cover object-center' 
                                        />
                                    </li>
                                    <li 
                                        className={`flex justify-center items-center min-h-8 min-w-8 text-base font-normal tracking-normal leading-6`}>{String(item.quantity).padStart(2, 0)}</li>
                                    <li 
                                        onClick={()=>{handleAddToCart(item)}}
                                        className={`flex justify-center items-center min-h-8 min-w-8 bg-Gray05 rounded-full`}
                                    >
                                        <img src={textHover === index ? plusBlackSource : plusNormalSource} alt='The plus Source' className='object-cover object-center' />
                                    </li>
                                </ul>
                            </td>
                            <th className={`flex justify-between items-center col-span-2 cursor-pointer`}>
                                <p className={`text-base font-medium tracking-normal leading-6 align-top cursor-pointer text-Gray90`}>${parseFloat(item.totalPrice).toFixed(2)}</p>
                                <figure 
                                onClick={()=>{handleClose(item)}}
                                onMouseOver={()=>{setTextHover(index)}}
                                onMouseOut={()=>{setTextHover(false)}}
                                className={`min-h-6 min-w-6 bg-Gray05 rounded-full text-xs cursor-pointer `}
                                >
                                <img 
                                    src={textHover === index ? closeHoverSource: closeNormalSource} 
                                    alt={`The close source`} 
                                    className={`object-center object-cover`} 
                                />
                                </figure>
                            </th>
                        </tr>
                    )
                })
            )
        }
    </tbody>
  )
}

export default ProductBodyInfo