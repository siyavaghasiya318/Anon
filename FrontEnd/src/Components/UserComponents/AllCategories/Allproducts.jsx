import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { Link, useParams } from 'react-router-dom'
import { FiStar } from 'react-icons/fi';
import { IoBagAddOutline, IoEyeOutline } from 'react-icons/io5';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';

function Allproducts() {
  const { category, gender, subcategory,} = useParams();
  const{WishlistItem ,wishlist,CartProduct} = useContext(UserContext)

  const { getProducts } = useContext(UserContext)
  // const Filterdata = 
  let filteredProducts = getProducts.filter((item) => item.category == category && item.gender == gender && item.subcategory == subcategory)
  const iswishlisted = (productid) => {
        return wishlist.some((item) => item.productid._id === productid)
    }
    console.log("filtered pro...", filteredProducts);
    
  return (
    <>
      
      <div className="border leading-12 border-b-gray-100 border-t-0 border-x-0 mt-10 font-bold text-[22px]"></div>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 mt-5 my-20 px-5 sm:px-10 md:px-15 lg:px-20 m-auto">
        {filteredProducts.length == 0 ?
          ("coming soon") :
          (<>
            {filteredProducts?.map((item) => {
              return (<>
                <div className="group"> 
                  <div className="group shadow-sm   rounded-2xl  ">
                    <div className="group-hover:shadow-2xl h-full rounded-2xl  group-duration-300 transition-all">
                      <div className=" px-3 py-2 ">
                        <div className="relative  overflow-hidden  flex flex-col justify-between">
                          <div className="group-hover:hidden  w-full h-65 py-3 flex flex-col justify-center items-center m-auto "><img src={item?.images[0]} className="object-cover w-full h-full rounded-lg" alt="" /></div>
                          <div className="hidden group-hover:block w-full h-65  py-3 flex flex-col justify-center items-center m-auto"><img src={item?.images[1]} className="object-cover w-full h-full rounded-lg" alt="" /></div>
                          
                          <div className="absolute  top-5 flex flex-col gap-1 right-1 md:right-[-60px] md:group-hover:right-[3px] transition-all duration-500">
                            <p className="border border-gray-200 bg-white p-0.5 md:p-1 flex flex-col  items-center text-sm md:text-md rounded-sm shadow-2xl">
                              {iswishlisted(item._id) ?
                                (<FaHeart
                                  className="text-red-500  cursor-pointer"
                                  onClick={() => WishlistItem(item._id)}
                                />) :
                                (<FaRegHeart
                                  className=" cursor-pointer"
                                  onClick={() => WishlistItem(item._id)}
                                />)
                              }
                            </p>

                            <Link to={`/productdetail/${item._id}`} onClick={() => window.scrollTo(0, 0)} className="border border-gray-200 bg-white p-0.5 text-md md:p-1 flex flex-col  items-center lg:text-[18px] rounded-sm shadow-2xl "><IoEyeOutline /></Link>
                            <p onClick={() => CartProduct(item._id)} className="border border-gray-200 cursor-pointer bg-white p-0.5 md:p-1 flex flex-col  items-center text-md md:text-[18px] rounded-sm shadow-2xl"><IoBagAddOutline /></p>
                          </div>
                        
                        
                        </div>
                        <div className="flex justify-between w-full font- items-center text-[12px] font-semibold">
                          <div className="text-[#FF8F9C] truncate uppercase w-25">{item?.subcategory}</div>
                          <div className="text-gray-500 text-[12px]  font-semibold">@{item?.brand}</div>
                        </div>
                        <div className="text-gray-700 truncate font-semibold my-1">{item?.title}</div>
                        <div className="flex items-center text-yellow-400 my-2"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                        <div className="flex font-semibold items-center gap-2">
                          <p >₹{item.price.toFixed(2)}</p>
                          <p className="line-through text-gray-400 text-sm">₹5678</p>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </>
              )
            })}
          </>)
        }
      </div>
    </>
  )
}

export default Allproducts