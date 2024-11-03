import React from 'react'
import Blogs from '../../../../Components/Cards/Blog/Blogs'
import Items from './Items.js'

function NewsItems() {
  return (
    <div className={`grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8`}>
        {
            Items.map((news, index) =>{
                return(
                    <div key={index} className={`col-span-1 px-4`}>
                        <Blogs
                            key={index} 
                            blogSource ={news.sourceURL}
                            blogSourceURL ={`/`}
                            blogTitle={news.newsTitle}
                            blogDate={news.updateDate}
                            blogMonth={news.updateMonth}
                        />
                    </div> 
                )
            })
        }   
    </div>   
  )
}

export default NewsItems