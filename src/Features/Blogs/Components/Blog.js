import React, { useState } from 'react'
import SampleBlogData from './SampleBlogData.js'
import Blogs from '../../../Components/Cards/Blog/Blogs'
import { useNavigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate();
    const [blogImage, setBlogImage] = useState('');
    const handleBlogClick = (url) => {
        setBlogImage(url);

        const Source = {
            blogImage: url
        };
    
        localStorage.setItem('information', JSON.stringify(Source));
        navigate(`/organic-ecommerce-shop/blog/single-blog`);
        console.log(`Image URL: ${url}`);
    };

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
                            // blogSourceURL ={`/organic-ecommerce-shop/blog/single-blog`}
                            blogTitle={news.newsTitle}
                            blogDate={news.updateDate}
                            blogMonth={news.updateMonth}
                            ID={news.ID}
                            customerStyle={`mb-8`}
                            onClick={()=>{handleBlogClick(news.sourceURL)}}
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