import React, { useContext, useState } from 'react'
import { categories } from '../../../assets/CategoryList'
import { UserContext } from '../../../Context/UserContext'
import { Link } from 'react-router-dom'

const TotalProducts = () => {

    return (
        <>
            <div className="grid grid-cols-4 gap-8 items-center my-10">
                {categories.map((item) => {
                    return (
                        <>
                            <Link to={`/category/${item.category}/${item.gender}`}>
                                <div className="border border-gray-200 gap-2 item-center rounded-xl p-5 flex ">
                                    <div className="w-13"><img src={item.img} className="w-full h-full rounded-sm" alt="" /></div>
                                    <div className="flex flex-col justify-between w-full">
                                        <div className="flex justify-between items-center ">
                                            <p className="uppercase text-[14px] font-semibold">{item.name}</p>
                                            <p className="text-gray-500 text-xs font-semibold">(1000)</p>
                                        </div>
                                        <p className="text-[#ff8f9c] font-semibold text-sm" >Show All</p>
                                    </div>
                                </div></Link>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default TotalProducts
