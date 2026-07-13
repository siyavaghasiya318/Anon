import React, { useContext, useState } from 'react'
import { LuMinus } from "react-icons/lu";
import { FiMinus, FiPlus } from "react-icons/fi";
import { categories } from '../../assets/CategoryList';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';


function Categories() {
    const [toggleCategory, setToggleCategory] = useState(true)
    
    return (
         
        <>
            <div className="border p-5   border-gray-200 text-gray-700  rounded-lg">
                <div className="text-[18px] uppercase font-semibold">Category</div>
                {categories.map((item, index) => {
                    return (
                        <>
                            <div className="flex items-center mt-5 justify-between">

                                <div className="flex items-center gap-2 font-semibold">
                                    <img src={item.img} className="w-8" alt="" />
                                    <div className="cursor-pointer">{item.name}</div>
                                    
                                </div>

                                <div className="" onClick={() => setToggleCategory(index)} >
                                    {toggleCategory === index ?
                                    (<FiMinus className="mt-1 text-sm" />):
                                    (<FiPlus className="mt-1 text-sm" />)
                                }
                                </div>

                            </div>

                            {toggleCategory === index && (

                                    <div className="ml-10 mt-2 space-y-1">
                                        

                                        { item.items.map((subcategory) => (
                                                <Link to={`/category/${item.category}/${item.gender}/${subcategory}`}   className="text-sm text-gray-400 flex flex-col font-semibold hover:text-pink-500 cursor-pointer">{subcategory}</Link>
                                            ))
                                        }

                                    </div>

                                )
                            }
                        </>
                    )
                })}



            </div>
        </>
    )
}

export default Categories