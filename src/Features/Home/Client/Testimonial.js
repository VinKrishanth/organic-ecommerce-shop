import React, { useEffect, useState } from 'react'
import ReviewInfo from './components/ReviewInfo.js'
import TestimonialPage from '../../../Components/Account/Team/Testimonial'

function Testimonial() {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceSize]); 

    const customerStyle = {
        container: '',
        dxl: '2xl:px-32 2xl:-16',
        xl: 'xl:py-16',
        lg: 'lg:min-w-screen ',
        md: 'md:py-10 ',
        sm:' sm:px-16 sm:py-10  ',
        base: 'min-w-full p-10'
    }
  return (
    <section className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} `}>
        <div className={`grid xl:grid-cols-3 sm:grid-cols-2  grid-cols-1 xl:gap-12 gap-8`}>
        {
           ReviewInfo.map((review, index) => {
            return(
              <div key={index} className={`col-span-1`}>
                  <TestimonialPage 
                    reviewDescription={review.Description}
                    reviewerJob={review.reviewerType}
                    reviewerName={review.reviewerName}
                    sourceURL={review.sourceURL}
                    key={review.ID}
                  />
              </div>
            )
           })
        }
        </div>
    </section>
  )
}

export default Testimonial