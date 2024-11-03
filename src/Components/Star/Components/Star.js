import React from 'react'
import StarItems  from '../Components/StarItems.js'

function Star({starCount, starStyle, viewCount}) {
  return (
    <div className={`flex justify-start ${starStyle}`}>
        {
            starCount === 1 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star1.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center min-w-5 min-h-5' /></li>
                        )})
                    }
                    {viewCount && <p className='text-xs font-normal leading-4 align-top tracking-normal text-left text-Gray50 pl-2'> {`(${viewCount} Feedback)`}</p>}
                </ul>
                
            )
        }
        {
            starCount === 2 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star2.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center min-w-5 min-h-5' /></li>
                        )})
                    }
                    {viewCount && <p className='text-xs font-normal leading-4 align-top tracking-normal text-left text-Gray50 pl-2'> {`(${viewCount} Feedback)`}</p>}
                </ul>
            )
        }
        {
            starCount === 3 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star3.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center min-w-5 min-h-5' /></li>
                        )})
                    }
                    {viewCount && <p className='text-xs font-normal leading-4 align-top tracking-normal text-left text-Gray50 pl-2'> {`(${viewCount} Feedback)`}</p>}
                </ul>
            )
        }
        {
            starCount === 4 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star4.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center min-w-5 min-h-5' /></li>
                        )})
                    }
                    {viewCount && <p className='text-xs font-normal leading-4 align-top tracking-normal text-left text-Gray50 pl-2'> {`(${viewCount} Feedback)`}</p>}
                </ul>
            )
        }
        {
            starCount === 5 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star5.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center min-w-5 min-h-5' /></li>
                        )})
                    }
                    {viewCount && <p className='text-xs font-normal leading-4 align-top tracking-normal text-left text-Gray50 pl-2'> {`(${viewCount} Feedback)`}</p>}
                </ul>
            )
        }
    </div>
  )
}

export default Star