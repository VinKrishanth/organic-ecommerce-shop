import React from 'react'
import GhostButton from '../../../../../Components/Button/GhostButton'
import { useNavigate } from 'react-router-dom'

function ProductFooter() {
    const navigate = useNavigate();
    const handleReturnShop = () => {
        navigate('/organic-ecommerce-shop/shop')
    }
    const handleUpdateCart = () => {

    }
  return (
    <tfoot className={`flex justify-start items-start min-w-full border-t-2  px-8 py-4`}>
        <tr className={`flex justify-between items-center min-w-full`}>
            <td className={`flex justify-center items-center`}>
                <GhostButton 
                    label={`Return to shop`}
                    btnStyle={true}
                    minHight={`min-h-12`}
                    minWidth={`min-w-40`}
                    textSize={`text-sm font-semibold`}
                    onClick={()=>{handleReturnShop()}}
                />
            </td>
            <td className={`flex justify-center items-center `}>
                <GhostButton 
                    label={`Update Cart`}
                    btnStyle={true}
                    minHight={`min-h-12`}
                    minWidth={`min-w-40`}
                    textSize={`text-sm font-semibold`}
                    onClick={()=>{handleUpdateCart()}}
                />
            </td>
        </tr>
    </tfoot>
  )
}

export default ProductFooter