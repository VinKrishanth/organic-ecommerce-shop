import React from 'react'
import CommonTitle from './CommonTitle'
import TitleData from './TitleData.js'
import BlogMainTitle from './BlogMainTitle.js'

function TopCategories() {
  return (
    <div className={`flex justify-start items-start flex-col min-w-full gap-2`}>
        <BlogMainTitle 
          Title={'Top Categories'}
        />
        <div className={`min-w-full grid grid-cols-1 gap-2`}>
            {
              TitleData.map((item, index)=> {
                return(
                  <CommonTitle
                    key={index}
                    index={index} 
                    blogCount={item.count} 
                    Title ={item.Title}
                    ID={item.ID}
                  />
                )
              })
            }
        </div>
    </div>
  )
}

export default TopCategories