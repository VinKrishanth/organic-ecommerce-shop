import React, { useCallback, useEffect, useState } from 'react'
import IconButton from '../../../../Components/Button/IconButton'
import {ArrowRightGreen} from '../../../../assets/Product/Blog/BlogItems.js'
import PropType from 'prop-types';

function Hero({HeroImageCollection, Title, subTitle, addStyle}) {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
  useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [deviceSize]); 

  const [Prev, setPrev] = useState({
    currentI: HeroImageCollection[0].sourceURL,
    Id: HeroImageCollection[0].ID,
  });
    
    const HandleButtonClick = useCallback((direction) => {
      const currentIndex = HeroImageCollection.findIndex(item => item.ID === Prev.Id);

      if (direction === "next") {
          const nextIndex = (currentIndex + 1) % HeroImageCollection.length;
          setPrev({
              currentI: HeroImageCollection[nextIndex].sourceURL,
              Id: HeroImageCollection[nextIndex].ID
          });
      } else if (direction === "prev") {
          const prevIndex = (currentIndex - 1 + HeroImageCollection.length) % HeroImageCollection.length;
          setPrev({
              currentI: HeroImageCollection[prevIndex].sourceURL,
              Id: HeroImageCollection[prevIndex].ID
          });
      }
  }, [Prev.Id]);

  useEffect(() => { 
    let interval;
    interval = setInterval(() => {
      HandleButtonClick("next");
    }, 3000);

    return () => {
        clearInterval(interval);
    };
  }, [Prev.Id, HandleButtonClick]);

  return (
    <div className={`flex-grow flex justify-start items-center md:p-16 sm:p-8  p-4 2xl:min-h-[560px] min-w-full relative`}>
        <div className={`flex flex-col  text-left align-top lg:gap-8 sm:gap-6 gap-2 z-20`}>
            <h1 className={`lg:text-5xl  sm:text-3xl text-sm font-semibold  tracking-normal text-white sm:max-w-[75%] ${addStyle ? 'max-w-[75%] ' : 'max-w-[80%] '}  cursor-pointer hover:-translate-x-8  hover:scale-90 duration-700 ease-linear delay-200 `}>{Title}</h1>
            <p className={`lg:text-2xl  sm:text-lg text-xs font-medium  tracking-wide text-white text-opacity-60  hover:text-opacity-100  sm:border-l-4 md:pl-4 border-l-2 pl-2 lg:max-w-[25%] max-w-[40%] align-top  cursor-pointer`}>Sale Up to  <span className={`text-white text-opacity-100 hover:text-Warning`}>{subTitle}% </span> off</p>
                {
                  deviceSize ? (
                    <IconButton  
                      iconShow = {true}
                      sourceIcon ={ArrowRightGreen}
                      title={`Shop now`}
                      navigationURL = {``}
                      btnStyle= {`flex justify-center md:text-sm text-xs items-center text-Primary bg-white sm:min-w-[162px] md:min-h-[51px] sm:max-w-[192px] max-w-20 min-h-4 rounded-full`}
                    />
                  ) : (
                    <IconButton  
                      sourceIcon ={ArrowRightGreen}
                      title={`Shop now`}
                      navigationURL = {``}
                      btnStyle= {`flex justify-center md:text-sm text-xs items-center text-Primary bg-white sm:min-w-[162px] md:min-h-[51px] sm:max-w-[192px] max-w-20 min-h-4 rounded-full`}
                    />
                  )
                }
             <div className={`flex gap-2 xl:pt-32 lg:pt-24 pt-8  `}>
              {HeroImageCollection.map((item) => (
                <p key={item.ID} id={item.ID} className={`sm:min-h-2 min-h-1 cursor-pointer ${Prev.Id === item.ID ? 'min-w-4' : 'min-w-2'}   bg-white rounded-full`}></p>
              ))}
            </div>
        </div>
        <figure className={`absolute top-0 left-0`}>
            <img 
              id={`${Prev.Id}`}
              src={Prev.currentI}
              alt='THe Hero section source' 
              className={`object-contain object-center`} 
            />
        </figure>
       
    </div>
  )
}


Hero.prototype = {
  HeroImageCollection: PropType.string.isRequired,
  Title:  PropType.string.isRequired,
  subTitle: PropType.string.isRequired,
}
export default Hero