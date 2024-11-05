import React, { useState } from 'react'
import FaqItems from './FaqItems'
import {plusGreen, plusNormal} from'../../../assets/Team/index.js'

function FaqItem() {
    const [textHover, setTextHover]  = useState(false); 
    const [buttonHover, setButtonHover]  = useState(FaqItems[0].ID); 
  return (
    <table className={``}>
        <tbody className={`min-w-full grid grid-cols-1 gap-4`}>
            {
                FaqItems.map((qes, index) => {
                    return(
                        <tr className={`min-w-full col-span-1 border-2 rounded-xl  ${buttonHover === qes.ID || buttonHover === index  && 'border-Primary'}`}
                            onMouseOver={() => {setTextHover(true)}}
                            onMouseOut={() => {setTextHover(false)}}
                            key={index}
                        >
                            <td className={`flex justify-between items-center min-w-full border-b-2 border-Gray05 p-4`}>
                                <p className={`text-base font-medium tracking-normal leading-6 align-top text-left`}>{qes.Question}</p>
                                <figure 
                                    className={`flex justify-center items-center min-h-8 min-w-8 bg-Gray05 rounded-full hover:bg-textBlue hover:bg-opacity-40`}
                                    onClick={()=>{setButtonHover(index)}}
                                >
                                    <img 
                                        src={textHover? plusGreen : plusNormal} 
                                        alt='The faqs source' className={`object-cover object-center cursor-pointer`} 
                                    />
                                </figure>
                            </td>
                            <td id={qes.ID} className={`p-4 tracking-normal leading-6 align-top text-left ${buttonHover === index || buttonHover === qes.ID ? 'visible' : 'hidden'}`}>
                                <p className={`text-sm font-normal text-Gray60 text-justify`}>{qes.Answer}</p>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default FaqItem