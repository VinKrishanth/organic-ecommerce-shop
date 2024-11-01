import React, { createContext, useEffect, useState } from 'react'
import TopFooter from './Components/TopFooter'
import FooterMain from './Components/FooterMain'

export const UserContext = createContext();

function Footers() {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
  useEffect(() => {
  const handleResize = () => setDeviceSize(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <UserContext.Provider value={{deviceSize, setDeviceSize}}>
        <div className={`flex flex-col justify-between items-start w-screen`}>
            <TopFooter />
            <FooterMain />
        </div>
    </UserContext.Provider>
  )
}

export default Footers