import React from 'react'
import {currentYear} from '../Js/calculateTimeLeft'
import PaymentItems from './Payment/PaymentItems';
import PaymentMethod from './Payment/PaymentMethod'


function CopyRight({textHover}) {
    const year = currentYear();
    return (
        <div className={`flex justify-between items-center border-t-2 border-t-Gray40 pt-4`}>
            <h2 className={`text-sm font-normal leading-6 tracking-normal align-top cursor-pointer hover:translate-x-3 transition-all duration-700 delay-200`}>Ecobazar eCommerce © <span>{year.currentYear}</span>. All Rights Reserved</h2>
            <ul className={`flex justify-between items-center gap-4`}>
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