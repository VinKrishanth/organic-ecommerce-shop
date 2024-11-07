import React from 'react'
import SampleData from './SampleData.js'

function Tbody() {
  const customerStyle = {
    textHover: 'hover:scale-110 transition-all duration-500 ease-linear hover:translate-x-4'
  }
  return (
    <tbody  className={`min-w-full sticky top-2 px-8`}>
      {
        SampleData.map((item, index) => {
          return(
            <tr key={index}  className={`grid grid-cols-4 border-b-2 pb-2`}>
              <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80 capitalize col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>
                <img src={item.sourceURL} alt='The product information' className={`object-cover object-center max-h-[70px] max-w-[70px]`} />
                <span>{item.productName}</span>
              </td>             
              <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80  col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>${parseFloat(item.Price).toFixed(2)}</td>             
              <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80  col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>x{item.Quantity}</td>             
              <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80  col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>${parseFloat(item.total).toFixed(2)}</td>             
            </tr>
          )
        })
      }
    </tbody>
  )
}

export default Tbody