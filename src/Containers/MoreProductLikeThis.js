import React from 'react'

function MoreProductLikeThis({Title, productSource}) {
  return (
    <div className={`flex flex-col justify-start items-start min-w-full min-h-96 bg-[#333] mt-32 pb-16`}>
        <div className={`flex justify-start items-start p-8 min-w-full`}>
            <h1 className={`text-white text-3xl font-semibold`}>{Title}</h1>
        </div>
        <div className={`flex flex-wrap justify-center items-center min-w-full p-8 gap-4`}>
            {
                productSource.map((item, index) => {
                return(
                    <div key={index} className={`flex justify-start items-center max-w-[234px] max-h-[234px] bg-white rounded-xl overflow-hidden cursor-pointer `}>
                    <figure className={`flex justify-center items-center min-w-full min-h-full`}>
                        <img
                        src={item.sourceURL}
                        alt={`The product ice cream`}
                        className={`object-cover object-center`}
                        />
                    </figure>
                </div>
                )
                })
            }
        </div>
    </div>
  )
}

export default MoreProductLikeThis