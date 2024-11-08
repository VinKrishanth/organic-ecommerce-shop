import React from 'react'
import BlogMainTitle from './BlogMainTitle.js'
import {RecentlySource1 , RecentlySource2, RecentlySource3} from '../../../assets/Blog/index.js'
import NewBlog from '../../../Components/Cards/Blog/NewBlog'

function RecentlyAdded() {
  const RecentlyUpdateData = [
      {ID: 1, sourceURL : RecentlySource1, updateDate: 'Oct 30, 2024'},
      {ID: 2, sourceURL : RecentlySource2, updateDate: 'Sep 12, 2024'},
      {ID: 3, sourceURL : RecentlySource3, updateDate: 'Sep 10, 2024'}
  ];
  return (
    <div className={`flex justify-start items-start flex-col min-w-full gap-2`}>
        <BlogMainTitle 
          Title={'Recently Added'}
        />
        <div className={`min-w-full grid grid-cols-1 gap-4`}>
            <div className={`flex flex-col justify-start items-start col-span-1 gap-4`}>
              {
                RecentlyUpdateData.map((item, index)=> {
                  return(
                    <NewBlog 
                      sourceURL={item.sourceURL}
                      updateDate={item.updateDate}
                      index={index}
                      key={index}
                    />
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default RecentlyAdded