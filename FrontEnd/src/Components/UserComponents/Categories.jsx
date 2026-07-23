import React, { useState } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import { categories } from '../../assets/CategoryList';
import { Link } from 'react-router-dom';

function Categories() {
    const [toggleCategory, setToggleCategory] = useState(0)

    return (
        <>
            <div className="border p-4 sm:p-5 border-gray-200 text-gray-700 rounded-lg">
                <div className="text-[16px] sm:text-[18px] uppercase font-semibold">Category</div>
                {categories.map((item, index) => (
                    <div key={item.category}>
                        <div className="flex items-center mt-5 justify-between">
                            <div className="flex items-center gap-2 font-semibold">
                                <img src={item.img} className="w-7 sm:w-8" alt={item.name} />
                                <div className="cursor-pointer text-sm sm:text-base">{item.name}</div>
                            </div>
                            <div onClick={() => setToggleCategory(toggleCategory === index ? -1 : index)}>
                                {toggleCategory === index ? (
                                    <FiMinus className="mt-1 text-sm cursor-pointer" />
                                ) : (
                                    <FiPlus className="mt-1 text-sm cursor-pointer" />
                                )}
                            </div>
                        </div>

                        {toggleCategory === index && (
                            <div className="ml-6 sm:ml-10 mt-2 space-y-1">
                                {item.items.map((subcategory) => (
                                    <Link
                                        key={subcategory}
                                        to={`/category/${item.category}/${item.gender}/${subcategory}`}
                                        onClick={() => window.scrollTo(0, 0)}
                                        className="text-sm text-gray-400 flex flex-col font-semibold hover:text-pink-500 cursor-pointer"
                                    >
                                        {subcategory}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Categories