import React, { useContext } from 'react'
import {currentYear} from '../../../../Components/Js/calculateTimeLeft'
import PaymentItems from '../../../../Components/Footer/Payment/PaymentItems';
import PaymentMethod from '../../../../Components/Footer/Payment/PaymentMethod.js'
import {UserContext} from '../../../../Features/Footer/Default/Footers.js'

function CopyRight() {
    const {deviceSize} = useContext(UserContext)
    const year = currentYear();
    return (
        <div className={`flex items-center border-t-2 pt-4 border-Gray40 ${deviceSize ? 'flex-col gap-4 ' : ' flex-row justify-between '}`} >
            {
                deviceSize ? (
                    <div className='flex justify-center items-center flex-col sm:flex-row gap-1'>
                        <h2 className='text-sm leading-5 tracking-normal align-top cursor-pointer  '>Ecobazar eCommerce © <span>{year.currentYear}</span>.</h2>
                        <p className='text-xs leading-5 tracking-normal align-top cursor-pointer  '>Developed by Krishanth</p>
                        <p className='text-xs leading-5 tracking-normal align-top cursor-pointer  '>All Rights Reserved</p>
                   </div>
                ) : (
                    <h2 className={`text-base leading-5 tracking-normal align-top cursor-pointer  `} >Ecobazar eCommerce © <span>{year.currentYear}</span>. All Rights Reserved</h2>
                )
            }
            <ul className={`flex justify-center items-center sm:gap-8  gap-4 text-Gray50`} >
                {
                    PaymentMethod.map((payment , index) => {
                        return(
                            <li key={index}
                            >
                                <PaymentItems 
                                    sourceAlt={payment.SourceAlt}
                                    sourceURL={payment.sourceURL}
                                    sourceURLGreen={payment.sourceURLGreen}
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