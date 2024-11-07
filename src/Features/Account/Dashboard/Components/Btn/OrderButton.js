import React from 'react'
import { Link } from 'react-router-dom'

function OrderButton({label, onClick, textSize, defaultStyle}) {

  return (
    <Link to='/organic-ecommerce-shop/my-account/order-history/order-details'>
      <button     
          className={`${textSize ? 'text-sm' : 'text-base'} font-medium leading-6 tracking-normal align-top text-left text-Primary hover:text-PrimaryHover transition-all duration-700 ease-linear delay-75 capitalize ${defaultStyle}`}
          onClick={onClick}
      >
          {label}
      </button>
    </Link>
  )
}

export default OrderButton