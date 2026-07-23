import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoBagAddOutline, IoEyeOutline } from 'react-icons/io5'
import { FiStar } from 'react-icons/fi'

const Wishlist = () => {
    const { wishlist, setWishlist, WishlistItem, CartProduct } = useContext(UserContext)
    const isWishlisted = (productId) => {
        return wishlist.some(
            (item) => item.productid._id === productId
        );
    };
    console.log("wishlist",wishlist);

    return (
        <div className="px-4 sm:px-10 lg:px-20 py-10">
            <div className="text-lg font-semibold capitalize">My wishlist <span className="font-normal">{wishlist.length} items</span></div>
            {wishlist.length === 0 ?
                (<div className="w-full mt-5 rounded-3xl py-12 sm:py-20  shadow-xl  flex flex-col justify-center items-center">
                    <div className=" w-full max-w-[280px] sm:w-80 flex flex-col gap-1 justify-center items-center ">
                        <div className="text-3xl w-20 h-20 sm:w-23 sm:h-23 text-[28px] sm:text-[35px] rounded-full bg-[#f78a9521] text-[#FF8F9C] flex flex-col justify-center items-center"><FaRegHeart /></div>
                        <p className="font-gray-600 font-bold text-[22px] sm:text-[25px]">Your wishlist is waiting!</p>
                        <p className="text-gray-400 text-center ">Create your dream collection by saving items you love. They'll be right here when you're ready to buy.</p>
                        <Link to="/" className="rounded-full cursor-pointer px-8 sm:px-10 py-2 text-[16px] sm:text-[18px] font-bold uppercase border-2 text-[#FF8F9C] mt-2 border-[#FF8F9C] hover:bg-[#FF8F9C] hover:text-white transition-all duration-300">Start shopping</Link>
                    </div>
                </div>) :
                (<>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 sm:gap-6 md:gap-8 my-5">

                        {wishlist?.map((item) => {
                            return (
                                <>
                                    <Link
                                        to={`/productdetail/${item.productid._id}`}
                                        onClick={() => window.scrollTo(0, 0)} className="group shadow-sm   rounded-2xl ">
                                        <div className="group-hover:shadow-2xl h-full rounded-2xl  group-duration-300 transition-all">
                                            <div className="">
                                                <div className="relative overflow-hidden flex flex-col justify-between">
                                                    <div className="group-hover:hidden  w-full aspect-square flex flex-col justify-center items-center m-auto "><img src={item?.productid.images[0]} className="object-cover w-full h-full rounded-lg" alt="" /></div>
                                                    <div className="hidden group-hover:block w-full aspect-square  flex flex-col justify-center items-center m-auto"><img src={item?.productid.images[1]} className="object-cover w-full h-full rounded-lg" alt="" /></div>
                                                    <div className="absolute top-2 right-2 flex text-lg flex-col gap-1 lg:right-[-50px] lg:group-hover:right-[5px] transition-all duration-500">

                                                        <p className="border border-gray-200 bg-white flex text-[16px] flex-col justify-center items-center p-1 text- rounded-sm shadow-2xl">
                                                            {isWishlisted(item.productid._id) ? (
                                                                <FaHeart
                                                                    className="text-red-500  cursor-pointer"
                                                                    onClick={() => WishlistItem(item.productid._id)}
                                                                />) :
                                                                (<FaRegHeart
                                                                    className=" cursor-pointer"
                                                                    onClick={() => WishlistItem(item.productid._id)}
                                                                />)
                                                            }
                                                        </p>

                                                        <Link to={`/productdetail/${item.productid._id}`} className="border border-gray-200 flex flex-col justify-center items-center bg-white p-1  rounded-sm shadow-2xl "><IoEyeOutline /></Link>
                                                        <p onClick={() => CartProduct(item.productid._id, selectedSize)} className="border flex flex-col justify-center items-center border-gray-200 cursor-pointer bg-white p-1  rounded-sm shadow-2xl"><IoBagAddOutline /></p>
                                                    </div>
                                                </div>

                                                <div className="px-2 sm:px-3 py-3">
                                                    <div className="flex justify-between w-full font- items-center text-[11px] sm:text-[12px] gap-2 font-semibold">
                                                        <div className="text-[#FF8F9C] truncate uppercase flex-1 min-w-0">{item.productid?.subcategory}</div>
                                                        <div className="text-gray-500 text-[10px] sm:text-[12px] truncate  font-semibold">@{item.productid?.brand}</div>
                                                    </div>

                                                    <div className="text-gray-700 truncate font-semibold my-1 text-sm sm:text-base">{item.productid?.title}</div>
                                                    <div className="flex items-center text-yellow-400 my-2 text-sm sm:text-base"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                                                    <div className="flex font-semibold items-center gap-2 text-sm sm:text-base">
                                                        <p >₹{item.productid.price.toFixed(2)}</p>
                                                        <p className="line-through text-gray-400 text-xs sm:text-sm">₹5678</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                    {/* <div className="rounded-2xl shadow border relative border-gray-200 overflow-hidden">
                                        <div className="w-full h-60 cursor-pointer"><img src={item.productid.images[0]} className="w-full h-full object-cover" alt="" /></div>

                                        <div className="p-3 gap-1 flex flex-col">
                                            <p className="uppercase text-[12px] font-bold text-[#FF8F9C]">{item.productid.subcategory}</p>
                                            <p className="">{item.productid.title}</p>
                                            <p className="font-semibold">₹{item.productid.price}</p>
                                        </div>
                                        <div className="top-2 right-2 absolute">
                                            {isWishlisted(item.productid._id) ? (
                                                <FaHeart
                                                    className="text-red-500 text-xl cursor-pointer"
                                                    onClick={() => WishlistItem(item.productid._id)}
                                                />) :
                                                (<FaRegHeart
                                                    className="text-xl cursor-pointer"
                                                    onClick={() => WishlistItem(item.productid._id)}
                                                />)
                                            }

                                        </div> */}
                                    {/* <i className="top-2 right-2 absolute text-2xl text-[#ff3f56] cursor-pointer"><IoMdHeart /></i> */}
                                    {/* </div> */}
                                </>
                            )
                        })}

                    </div>
                </>)
            }
        </div>
    )
}

export default Wishlist