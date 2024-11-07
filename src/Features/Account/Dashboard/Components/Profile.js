import React from 'react'
import Account from '../../Setting/Component/Account'
import EditButton from './Btn/EditButton'
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <div className={`col-span-5 max-h-[278px] border-2 rounded-xl p-8`}>
      <div className={`flex justify-start items-center flex-col gap-4`}>
        <Account modifiedStyle={true}/>
        <div className={`flex flex-col justify-between items-center`}>
          <h1 className={`text-xl font-medium leading-6 tracking-normal align-top hover:translate-x-2 transition-all duration-700  ease-linear delay-100`}>Dianne Russell</h1>
          <p className={`text-sm font-normal text-Gray50 leading-6 tracking-normal align-top hover:translate-x-2 transition-all duration-700  ease-linear delay-100`}>Customer</p>
          <Link to='/organic-ecommerce-shop/my-account/setting'>
            <EditButton 
                label={`Edit Profile`}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile