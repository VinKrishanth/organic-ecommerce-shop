import React from 'react'
import BlogItems from '../../../../assets/Product/Blog/BlogItems'
import TagInfo from './TagInfo'

function Tags() {
  return (
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
  )
}

export default Tags