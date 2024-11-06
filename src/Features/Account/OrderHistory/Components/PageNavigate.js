import React from 'react'
import Pagination from '../Btn/Pagination'

function PageNavigate() {
  return (
    <div className={`col-span-9 justify-center items-center py-8`}>
        <div className={`flex min-w-full justify-center items-center `}>
            <Pagination />
        </div>
    </div>
  )
}

export default PageNavigate