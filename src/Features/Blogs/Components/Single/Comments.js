import React from 'react'
import BorderButton from '../../../../Components/Button/BorderButton'
import DemoComment from './DemoComment.js'
import BlogComment from '../../../../Components/Cards/Blog/Comment'

function Comments() {
    const handleLeaveComment = () => {
        console.log('comment button');
    }
  return (
    <div className={`flex justify-start items-start min-w-full min-h-64  col-span-1 relative overflow-x-hidden`}>
        
        <div className={`grid grid-cols-1 min-w-full gap-4`}>
            <div className={`flex justify-start items-center col-span-1`}>
                <h1 className={`text-2xl font-medium text-Gray90 text-left align-top tracking-normal leading-6 cursor-pointer hover:text-Primary hover:scale-110 transition-all duration-500 ease-linear delay-75  hover:translate-x-2`}>Comments</h1>
            </div>
            <div className={`flex flex-col justify-start items-start col-span-1 gap-4`}>
                {
                    DemoComment.map((item, index) => {
                        return(
                            <BlogComment
                                comment={item.comment}
                                name={item.customerName}
                                sourceURL={item.sourceURL}
                                key={index}
                                updateDate={item.updateDate}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className={`flex justify-start items-center col-span-1`}>
                <BorderButton 
                    label={'Load More'}
                    onClick={()=>{handleLeaveComment()}}
                    key={1}
                />
            </div>
        </div>
    </div> 
  )
}

export default Comments