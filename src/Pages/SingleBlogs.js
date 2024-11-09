import React from 'react'
import Header from '../Containers/Header'
import Footer from '../Containers/Footer'
import BlogLayout from '../Layouts/BlogLayout'

function SingleBlogs() {
    return (
        <>
          <Header />
          <BlogLayout 
            blogType={`single`}
          />
          <Footer />
        </>
      )
    }
export default SingleBlogs