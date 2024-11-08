import React from 'react'
// import {currentDateAndMonth} from '../../Js/calculateTimeLeft'
import TagInfo from './Components/TagInfo';
import BlogItems from '../../../assets/Product/Blog/BlogItems.js'
import sourceIcon from '../../../assets/Product/Blog/arrow-right.svg'
import IconButton from '../../Button/IconButton.js';
import PropType from 'prop-types'
import PropTypes from 'prop-types';

function Blogs({blogSource , blogSourceURL, blogTitle, blogDate, blogMonth, ID ,customerStyle}) {
//   const currentInfo = currentDateAndMonth();

  return (
    <div id={ID} className={`flex flex-col justify-start items-start  min-w-full  border-2 p-4 rounded-lg hover:border-sky-500 transition-all duration-700 ease-linear delay-100 ${customerStyle}`}>
        <div className={`flex min-w-full relative`}>
            <figure className={`flex justify-center items-center min-w-full cursor-pointer`}>
                <img src={blogSource} alt={`The last news pad`} className={`object-cover object-center opacity-100 hover:opacity-90 transition-all duration-200 ease-linear`} />
            </figure>
            <div className='absolute z-20 min-w-[58px] min-h-[58px] bg-white bg-opacity-85 bottom-4 m-4 rounded-md text-center py-3 cursor-pointer hover:bg-opacity-100 transition-all duration-500 delay-75 ease-linear sm:scale-100 sm:translate-x-0 sm:translate-y-0 -translate-x-4 translate-y-8 scale-50'>
                <h2 className='text-xl font-semibold leading-4 tracking-normal align-top text-Gray90 pb-1'>{blogDate}</h2>
                <p className='text-xs font-medium leading-4 tracking-wide text-Gray50 uppercase'>{blogMonth}</p>                      
            </div>
        </div>
        <div className={`flex-grow md:my-8 sm:py-4 sm:scale-100 scale-90 `}>
            <div className={`flex flex-col justify-start items-start md:gap-6 gap-4 text-justify md:px-6`}>
                <div className={`flex justify-start items-center min-w-full 2xl:gap-2  gap-[2px]`}>
                    {
                        BlogItems.map((item, index)=>{
                            return(
                                item.available ? (
                                    <TagInfo 
                                        index ={index+1} 
                                        SourceHoverURL ={item.SourceHoverURL}
                                        SourceURL = {item.SourceURL}
                                        sourceAlt ={item.Name}
                                        Title ={item.Title}
                                        subTitle={item.subTitle}
                                        key={index}
                                    />
                                ) : (
                                    <TagInfo 
                                        index ={index+1} 
                                        SourceHoverURL ={item.SourceHoverURL}
                                        SourceURL = {item.SourceURL}
                                        sourceAlt ={item.Name}
                                        Title ={item.subTitle}
                                        subTitle={''}
                                        key={index}
                                    />
                                )
                            )
                        })
                    }
                </div>
                <h2 className={`2xl:text-lg text-xs font-medium  align-top leading-5 tracking-normal  text-Gray90 hover:text-Primary transition-all duration-500 delay-75 ease-linear text-justify`} >{blogTitle}</h2>
                <IconButton 
                    sourceIcon={sourceIcon}
                    title={'Read more'}
                    navigationURL ={blogSourceURL}
                />
            </div>
        </div>
    </div>
  )
}

Blogs.prototype = {
    blogSource: PropType.string.isRequired,
    blogTitle: PropType.string.isRequired,
    blogSourceURL: PropTypes.string.isRequired
}

export default Blogs