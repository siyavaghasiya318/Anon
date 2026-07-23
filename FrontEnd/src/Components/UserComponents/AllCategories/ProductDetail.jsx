import React, { useContext, useEffect, useState } from 'react'
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { products } from '../../../assets/CategoryList';
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { UserContext } from '../../../Context/UserContext';


function ProductDetail() {
    const { id } = useParams();
    const { getProducts, CartProduct, setselectedSize, selectedSize, WishlistItem, wishlist } = useContext(UserContext)
    const [img, setImg] = useState(0)
    console.log(wishlist);

    const productitem = getProducts.find((data) => data._id == id)

    const iswishlisted = (productid) => {
        return wishlist.some((item) => item.productid._id === productid)
    }

    return (
        <div className="lg:px-20 my-10 px-2 sm:px-5 md:px-12">
            <div>
                <>
                    <div className="text-gray-800">
                        <div className="font-semibold text-[12px] text-gray-500 cursor-pointer uppercase flex gap-2"> Home / <p> {productitem?.category} /</p> <p>{productitem?.subcategory}</p></div>
                        <hr className="text-gray-300 my-3" />
                        <div className="grid md:grid-cols-2 gap-10 mb-15">

                            <div className="md:flex gap-7 mt-6 relative  m-auto items-center">
                                <div className="hidden lg:block flex flex-col justify-between  py-12">
                                    {productitem?.images.map((img, index) => {
                                        return (
                                            <p className="border border-gray-200  rounded-md overflow-hidden" onClick={() => setImg(index)}><img src={img} className="w-20 object-cover" alt="" /></p>
                                        )
                                    })}
                                </div>
                                <div className="overflow-hidden hidden lg:block hover:border-gray-100 hover:border  rounded-lg relative">

                                    <img src={productitem?.images[img]} alt="" className="hover:scale-120  transition-all duration-500" />



                                </div>

                                <div className="block relative lg:hidden flex overflow-x-auto snap-x  md:rounded-lg snap-mandatory gap-0 mt-5 no-scrollbar">
                                    {productitem?.images.map((img, index) => {
                                        return (
                                            <div key={index} className="w-full shrink-0 snap-center relative">
                                                <img src={img} className="w-full h-full object-cover" alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="absolute top-10 lg:right-5 lg:top-8 lg:text-3xl md:text-2xl md:right-4   text-3xl right-5">
                                    {iswishlisted(productitem?._id) ?
                                        (<i onClick={() => WishlistItem(productitem._id)}
                                            className="  text-red-600 cursor-pointer ">
                                            <IoMdHeart />
                                        </i>) :
                                        (<i onClick={() => WishlistItem(productitem._id)}
                                            className="  text-gray-300 cursor-pointer ">
                                            <IoMdHeart />
                                        </i>)
                                    }
                                </div>
                            </div>

                            <div className="md:py-10 lg:py-5">
                                <div className="font-semibold text-md md:text-[18px]">{productitem?.title}</div>
                                <div className=" text-gray-400 flex  items-center gap-2 md:text-md text-sm">Sold by : <p className="text-purple-600 uppercase font-bold text-xs md:text-sm hover:underline ">{productitem?.seller?.shopname}</p></div>

                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-5">
                                        <div className="text-[#ff8f9c] font-bold text-[22px] xs:text-[22px] md:text-[23px] lg:text-[30px] my-2">₹ {productitem?.price.toFixed(2)}</div>
                                        <div className="text-gray-400 text-md lg:text-[18px] line-through">₹ 34567</div>
                                    </div>
                                    <div className="flex gap-2 items-center  text-yellow-300 text-sm md:text-md border-gray-300 border-s-1px ps-3">
                                        <div className="flex"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                                        <div className="text-gray-400 text-xs md:text-sm">(0)</div>
                                    </div>
                                </div>

                                <hr className="text-gray-100 mt-5 mb-2" />



                                {productitem?.size == [] ?
                                    (<p className="mt-10  font-semibold">Select Size: { }</p>) :
                                    ("")}
                                <div className="flex gap-2  mt-2 text-gray-700 text-[10px] cursor-pointer font-bold items-center">
                                    <>
                                        {productitem?.size.map((size) => (
                                            <div
                                                key={size} onClick={() => setselectedSize(size)}
                                                className={`flex gap-1 px-2 md:px-3 py-1 items-center justify-center uppercase border-transparent hover:border  transition-all duration-100 shadow-sm ${selectedSize === size
                                                    ? "bg-[#ff8f9c] text-white border-[#ff8f9c]"
                                                    : "border-gray-300"
                                                    }`}>
                                                {size}
                                            </div>
                                        ))}
                                    </>
                                </div>


                                <div className="flex item-center justify-between mt-10 text-xs font-semibold lg:text-sm">
                                    <div className=" uppercase">Already Sold : <span className="text-black font-semibold">0</span></div>
                                    <div className=" uppercase">Available : <span className="text-green-500 font-semibold">{productitem?.livestock}</span></div>
                                </div>
                                <hr className="text-gray-100 border-3 lg:border-4 my-3 rounded-full " />

                                <div className="font-semibold lg:mt-0 mt-5">Description</div>
                                <div className="text-sm pt-2 lg:mt-3 pb-8 text-gray-600">{productitem?.description}</div>

                                <div className="flex items-center gap-5 w-[70%]  md:w-[80%] lg:w-[70%]">
                                    <div className="text-white group w-1/2  hover:gap-3 hover:m-0 border-black flex items-center overflow-hidden font-semibold uppercase  cursor-pointer py-3 lg:py-4 bg-[#ff8f9c] rounded-lg">
                                        <p className="ms-[-30px] hidden group-hover:block  w-fit   group-hover:ms-5  transition-all duration-300 text-md md:text-[20px]"><BsCart3 /></p>
                                        <div onClick={() => { CartProduct(productitem._id, selectedSize), scrollTo(0, 0) }} className="flex  flex-col justify-center m-auto group-hover:m-0 group-hover:me-[-50px] w-fit text-sm  md:text-md">add to cart</div>
                                    </div>
                                    <div className="bg-[#353434] w-1/2 cursor-pointer group justify-center rounded-lg  flex items-center overflow-hidden">
                                        <div className="flex items-center gap-2 relative py-3 lg:py-4 md:text-md text-sm  md:text-md">
                                            <div className="uppercase text-white font-semibold group-hover:translate-x-[0px]  transition-all duration-300 absolute translate-x-[-130px]">Now</div>
                                            {/* <div className="group-hover:translate-x-15 group-hover:translate-y-6   duration-300 group-hover:scale-250 w-10 h-10">
                                                    <img src={productitem?.images[0]} className="w-full h-full" alt="img" /></div> */}
                                            <div className="uppercase text-white font-semibold group-hover:translate-x-28  duration-300">Buy</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4 my-30 ">
                        <div className="md:text-[22px] text-[18px] font-semibold ">Product description</div>
                        <hr className="text-gray-200  w-50" />
                        <p className="font-semibold text-gray-500 md:text-md text-sm">{productitem?.metatitle}</p>
                        <p className="w-[90%] md:text-md text-sm text-gray-500 font-semibold">{productitem?.metadescription}</p>


                        <div className="md:text-[22px] text-[18px] font-semibold mt-3 md:mt-4">Product Specification</div>
                        <hr className="text-gray-200 w-50" />

                        <div className="md:text-[22px] text-[18px] font-semibold mt-3 md:mt-5">Block Description</div>
                        <p className="font-semibold text-gray-500 md:text-md text-sm">{productitem?.blocktitle}</p>
                        <p className="w-[90%] md:text-md text-sm text-gray-500 font-semibold">{productitem?.description}</p>


                        <div className="md:text-[22px] text-[18px] font-semibold mt-3 md:mt-5">Image Description</div>
                        <p className="font-semibold text-gray-500 md:text-md text-sm">{productitem?.imgtitle}</p>
                        <div className="md:w-[90%] md:my-10 my-5 m-auto"><img src={productitem?.descimage[0]} className="w-full h-full object-cover rounded-2xl" alt="" /></div>
                    </div>
                </>
            </div>

        </div>
    )
}

export default ProductDetail