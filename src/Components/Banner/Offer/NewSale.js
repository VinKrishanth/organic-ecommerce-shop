import React, { useEffect, useState } from 'react'
import IconButton from '../../Button/IconButton.js'
import Timer from './Components/Timer.js'
import TagsButton from '../../Button/TagsButton.js'
import {ArrowRight} from '../../../assets/Product/Blog/BlogItems.js'
import {calculateTimeLeft } from '../../Js/calculateTimeLeft.js'; 
import {FruitAndVegetable} from '../../Js/Offers/OfferTimeControl.js'

function NewSale({navigationURL, bannerTitle, bannerSubTitle, offerDescription, newSaleDescription, sourceBannerURL}) {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        mins: '00',
        secs: '00',
    });

    const targetDate = new Date(FruitAndVegetable);
    useEffect(() => {
        const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(targetDate);
        setTimeLeft(updatedTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer); 
    }, [targetDate]);

    return (
        <div className={`flex justify-start items-center min-h-[360px] max-w-[648px] rounded-xl overflow-hidden relative border-2 hover:border-green-600 m-3`}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={sourceBannerURL} alt='The Product Banner' className={`object-cover object-center hover:scale-110 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col gap-4 text-white absolute text-left z-20 pl-16`}>
                <div className='flex flex-col gap-2 justify-between '>
                  <div className='flex flex-col'>
                    <h2 className={`text-sm font-semibold tracking-wider leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4 uppercase`}>{bannerSubTitle}</h2>
                    <h1 className={`text-4xl font-semibold text-left tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear pb-4`}>{bannerTitle}</h1>
                  </div>

                  {
                    newSaleDescription && (
                        <>
                            <div className={`flex justify-start items-center gap-4 overflow-hidden`}>
                                <h2 className={`text-lg align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-Gray40`}>Starting at:</h2>
                                <TagsButton 
                                    Type={`New`}
                                    label={`$11.99`}
                                    tagStyle={`text-xl min-h-9 scale-90`}
                                />
                            </div>
                        </>
                    )
                  }
                  {
                    offerDescription && (
                        <div className={`flex justify-start items-start gap-10 overflow-hidden pl-4`}>
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
                    )
                  }
                </div>
                <IconButton 
                  sourceIcon ={ArrowRight}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`bg-Primary text-white max-w-[162px] min-h-[40px] rounded-full justify-center `}
                />
            </div>
        </div>
      )
    }


export default NewSale