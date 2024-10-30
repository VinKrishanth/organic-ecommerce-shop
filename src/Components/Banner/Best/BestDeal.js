import React, { useEffect, useState } from 'react'
import IconButton from '../../Button/IconButton'
import {ArrowRight} from '../../../assets/Product/Blog/BlogItems.js'
import {calculateTimeLeft } from '../../Js/calculateTimeLeft.js'; 
import {deadOfTheMonth} from '../../Js/Offers/OfferTimeControl.js'
import Timer from './components/Timer.js'

function BestDeal({navigationURL ,bannerTitleUp, bannerTitleDown, bannerSubTitle, bannerLeftSideSource, bannerRightSideSource}) {
    
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        mins: '00',
        secs: '00',
    });

    const targetDate = new Date(deadOfTheMonth);
    useEffect(() => {
        const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(targetDate);
        setTimeLeft(updatedTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer); 
    }, [targetDate]);

    return (
        <div className={`flex justify-between items-center min-h-[527px] max-w-screen border-2 rounded-xl overflow-hidden relative hover:border-sky-300 hover:border-opacity-50 bg-Gray05 mt-8`}>
            <div className={`min-w-[521px] min-h-[308px]`}>
                <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden ml-16`}>
                <img src={bannerLeftSideSource} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
                </figure>
            </div>
            <div className={`flex min-h-[527px] justify-start items-start `}>
                <div className={`flex  flex-col justify-center items-center gap-16 text-left z-20 my-32`}>
                    <div className={`flex flex-col gap-8 justify-center items-center`}>
                        <h2 className={`text-base align-top leading-4 tracking-wide font-semibold cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center uppercase text-Primary`}>{bannerSubTitle}</h2>
                        <h1 className={`text-[40px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>{bannerTitleUp}</h1>
                        <h1 className={`text-[40px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>{bannerTitleDown}</h1>
                    </div>
                    
                    <div className={`flex justify-start text-Gray90 items-start gap-12  cursor-pointer`}>
                        <Timer 
                            timeDescription={`days`}
                            timeValue={timeLeft.days}
                            key={1}
                        />
                        <Timer 
                            timeDescription={`Hours`}
                            timeValue={timeLeft.hours}
                            key={2}
                        />
                        <Timer 
                            timeDescription={`mins`}
                            timeValue={timeLeft.mins}
                            key={3}
                        />
                        <Timer 
                            timeDescription={`secs`}
                            timeValue={timeLeft.secs}
                            key={4}
                            dotValue={true}
                         />
                    </div>

                    <IconButton 
                        sourceIcon ={ArrowRight}
                        title={`Shop now`}
                        navigationURL = {navigationURL}
                        btnStyle= {`bg-Primary text-white min-w-[190px] min-h-[51px] rounded-full justify-center `}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center min-h-full pt-32'>
                <figure className={`min-h-full cursor-pointer`}>
                    <img src={bannerRightSideSource} alt='The Product Banner' className={`object-cover object-center scale-105 transition-all duration-700 delay-125 ease-linear`} />
                </figure>
            </div>
        </div>
      )
    }

export default BestDeal