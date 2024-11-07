import React from 'react'

function CartInfo() {
    return (
        <div className={'flex flex-col justify-start  items-start border-2 col-span-3 mr-8 p-8 cursor-pointer  duration-700 transition-all ease-linear delay-200'}>
            <table className={`min-w-full grid grid-cols-1`}>
                <thead className={`mim-w-full flex justify-start items-start col-span-1 `}>
                    <tr className={`flex justify-between min-w-full items-start`}>
                        <th key={1} className={`flex flex-col justify-start items-start pr-8 border-r-2 gap-1`}>
                            <h1 className={`text-xs font-medium align-top text-Gray90 tracking-wide leading-4 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 uppercase `}>Order ID:</h1>
                            <p className={`text-md font-normal align-top text-Gray40 tracking-normal leading-6 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100`}>#4152</p>
                        </th>
                        <th key={2} className={`flex flex-col justify-start items-start gap-1`}>
                            <h1 className={`text-xs font-medium align-top text-Gray90 tracking-wide leading-4 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 uppercase`}>Payment methods:</h1>
                            <p className={`text-md font-normal align-top text-Gray40 tracking-normal leading-6 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100`}>Paypal</p>
                        </th>
                    </tr>
                </thead>
                <tbody className={`mim-w-full flex flex-col justify-start items-start col-span-1 py-4`}>
                    <tr key={3} className={`flex justify-between min-w-full items-start border-b-2 pb-2`}>
                        <th className={`text-sm font-normal tracking-normal leading-6 align-top text-Gray60 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>subtotal:</th>
                        <th className={`text-sm font-medium tracking-normal leading-6 align-top text-Gray90 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>{`$${parseFloat(365).toFixed(2)}`}</th>
                    </tr>
                    <tr key={4} className={`flex justify-between min-w-full items-start border-b-2 pb-2`}>
                        <th className={`text-sm font-normal tracking-normal leading-6 align-top text-Gray60 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>discount:</th>
                        <th className={`text-sm font-medium tracking-normal leading-6 align-top text-Gray90 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>{`${20}%`}</th>
                    </tr>
                    <tr key={5} className={`flex justify-between min-w-full items-start border-b-2 pb-2`}>
                        <th className={`text-sm font-normal tracking-normal leading-6 align-top text-Gray60 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>shopping:</th>
                        <th className={`text-sm font-medium tracking-normal leading-6 align-top text-Gray90 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>free</th>
                    </tr>
                </tbody>
                <tfoot className={`mim-w-full flex flex-col justify-start items-start col-span-1`}>
                    <tr key={6} className={`flex justify-between min-w-full items-start `}>
                        <th className={`text-lg font-normal tracking-normal leading-6 align-top text-Gray90 cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>total:</th>
                        <th className={`text-lg font-medium tracking-normal leading-6 align-top text-textSuccessDark cursor-pointer hover:scale-110 transition-all duration-700 ease-linear delay-100 capitalize`}>{`$${parseFloat(365).toFixed(2)}`}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
      )
}

export default CartInfo