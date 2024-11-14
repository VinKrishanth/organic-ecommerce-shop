import React from 'react'
import NormalButton from '../../../../Components/Button/NormalButton'
import { useSelector } from 'react-redux'

function CartTotal() {
    const cartTotal = useSelector(state => state.cart.cartTotalPrice);
    const handleCheckout = () =>{

    }
  return (
    <div className={`flex flex-col justify-start items-start gap-6 border-2 border-opacity-50 min-w-full rounded-xl p-8 hover:p-10 hover:border-opacity-100 transition-all duration-1000 ease-linear delay-300 cursor-pointer`}>
        <div className={`text-left leading-6 tracking-normal align-top `}>
            <h1 className={`text-xl font-medium cursor-pointer text-Gray90`}>Cart Total</h1>
        </div>
        <div className={`text-left min-w-full`}>
            <ul className={`flex flex-col justify-items-start text-left leading-6 tracking-normal gap-4`}>
                <li className={`flex justify-between items-center min-w-full border-b-2 pb-2`}>
                    <h2 className={`text-sm font-normal text-Gray70 cursor-pointer capitalize`}>subtotal:</h2>
                    <p className={`text-sm font-medium text-Gray90 cursor-pointer capitalize`}>${parseFloat(cartTotal).toFixed(2)}</p>
                </li>
                <li className={`flex justify-between items-center min-w-full border-b-2 pb-2`}>
                    <h2 className={`text-sm font-normal text-Gray70 cursor-pointer capitalize`}>Shipping:</h2>
                    <p className={`text-sm font-medium text-Gray90 cursor-pointer capitalize`}>Free</p>
                </li>
                <li className={`flex justify-between items-center min-w-full border-b-2 pb-2`}>
                    <h2 className={`text-base font-normal text-Gray70 cursor-pointer capitalize`}>Total:</h2>
                    <p className={`text-base font-semibold text-Gray90 cursor-pointer capitalize`}>${parseFloat(cartTotal).toFixed(2)}</p>
                </li>
            </ul>
        </div>
        <div className={`flex min-w-full justify-center items-center  text-left`}>
            <NormalButton 
                label={`Proceed to checkout`}
                addStyle={`min-w-full min-h-12 text-sm`}
                onClick={()=>{handleCheckout()}}
            />
        </div>
    </div>
  )
}

export default CartTotal