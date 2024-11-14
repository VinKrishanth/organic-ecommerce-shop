import React from 'react'

function ProductHead() {
  return (
    <thead className={`flex justify-start items-start min-w-full uppercase text-Gray50 text-sm font-medium tracking-wider leading-4 border-b-2`}>
        <tr  className={`grid grid-cols-8 items-center min-w-full px-8 py-4`}>
            <th className={`flex justify-start items-center col-span-3 cursor-pointer`}>
                Product
            </th>
            <th className={`flex justify-between items-center col-span-1 cursor-pointer`}>
                price
            </th>
            <td className={`flex justify-between items-center col-span-2 cursor-pointer`}>
                Quantity
            </td>
            <th className={`flex justify-start items-center col-span-2 cursor-pointer`}>
                Subtotal
            </th>
        </tr>
    </thead>
  )
}

export default ProductHead