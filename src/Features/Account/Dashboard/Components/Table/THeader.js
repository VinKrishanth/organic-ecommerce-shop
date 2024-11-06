import React from 'react'


function THeader() {
    const tableTH = [
        {ID: 1, label: 'Order Id'},
        {ID: 2, label: 'Date'},
        {ID: 3, label: 'Total'},
        {ID: 4, label: 'Status'},
        {ID: 5, label: ''}
    ];
    const customerStyle = {
        textHover: 'hover:scale-110 transition-all duration-500 ease-linear hover:translate-x-2'
    }
  return (
    <thead className={`min-w-full  bg-Gray05`}>
        <tr className={`grid grid-cols-5 p-4 pl-8`}>
            {
                tableTH.map((tableTH, index)=>{
                    return(
                        <th key={index} className={`text-xs font-medium leading-4 tracking-wide align-top text-left cursor-pointer text-Gray70 uppercase col-span-1  flex justify-start items-center ${customerStyle.textHover}`}>{tableTH.label}</th>
                    )
                })
            }
        </tr>
    </thead>
  )
}

export default THeader