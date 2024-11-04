import React, { useCallback, useEffect, useState } from 'react'
import IconButton from '../../../../Components/Button/IconButton'
import {ArrowRightGreen} from '../../../../assets/Product/Blog/BlogItems.js'
import HeroGallery from './HeroGallery.js'

function Hero() {
  const [Prev, setPrev] = useState({
    currentI: HeroGallery[0].sourceURL,
    Id: HeroGallery[0].ID,
  });
    
    const HandleButtonClick = useCallback((direction) => {
      const currentIndex = HeroGallery.findIndex(item => item.ID === Prev.Id);

      if (direction === "next") {
          const nextIndex = (currentIndex + 1) % HeroGallery.length;
          setPrev({
              currentI: HeroGallery[nextIndex].sourceURL,
              Id: HeroGallery[nextIndex].ID
          });
      } else if (direction === "prev") {
          const prevIndex = (currentIndex - 1 + HeroGallery.length) % HeroGallery.length;
          setPrev({
              currentI: HeroGallery[prevIndex].sourceURL,
              Id: HeroGallery[prevIndex].ID
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
    <div className={`flex-grow flex justify-start items-center p-12   2xl:min-h-[560px] relative`}>
        <div className={`flex flex-col  text-left align-top gap-8 z-20`}>
            <h1 className={`2xl:text-5xl font-semibold  tracking-normal text-white max-w-[75%] cursor-pointer hover:-translate-x-8  hover:scale-90 duration-700 ease-linear delay-200`}>Fresh & Healthy Organic Food</h1>
            <p className={`2xl:text-2xl font-medium  tracking-wide text-white text-opacity-60  hover:text-opacity-100  border-l-4 pl-4 max-w-[25%] align-top  cursor-pointer`}>Sale Up to  <span className={`text-white text-opacity-100 hover:text-Warning`}>48% </span> off</p>
            <IconButton  
              sourceIcon ={ArrowRightGreen}
              title={`Shop now`}
              navigationURL = {``}
              btnStyle= {`flex justify-center items-center text-Primary bg-white 2xl:min-w-[162px] 2xl:min-h-[51px] 2xl:max-w-[192px] rounded-full`}
            />
             <div className={`flex gap-2 2xl:pt-20`}>
              {HeroGallery.map((item) => (
                <p key={item.ID} id={item.ID} className={`min-h-2 ${Prev.Id === item.ID ? 'min-w-4' : 'min-w-2'}   bg-white rounded-full`}></p>
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

export default Hero