import React, { createContext, useEffect, useState } from 'react'
import TopHeader from '../../Components/Navigation/Components/TopHeader'
import MainHeader from '../../Components/Navigation/Components/MainHeader'

export const UserContext = createContext();

function Navigation({toggleMenu}) {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <UserContext.Provider  value={{deviceSize, setDeviceSize}}>
        <div className={`w-screen text-Gray60`}>
          <section className={`flex flex-col`}>
            <TopHeader />
            <MainHeader 
              toggleMenu={toggleMenu}
            />
          </section>
        </div>
      </UserContext.Provider>
    )
}

export default Navigation