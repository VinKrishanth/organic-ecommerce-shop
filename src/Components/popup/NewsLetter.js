import React, { useEffect, useState } from 'react'
import TextInputButton from '../../Components/Input/TextInputButton'
import PopPupSource from '../../assets/popup/newletter-poppup.svg'
import close from '../../assets/popup/close-icon.svg'
import {handleClosePopup} from '../../Components/Js/commonButtonFunction'

function NewsLetter() {
    const customerStyle = {
        container: 'flex justify-center items-center  over-hidden z-10',
        dxl: '2xl:px-4 2xl:mt-32',
        xl: 'xl:mt-16',
        lg: '',
        md: '',
        sm:'',
        base: ''
    }

    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
    const handleResize = () => setDeviceSize(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []); 
  return (
    <section id='newLetter' className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} ${deviceSize && 'hidden'}`}>
        <main className={`flex justify-between items-center border-2 bg-white rounded-xl p-4 2xl:scale-125 xl:scale-110 lg:scale-90 `}>
          <figure className={`flex justify-center items-center `}>
            <img src={PopPupSource} alt='The New letter pop-pop' className={`object-cover object-center`} />
          </figure>  
          <div className={`flex-grow m flex flex-col justify-center items-center gap-8  py-8  relative`}>
            <h1 className={`2xl:text-4xl text-3xl text-center  tracking-normal font-semibold align-top max-w-[70%] `}>Subcribe to Our Newsletter</h1>
            <p className={`2xl:text-base text-sm font-normal tracking-normal leading-6 text-center align-top text-Gray40 max-w-[70%]`}>Subscribe to our newlletter and Save your <span className='text-Warning'>20% money</span> with discount code today.</p>
            <div className={`px-32 min-w-full`}>
                 <TextInputButton />
            </div>
            <div className={`flex justify-center items-center gap-4 xl:scale-100 md:scale-90`}>
                <input type='checkbox' name='' className={``} />
                <label className={`text-sm font-normal tracking-normal leading-6 text-left align-top text-Gray60`}>Do not show this window</label>
            </div>
            <div className={`flex justify-center items-center min-w-11 min-h-11 absolute text-black z-10 top-0 right-0`}>
                <img 
                    src={close} 
                    alt='The close' 
                    className={`object-cover object-center`} 
                    onClick={()=>{handleClosePopup()}}
                />
            </div>
          </div>
        </main>
    </section>
  )
}

export default NewsLetter