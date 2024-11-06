import React from 'react'
import OrderButton from '../Btn/OrderButton.js'

function TBody({historyData}) {
  const customerStyle = {
    textHover: 'hover:scale-110 transition-all duration-500 ease-linear hover:translate-x-2'
  }
  return (
    <tbody className={`min-w-full`}>
        {
            historyData.map((item, index) => {
                return(
                    <tr key={index} className={`grid grid-cols-5 p-4 pl-8`}>
                        {
                            item.orderID  && <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80 uppercase col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>{item.orderID}</td>
                        }
                        {
                            item.orderDate  && <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80 uppercase col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>{item.orderDate}</td>
                        }
                        {
                            item.total && <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80 capitalize col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>{`${item.total} (${item.productCount} ${item.productCount === 1 ? 'Product': 'Products'})`}</td>
                        }
                        {
                            item.status && <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer  ${item.status === 'Processing' && 'text-textBlue hover:text-opacity-75'} ${item.status === 'on the way' && 'text-textWaring hover:text-opacity-75'} ${item.status === 'Completed' && 'text-textBright hover:text-textSuccess'} lowercase col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>{item.status}</td>
                        }
                        {
                            item.isVisible && (
                                <td  className={`text-md font-normal leading-4 tracking-wide align-top text-left cursor-pointer text-Gray80 capitalize col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>
                                    <OrderButton label={`View Details`}  textSize={true}/>
                                </td>) 
                        }
                    </tr>
                )
            })
        }
    </tbody>
  )
}

export default TBody