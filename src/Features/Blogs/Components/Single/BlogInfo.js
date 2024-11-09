import React from 'react'
import Tags from  '../../../../Components/Cards/Blog/Components/Tags'
import Comment from '../../../../Components/Cards/Blog/Comment'
import DemoComment from './DemoComment'
import SocialMediaItems from '../../../../Components/Cards/Team/Components/SocialMediaItems'

function BlogInfo() {
  return (
    <div className={`flex justify-start items-start min-w-full  col-span-1 relative overflow-x-hidden pb-8`}>
        <div className={`grid grid-cols-1 min-w-full gap-4`}>
            <div className={`flex justify-start items-center col-span-1`}>
                <Tags />
            </div>
            <div className={`flex justify-start items-center col-span-1`}>
                <h1 className={`text-[32px] font-medium text-Gray90 text-left align-top tracking-normal cursor-pointer hover:text-opacity-80 transition-all duration-500 ease-linear delay-75  `}>Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.</h1>
            </div>
            <div className={`flex justify-between items-center col-span-1 min-w-full`}>
                <Comment 
                  comment={DemoComment[0].updateDate}
                  name={DemoComment[0].customerName}
                  sourceURL={DemoComment[0].sourceURL}
                  key={1}
                  updateDate={'6 min read'}
                  index={10}
                  singleUse={true}
                />
                <div className={`flex justify-start items-center`}>
                    <SocialMediaItems  
                       
                    />
                </div>
            </div>
        </div>
    </div> 
  )
}

export default BlogInfo