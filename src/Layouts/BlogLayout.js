import React, { createContext, useState } from 'react'
import  Blogs from '../Features/Blogs/Blogs'
import  SingleBlog from '../Features/Blogs/SingleBlog'

export const UserContext = createContext();
function BlogLayout({blogType}) {
    const [blogSourceMain, setBlogSourceMain] = useState('');
  return (
    <UserContext.Provider value={{blogSourceMain, setBlogSourceMain}} >
        { blogType === 'single' && <SingleBlog /> }
        { blogType === 'main' && <Blogs /> }
    </UserContext.Provider>

  )
}

export default BlogLayout