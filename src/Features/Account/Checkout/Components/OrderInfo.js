import React from 'react'
import NormalButton from '../../../../Components/Button/NormalButton'
import Payment from './Payment'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function OrderInfo() {
    const navigate = useNavigate();
    const itemsList = useSelector(state => state.cart.itemsList);
    const totalPrice = useSelector(state => state.cart.cartTotalPrice);

    const handlePlaceOrder = () =>{

    }
    const handleBackToHome = () =>{
        navigate('/organic-ecommerce-shop/shop')
    }

  return (
    <div className={`flex justify-start items-start min-w-full p-8 border-2 rounded-xl  transition-all duration-1000 ease-linear delay-200 min-h-[580px]`}>
        <div className='flex flex-col justify-start items-start min-w-full gap-4'>
            <div className={`text-Gray90 tracking-wide leading-6 align-top text-left`}>
                <h1 className={`text-xl font-medium cursor-pointer capitalize`}>Order summery</h1>
            </div>
            <div className={`flex flex-col justify-start items-start min-w-full ${itemsList.length === 0 ? 'bg-Gray05 p-4' : ''}  gap-4 my-4`}>
                {
                    itemsList.length === 0 ? (
                        <>
                            <ul className={`flex flex-col justify-center items-center min-w-full min-h-[100px] gap-8`}>
                                <li className={`flex justify-center items-center text-base font-medium tracking-wide cursor-pointer  text-center max-w-[80%]`}>
                                    Your wishlist is empty. Add items to start building your favorites!
                                </li>
                                <li 
                                    onClick={()=>{handleBackToHome()}}
                                    className={`flex justify-center items-center text-sm capitalize  font-semibold cursor-pointer hover:scale-110 transition-all duration-700 ease-linear bg-Primary text-white py-2 px-4 rounded-xl`}
                                >
                                    Shop
                                </li>
                            </ul>
                        </>
                    ) : (
                            itemsList.map((item, index) => {
                                return(
                                    <ul key={index} className={`flex justify-between items-center min-w-full`}>
                                        <li className={`flex justify-start items-center gap-4`}>
                                            <img src={item.sourceURL} alt='The product information' className={`object-cover object-center max-h-[70px] max-w-[70px]`} />
                                            <p className={`text-base capitalize font-normal leading-6 tracking-normal text-Gray90`}>{item.name} <span className={`pl-2 lowercase tracking-wide`}>x{item.quantity}</span></p>
                                        </li>
                                        <li className={`flex justify-start items-center font-medium text-sm text-Gray90`}>${parseFloat(item.totalPrice).toFixed(2)}</li>
                                    </ul>
                                )
                            })
                        )
                }
            </div>
            <div className={`flex flex-col justify-start items-start min-w-full gap-4`}>
                <ul className={`flex justify-between items-center align-top tracking-wide leading-6 min-w-full border-b-2 pb-2 capitalize`}>
                    <li className={`text-sm font-normal text-Gray70 cursor-pointer capitalize`}>subtotal:</li> 
                    <li className={`text-sm font-medium text-Gray90 cursor-pointer`}>{`$${parseFloat(totalPrice).toFixed(0)}`}</li> 
                </ul>
                <ul className={`flex justify-between items-center align-top tracking-wide leading-6 min-w-full border-b-2 pb-2 capitalize`}>
                    <li className={`text-sm font-normal text-Gray70 cursor-pointer capitalize`}>shipping:</li> 
                    <li className={`text-sm font-medium text-Gray90 cursor-pointer`}>{`Free`}</li> 
                </ul>
                <ul className={`flex justify-between items-center align-top tracking-wide leading-6 min-w-full border-b-2 pb-2 capitalize `}>
                    <li className={`text-sm font-normal text-Gray70 cursor-pointer capitalize`}>total:</li> 
                    <li className={`text-lg font-semibold text-Gray90 cursor-pointer`}>{`$${parseFloat(totalPrice).toFixed(0)}`}</li> 
                </ul>
            </div>
            <div className={`flex flex-col justify-start items-start text-Gray90 tracking-wide leading-6 align-top text-left gap-2`}>
                <h1 className={`text-xl font-medium cursor-pointer capitalize`}>Payment Method</h1>
                <Payment />
            </div>
            <div className={`flex justify-start items-start min-w-full`}>
                <NormalButton 
                    label={`Place Order`}
                    onClick={()=>{handlePlaceOrder()}}
                    addStyle={`min-w-full min-h-12 p-2 text-base`}
                />
            </div>
        </div>
    </div>
  )
}

export default OrderInfo