import React from 'react'
import Header from '../Containers/Header'
import Footer from '../Containers/Footer'
import BlogLayout from '../Layouts/BlogLayout'

function Blog() {
  return (
    <>
      <Header />
      <BlogLayout   
        blogType={`main`}
      />
      <Footer />
    </>
  )
}

export default Blog