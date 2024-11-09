import React, { createContext, useState } from 'react'
import  Blogs from '../Features/Blogs/Blogs'
import  SingleBlog from '../Features/Blogs/SingleBlog'
import PropType from 'prop-types'

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

BlogLayout.prototype = {
  blogType: PropType.string.isRequired
}
export default BlogLayout