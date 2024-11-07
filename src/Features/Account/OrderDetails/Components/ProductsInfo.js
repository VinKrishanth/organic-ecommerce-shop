import React from 'react'
import THead from './Table/THead'
import Tbody from './Table/Tbody'

function ProductsInfo() {
    return (
        <table className={'flex flex-col justify-start items-center rounded-xl  col-span-9 mt-8'}>
            <THead />
            <Tbody />
        </table>
    )
}

export default ProductsInfo