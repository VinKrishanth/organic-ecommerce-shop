import React from 'react'

function BlogMainTitle({Title}) {
  return (
    <div className={`flex justify-start items-start`}>
        <h1 className={`text-lg font-medium leading-6 tracking-normal align-top text-left cursor-pointer hover:scale-110 hover:translate-x-1 transition-all duration-700 ease-linear`}>{Title}</h1>
    </div> 
  )
}

export default BlogMainTitle