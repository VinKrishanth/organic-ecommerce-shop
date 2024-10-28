import React from 'react'
import StarItems  from '../Components/StarItems.js'

function Star({starCount, starStyle}) {
  return (
    <div className={`flex justify-start ${starStyle}`}>
        {
            starCount === 1 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star1.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center' /></li>
                        )})
                    }
                </ul>
            )
        }
        {
            starCount === 2 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star2.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center' /></li>
                        )})
                    }
                </ul>
            )
        }
        {
            starCount === 3 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star3.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center' /></li>
                        )})
                    }
                </ul>
            )
        }
        {
            starCount === 4 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star4.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center' /></li>
                        )})
                    }
                </ul>
            )
        }
        {
            starCount === 5 && (
                <ul className={`flex justify-center items-center`}>
                    {
                        StarItems[0].star5.map((item, index) =>{
                        return(
                            <li key={index} className='min-h-3 min-w-3'><img src={item.SourceURL} alt={item.SourceURL} className='object-cover object-center' /></li>
                        )})
                    }
                </ul>
            )
        }
    </div>
  )
}

export default Star