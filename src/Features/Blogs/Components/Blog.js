import React from 'react'
import SampleBlogData from './SampleBlogData.js'
import Blogs from '../../../Components/Cards/Blog/Blogs'

function Blog() {
  return (
    <div className={`flex justify-start items-start col-span-8 mt-10`}>
       <div className={`grid grid-cols-2 min-w-full `}>
       {
            SampleBlogData.map((news, index) =>{
                return(
                    <div key={index} className={`col-span-1 px-4`}>
                        <Blogs
                            key={index} 
                            blogSource ={news.sourceURL}
                            blogSourceURL ={`/`}
                            blogTitle={news.newsTitle}
                            blogDate={news.updateDate}
                            blogMonth={news.updateMonth}
                            ID={news.ID}
                            customerStyle={`mb-8`}
                        />
                    </div> 
                )
            })
        } 
        </div>        
    </div>
  )
}

export default Blog