import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import { calculateTimeLeft } from '../../../Js/calculateTimeLeft'; 

function BigOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00',
  });
  const targetDate = new Date('11/15/2024 00:00 AM');

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer); 
  }, [targetDate]);

  return (
    <div className='flex flex-col justify-start items-center min-w-full placeholder-teal-400 sm:mt-10 gap-2 sm:scale-100 scale-75'>
      <h2 className='text-sm align-top font-medium text-center leading-5 tracking-normal'>
        Hurry up! Offer ends In:
      </h2>
      <div className='flex justify-center items-start min-w-full'>
        <Timer
          textStyle={false}
          timeCount={timeLeft.days}
          timeDescription='Days'
        />
        <div className='flex justify-center items-center'>
          <Timer
            textStyle={true}
            timeCount={timeLeft.hours}
            timeDescription='Hours'
          />
          <Timer
            textStyle={true}
            timeCount={timeLeft.mins}
            timeDescription='Mins'
          />
          <Timer
            textStyle={false}
            timeCount={timeLeft.secs}
            timeDescription='Secs'
          />
        </div>
      </div>
    </div>
  );
}

export default BigOffer;
