import React from 'react'

function PaymentItems({sourceURL, sourceURLGreen, textHover , sourceAlt, index}) {
  return (
    <figure key={index} className={`flex justify-center items-center gap-4 cursor-pointer hover:scale-110 duration-700 ease-linear delay-100`}>
        <img src={textHover ?sourceURLGreen : sourceURL} className={`object-cover object-center`} alt={sourceAlt} />
    </figure>
  )
}

export default PaymentItems