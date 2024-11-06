import React from 'react'
import OrderButton from './Btn/OrderButton'
import THeader from './Table/THeader'
import TBody from './Table/TBody'
import demoHistory from '../../OrderHistory/Components/demoHistory'

function OrderHistory() {  
    const customerStyle = {
        textHover: 'hover:scale-110 transition-all duration-500 ease-linear hover:translate-x-2'
    }
  return (
    <section className={`col-span-9 min-w-full min-h-[404px] border-2 rounded-xl`}>
        <div className={`min-w-full`}>
            <div className={`min-w-full flex justify-between items-center p-8`}>
                <h1 className={`text-xl font-medium cursor-pointer leading-6 tracking-normal align-top text-Gray90 ${customerStyle.textHover}`}>Recet Order History</h1>
                <OrderButton label={'view all'} defaultStyle={customerStyle.textHover}/>
            </div>
            <table className={`min-w-full `}>
                <THeader />
                <TBody historyData={demoHistory}/>
            </table>
        </div>
    </section>
  )
}

export default OrderHistory