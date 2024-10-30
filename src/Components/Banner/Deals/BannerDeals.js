import React, { useEffect, useState } from 'react'
import IconButton from '../../Button/IconButton'
import {ArrowRightGreen} from '../../../assets/Product/Blog/BlogItems.js'
import TagsButton from '../../Button/TagsButton.js'
import {calculateTimeLeft } from '../../Js/calculateTimeLeft.js'; 
import {saleOfTheMonth} from '../../Js/Offers/OfferTimeControl.js'
import Timer from '../Offer/Components/Timer.js'

function BannerDeals({navigationURL, bestSale , productDiscount, bannerSourceURL,bannerTitle, bannerSubTitle, productDescription, productPrice}) {
    
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        mins: '00',
        secs: '00',
    });

    const targetDate = new Date(saleOfTheMonth);
    useEffect(() => {
        const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(targetDate);
        setTimeLeft(updatedTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer); 
    }, [targetDate]);

    return (
        <div className={`flex justify-center items-start min-h-[536px] max-w-[424px] border-2 rounded-xl overflow-hidden relative hover:border-black hover:border-opacity-50 `}>
            <figure className={`min-w-full min-h-full cursor-pointer overflow-hidden`}>
               <img src={bannerSourceURL} alt='The Product Banner' className={`object-cover object-center hover:scale-105 transition-all duration-700 delay-125 ease-linear`} />
            </figure>
            <div className={`flex  flex-col justify-center items-center gap-6 ${bestSale ? 'text-Gray90' : 'text-white'}  absolute text-left z-20 pt-8`}>
                <h2 className={`text-sm align-top leading-4 tracking-wide font-medium cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center uppercase`}>{bannerSubTitle}</h2>
                <h1 className={`text-[40px] font-semibold tracking-normal leading-5 align-top cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear`}>{bannerTitle}</h1>
                {(!bestSale  && !productDiscount) &&  <p className={`text-lg align-top leading-6 tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center`}>{productDescription}<span className={`text-Warning text-xl font-semibold pl-4`}>{productPrice}</span></p>}
                {
                    bestSale && (
                        <div className='flex justify-center items-center gap-4'>
                            <p className={`text-lg align-top leading-6  tracking-normal font-normal cursor-pointer hover:translate-x-2 transition-all duration-700 delay-125 ease-linear text-center`}>{productDescription}</p>
                            <TagsButton 
                                Type={'Stock'}
                                label={`64% OFF`}
                                tagStyle={`text-textYellow text-lg font-semibold `}
                            />
                        </div>
                    )
                }
               
               {
                    productDiscount && (
                        <div className={`flex justify-start text-white items-start gap-12  `}>
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
                <IconButton 
                  sourceIcon ={ArrowRightGreen}
                  title={`Shop now`}
                  navigationURL = {navigationURL}
                  btnStyle= {`bg-white text-Primary min-w-[162px] min-h-[45px] rounded-full justify-center `}
                />
            </div>
        </div>
      )
    }

export default BannerDeals