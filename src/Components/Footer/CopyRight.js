import React from 'react'
import {currentYear} from '../Js/calculateTimeLeft'
import PaymentItems from './Payment/PaymentItems';
import PaymentMethod from './Payment/PaymentMethod'


function CopyRight({textHover, deviceSize}) {
    const year = currentYear();
    return (
        <div className={`flex border-t-2 border-t-Gray40 pt-4    ${deviceSize ? 'flex-col mt-8 gap-8 min-w-full' : 'flex-row justify-between items-center '} `}>
            <h2 className={`text-sm font-normal leading-6 tracking-normal align-top cursor-pointer hover:translate-x-3 transition-all duration-700 delay-200 ${deviceSize && 'text-center scale-110'}`}>Ecobazar eCommerce © <span>{year.currentYear}</span>. {deviceSize && <br></br>} All Rights Reserved</h2>
            <ul className={`flex  gap-4 ${deviceSize ? '' : 'justify-between items-center'}`}>
                {
                    PaymentMethod.map((payment , index) => {
                        return(
                            <li key={index}>
                                <PaymentItems 
                                    sourceAlt={payment.SourceAlt}
                                    sourceURL={payment.sourceURL}
                                    sourceURLGreen={payment.sourceURLGreen}
                                    textHover={textHover}
                                    index={payment.ID}
                                    deviceSize = {deviceSize}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        
    )
}

export default CopyRight