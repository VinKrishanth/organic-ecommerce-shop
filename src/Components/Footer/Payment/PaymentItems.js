import React, { useState } from 'react'

function PaymentItems({sourceURL, sourceURLGreen, sourceAlt, index}) {
  const [textHover, setTextHover] = useState(false);
  return (
    <figure key={index} className={`flex justify-center items-center gap-4 cursor-pointer hover:scale-110 duration-700 ease-linear delay-100`}>
        <img src={textHover ?sourceURLGreen : sourceURL} className={`object-cover object-center`} alt={sourceAlt} />
    </figure>
  )
}

export default PaymentItems