import React, { useContext, useEffect, useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { products } from '../../../assets/CategoryList';
import { FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { UserContext } from '../../../Context/UserContext';


function ProductDetail() {
    const { id } = useParams();
    const { getProducts ,CartProduct,setselectedSize,selectedSize,WishlistItem} = useContext(UserContext)
    const[img,setImg] = useState(0)

    
    

    const productitem = getProducts.find((data) => data._id == id)
    
    return (
        <div className="px-20 my-20">
            <div>
                <>
                    <div className="text-gray-800 ">
                        <div className="font-semibold text-[12px] text-gray-500 cursor-pointer uppercase flex gap-2"> Home / <p> {productitem?.category} /</p> <p>{productitem?.subcategory}</p></div>
                        <hr className="text-gray-300 my-3" />
                        <div className="grid grid-cols-2 gap-10 mb-15">

                            <div className="flex gap-7 mt-6  m-auto items-center">
                                <div className="flex flex-col justify-between gap-3  py-12">
                                    {productitem?.images.map((img, index)=>{
                                        return(
                                            <p className="border border-gray-200 rounded-md overflow-hidden" onClick={() => setImg(index)}><img src={img} className="w-20 object-cover" alt="" /></p>
                                        )
                                    })}
                                </div>
                                <div className="overflow-hidden hover:border-gray-100 hover:border  rounded-lg relative">
                                   
                                    <img src={productitem?.images[img]} alt="" className="hover:scale-120 transition-all duration-500" />
                                   
                                    <i onClick={() => WishlistItem(productitem._id)} className="absolute top-5 text-2xl  right-5"><IoIosHeartEmpty /></i>
                                </div>
                            </div>

                            <div className="py-5">
                                <div className="font-semibold text-[18px]">{productitem?.title}</div>
                                <div className=" text-gray-400 flex  items-center gap-2">Sold by : <p className="text-purple-600 uppercase font-bold text-sm hover:underline ">{productitem?.seller?.shopname}</p></div>

                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-5">
                                        <div className="text-[#ff8f9c] font-bold text-[30px] my-2">₹ {productitem?.price.toFixed(2)}</div>
                                        <div className="text-gray-400 text-[18px] line-through">₹ 34567</div>
                                    </div>
                                    <div className="flex gap-2 items-center  text-yellow-300  border-gray-300 border-s-1px ps-3">
                                        <div className="flex"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                                        <div className="text-gray-400 text-sm">(0)</div>
                                    </div>
                                </div>

                                <hr className="text-gray-100 mt-5 mb-2" />



                                {productitem?.size == [] ?
                                    (<p className="mt-10 text-sm font-semibold">Select Size: {}</p>) :
                                    ("")}
                                <div className="flex gap-2 text-[10px] mt-2 text-gray-700 font-bold items-center">
                                    <>
                                        {productitem?.size.map((size) => (
                                            <div
                                                key={size} onClick={() => setselectedSize(size)}
                                                className={`flex gap-1 px-3 py-1 items-center justify-center uppercase border-transparent hover:border  transition-all duration-100 rounded-full shadow-sm ${selectedSize === size
                                                ? "bg-[#ff8f9c] text-white border-[#ff8f9c]"
                                                : "border-gray-300"
                                                }`}>
                                                {size}
                                            </div>
                                        ))}
                                    </>
                                </div>


                                <div className="flex item-center justify-between mt-10">
                                    <div className="text-sm uppercase">Already Sold : <span className="text-black font-semibold">0</span></div>
                                    <div className="text-sm uppercase">Available : <span className="text-green-500 font-semibold">{productitem?.livestock}</span></div>
                                </div>
                                <hr className="text-gray-100 border-4 my-3 rounded-full " />

                                <div className="font-semibold">Description</div>
                                <div className="text-sm pt-3 pb-8 text-gray-600">{productitem?.description}</div>

                                <div className="flex items-center gap-5 ">
                                    <div className="text-white group  hover:gap-3 hover:m-0 border-black   w-45 flex items-center overflow-hidden font-semibold uppercase  cursor-pointer  py-4 bg-[#ff8f9c] rounded-lg">
                                        <p className="ms-[-30px] hidden group-hover:block  w-fit   group-hover:ms-5  transition-all duration-300  text-[20px]"><BsCart3 /></p>
                                        <div onClick={() => {CartProduct(productitem._id,selectedSize), scrollTo(0,0)} } className="flex  flex-col justify-center m-auto group-hover:m-0 group-hover:me-[-50px] w-fit   ">add to cart</div>
                                    </div>
                                    <div className="bg-[#353434] group px-10 rounded-lg  flex items-center overflow-hidden">
                                        <div className="flex items-center gap-2  relative py-2">
                                            <div className="uppercase text-white font-semibold group-hover:translate-x-[1px]  transition-all duration-300 absolute translate-x-[-80px]">Now</div>
                                            <div className="group-hover:translate-x-15 group-hover:translate-y-6   duration-300 group-hover:scale-250 w-10 h-10"><img src={productitem?.images[0]} className="w-full h-full" alt="img" /></div>
                                            <div className="uppercase text-white font-semibold group-hover:translate-x-18 duration-300">Buy</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4 my-30">
                        <div className="text-[22px] font-semibold ">Product description</div>
                        <hr className="text-gray-200  w-50" />
                        <p className="font-semibold text-gray-500">{productitem?.metatitle}</p>
                        <p className="w-[90%] text-[14px] text-gray-500 font-semibold">{productitem?.metadescription}</p>


                        <div className="text-[22px] font-semibold mt-5">Product Specification</div>
                        <hr className="text-gray-200  w-50" />

                        <div className="text-[22px] font-semibold mt-5">Block Description</div>
                        <p className="font-semibold text-gray-500">{productitem?.blocktitle}</p>
                        <p className="w-[90%] text-[14px] text-gray-500 font-semibold">{productitem?.description}</p>


                        <div className="text-[22px] font-semibold mt-5">Image Description</div>
                        <p className="font-semibold text-gray-500">{productitem?.imgtitle}</p>
                        <div className="w-[90%] my-10"><img src={productitem?.descimage[0]} className="w-full h-full object-cover rounded-2xl" alt="" /></div>
                    </div>
                </>
            </div>

        </div>
    )
}

export default ProductDetail