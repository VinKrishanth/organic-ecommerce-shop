import React, { useEffect, useState } from 'react'
import IconButton from '../../Button/IconButton'
import {ArrowRight} from '../../../assets/Product/Blog/BlogItems.js'
import {calculateTimeLeft } from '../../Js/calculateTimeLeft.js'; 
import {saleOfTheMonthXL} from '../../Js/Offers/OfferTimeControl.js'
import Timer from './components/Timer.js'

function BestDealXS({navigationURL ,bannerSource}) {
    
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        mins: '00',
        secs: '00',
    });

    const targetDate = new Date(saleOfTheMonthXL);
    useEffect(() => {
        const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(targetDate);
        setTimeLeft(updatedTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer); 
    }, [targetDate]);

    return (
        <div className={`flex flex-col justify-start items-start max-w-[1322px] min-h-[303px] max-w-screen border-2 rounded-xl overflow-hidden relative hover:border-sky-300 hover:border-opacity-50 bg-Gray05`}>
            <div className={`min-h-full`}>
                <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
                <img src={bannerSource} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
                </figure>
            </div>
            <div className={`flex flex-col gap-8  justify-start items-start absolute px-16 pt-8`}>
                    <div className={`flex flex-col gap-6 text-left`}>
                        <p className={`text-sm align-top leading-4 tracking-wide font-semibold cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear uppercase text-Primary`}>Best Deals</p>
                        <h1 className={`text-[40px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>Sale of the Month</h1>
                    </div>
                    <div className={`flex justify-start text-Gray90 items-start gap-4  cursor-pointer`}>
                        <Timer 
                            timeDescription={`days`}
                            timeValue={timeLeft.days}
                            key={1}
                            timerStyle={true}
                        />
                        <Timer 
                            timeDescription={`Hours`}
                            timeValue={timeLeft.hours}
                            key={2}
                            timerStyle={true}
                        />
                        <Timer 
                            timeDescription={`mins`}
                            timeValue={timeLeft.mins}
                            key={3}
                            timerStyle={true}
                        />
                        <Timer 
                            timeDescription={`secs`}
                            timeValue={timeLeft.secs}
                            key={4}
                            dotValue={true}
                            timerStyle={true}
                         />
                    </div>

                    <IconButton 
                        sourceIcon ={ArrowRight}
                        title={`Shop now`}
                        navigationURL = {navigationURL}
                        btnStyle= {`bg-Primary text-white min-w-[162px] min-h-[45px] rounded-full justify-center `}
                    />
                    <div className={`flex flex-col justify-center items-center min-h-[100px] min-w-[100px]  bg-Warning rounded-full absolute ml-96 text-white gap-1 hover:scale-95 transition-all duration-700 ease-linear delay-100`}>
                        <p className='font-semibold text-2xl leading-5 tracking-normal align-top'>90%</p>
                        <p className='font-medium text-sm tracking-wide leading-4 align-top uppercase'>off</p>
                    </div>
            </div>
        </div>
      )
    }

export default BestDealXS