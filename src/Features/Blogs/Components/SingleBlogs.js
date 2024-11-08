import React from 'react'
import {mainSource,  blogSource1, blogSource2} from '../../../assets/Blog/Single/index.js'
import Banner from './Single/Banner.js'
import Comments from './Single/Comments.js'
import LeaveComment from './Single/LeaveComment.js'
import BlogInfo from './Single/BlogInfo.js'

function SingleBlogs() {
    return (
        <div className={`flex flex-col justify-start items-start col-span-8 mt-10 overflow-x-auto max-w-[872px]`}>
            <div className={`grid grid-cols-1 gap-8`}>
                <div className={`flex justify-start items-start  min-h-fit col-span-1 max-h-[600px] `}>
                    <img src={mainSource}  alt='single blog source' className={`object-cover object-center cursor-pointer`} />
                </div> 
                <BlogInfo />
                <h2 className={`text-lg font-medium leading-6 tracking-normal align-top text-justify cursor-pointer text-Gray90`}>Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.</h2>
                <p className={`text-base font-medium leading-6 tracking-normal align-top text-justify cursor-pointer text-Gray60`}>Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.</p>
                <p className={`text-base font-medium leading-6 tracking-normal align-top text-justify cursor-pointer text-Gray60`}>Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</p>
                <div className={`grid grid-cols-2 gap-8 max-h-[356px]`}>
                    <figure className={`flex justify-center items-center cursor-pointer col-span-1  hover:opacity-70 transition-all duration-700 delay-100 overflow-hidden`}>
                        <img src={blogSource1}  alt='single blog source' className={`object-cover object-center scale-150`} />
                    </figure>
                    <figure className={`flex justify-center items-center cursor-pointer col-span-1  hover:opacity-70 transition-all duration-700 delay-100 overflow-hidden`}>
                        <img src={blogSource2}  alt='single blog source' className={`object-cover object-center scale-150`} />
                    </figure>
                </div> 
                <p className={`text-base font-medium leading-6 tracking-normal align-top text-justify cursor-pointer text-Gray60`}>Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
                </p>
                <Banner /> 
                <LeaveComment />
                <Comments />
            </div>      
        </div>
      )
    }

export default SingleBlogs