import React from 'react'
import {currentDateAndMonth} from '../../Js/calculateTimeLeft'
import TagInfo from './Components/TagInfo';
import BlogItems from '../../../assets/Product/Blog/BlogItems.js'
import sourceIcon from '../../../assets/Product/Blog/arrow-right.svg'
import IconButton from '../../Button/IconButton.js';
import PropType from 'prop-types'
import PropTypes from 'prop-types';

function Blogs({blogSource , blogSourceURL, blogTitle}) {
  const currentInfo = currentDateAndMonth();

  return (
    <div className={`flex flex-col justify-start items-start min-h-[494px] max-w-[424px] border-2 m-16 rounded-lg`}>
        <div className={`flex min-w-full relative`}>
            <figure className={`flex justify-center items-center min-w-full cursor-pointer`}>
                <img src={blogSource} alt={``} className={`object-cover object-center opacity-100 hover:opacity-90 transition-all duration-200 ease-linear`} />
            </figure>
            <div className='absolute z-20 min-w-[58px] min-h-[58px] bg-white bg-opacity-85 bottom-4 m-4 rounded-md text-center py-3 cursor-pointer hover:bg-opacity-100 transition-all duration-500 delay-75 ease-linear'>
                <h2 className='text-xl font-semibold leading-4 tracking-normal align-top text-Gray90 pb-1'>{currentInfo.day}</h2>
                <p className='text-xs font-medium leading-4 tracking-wide text-Gray50 uppercase'>{currentInfo.month}</p>                      
            </div>
        </div>
        <div className={`my-8`}>
            <div className={`flex flex-col justify-start items-start gap-2 text-justify px-6`}>
                <div className={`flex justify-start items-center min-w-full gap-6`}>
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
                <h2 className={`text-lg font-medium  align-top leading-5 tracking-normal   text-Gray90 hover:text-Primary transition-all duration-500 delay-75 ease-linear`}>{blogTitle}</h2>
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