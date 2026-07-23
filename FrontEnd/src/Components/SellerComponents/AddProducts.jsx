import React, { useContext, useRef, useState } from 'react'
import { FaClosedCaptioning, FaCross, FaPlus, FaSave } from 'react-icons/fa'
import { FaCloudArrowUp } from 'react-icons/fa6'
import { RxCross2 } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { UserContext } from '../../Context/UserContext';
import { NavLink } from 'react-router-dom';
import { LuLoaderCircle } from "react-icons/lu";


const AddProducts = () => {
  const { imgref, prev, imgUpdate, ProductImg, submitLoading, setSubmitLoading, imgChange, varientSizeChange, AddTag, tag, setTag, setBadge, badge, Addbadge, HandleSizeChange, HandleColorPicker, HandleColorName, HandleColorCode, Removeimg, RemoveDesImg, RemoveVarientimg, ProductHandleChange, productFrom, ProductSubmit, DesImg, Descriptionimg } = useContext(UserContext)
  const [varient, SetVarient] = useState(0)
  const [description, setDescription] = useState(false)
  const [imgShow, setShowImg] = useState(false)
  const imgVarientref = useRef()
  const desimgref = useRef()

  const size = ["s", "m", "l", "xl", "2xl", "3xl"]
  const varientsize = ["s", "m", "l", "xl", "2xl", "3xl"]
  const footsize = ["5", "6", "7", "8", "9", "10"]
  const Jeans  = ["28","30","32","34","38","40"]


  return (
    <form className="pb-40" onSubmit={ProductSubmit}>
      <div className="text-purple-600 text-[30px] font-bold">Add New Product</div>
      <div className="text-gray-400 font-semibold">Fill in the details to list a new product</div>

      {/* core detail */}


      <div className="px-10 mt-8">
        <div className=" items-center flex  gap-2">
          <p className="h-6  w-2 bg-purple-600 mt-5 rounded-2xl"></p>
          <div className="text-gray-600 text-[20px] mt-5 font-bold capitalize ">Core detail</div>
        </div>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Essential product identification</p>
      </div>


      {/* form coredetail */}
      <div className="rounded-b-4xl  mt-8 bg-white p-8 flex flex-col gap-5">
        <div className="flex gap-8">

          <div className="w-full flex flex-col gap-1">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Product Titel *</p>
            <input type="text" name='title' value={productFrom.title} onChange={ProductHandleChange} placeholder="EX: Premium Leather handbag" className="outline-0 text-sm font-semibold border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
          </div>

          <div className="w-full flex flex-col gap-1">
            <p className=" text-[16px] font-semibold text-gray-600 tracking-">Category *</p>
            <select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="category" value={productFrom.category} className="outline-0 appearance-none text-gray-500 border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
              <option value="Select">Select </option>
              <option value="clothes">Clothes</option>
              <option value="beauty">Beauty</option>
              <option value="footwear">Footear</option> 
            </select>
          </div>

        </div>

        <div className="flex gap-8">

          <div className="w-full flex flex-col gap-1">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Target Gender *</p>
            {productFrom.category == "beauty" ? 
            (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="gender" value={productFrom.gender} className="outline-0 text-gray-500 border appearance-none border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
              <option value="gender">Choose Gender </option>
              <option value="women">Women</option>
            </select>):
            (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="gender" value={productFrom.gender} className="outline-0 text-gray-500 border appearance-none border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
              <option value="gender">Choose Gender </option>
              <option value="men">Man</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
            </select>)  
          }
          </div>

          <div className="w-full flex flex-col gap-1">
            <p className=" text-[16px] font-semibold text-gray-600 tracking-">Sub-Category *</p>
            {productFrom.category == "clothes" && productFrom.gender == "women" ?
              (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="subcategory" value={productFrom.subcategory} className="outline-0 appearance-none text-g8ay-500 border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
                <option value="Select">Select </option>
                <option value="top">Top</option>
                <option value="tshirt">T-shirt</option>
                <option value="jeans">Jeans</option>
                <option value="dress">Dresses</option>
                <option value="co-ords">Co-Ords</option>
              </select>) :

              productFrom.category == "clothes" && productFrom.gender == "men" ?
                (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="subcategory" value={productFrom.subcategory} className="outline-0 appearance-none text-g8ay-500 border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
                  <option value="Select">Select </option>
                  <option value="shirt">Shirts</option>
                  <option value="tshirt">T-shirt</option>
                  <option value="jeans">Jeans</option>
                  <option value="formal trousers">Formal Trousers</option>
                  <option value="track pants & joggers">Track Pants & Joggers</option>
                </select>) :

                productFrom.category == "beauty" ?
                  (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="subcategory" value={productFrom.subcategory} className="outline-0 appearance-none text-g8ay-500 border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
                    <option value="Select">Select </option>
                    <option value="lipstick">Lipstick</option>
                    <option value="makeup">Eye-Makeup</option>
                    <option value="foundation">Foundation</option>
                    <option value="perfume">Perfume</option>
                  </select>) :
                  productFrom.category == "footwear" && productFrom.gender == "women" ?
                    (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="subcategory" value={productFrom.subcategory} className="outline-0 appearance-none text-g8ay-500 border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
                      <option value="Select">Select </option>
                      <option value="heels">Heels</option>
                      <option value="flats">Flats</option>
                      <option value="shoes">Shoes</option>
                      <option value="flipflopswomen">Flip-Flops</option>
                    </select>) :

                    productFrom.category == "footwear" && productFrom.gender == "men" ?
                      (<select placeholder="EX: Premium Leather handbag" onChange={ProductHandleChange} name="subcategory" value={productFrom.subcategory} className="outline-0 appearance-none text-g8ay-500 border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="">
                        <option value="Select">Select </option>
                        <option value="sportsshoes">Sports Shoes</option>
                        <option value="formalshoes">Formal Shoes</option>
                        <option value="snickers">Snickers</option>
                        <option value="flipflopsman">Flip-Flops</option>
                        <option value="boots">Boots</option>
                      </select>) :

                      (<p className="capitalize text-gray-400  text-[12px] border rounded-2xl  py-2 px-5 border-gray-100 ">chooce category and gender first .then select the size </p>)

            }
          </div>



        </div>

        <div className="flex gap-8">
          <div className="w-full flex flex-col gap-1">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Brand name *</p>
            <input type="text" placeholder="EX: Adiddas  " onChange={ProductHandleChange} name="brand" value={productFrom.brand} className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
          </div>



          {productFrom.category == "clothes" && productFrom.subcategory !== "jeans" && productFrom.subcategory !== "track" ?
            (<div className="w-full bg-mauve-50 rounded-2xl p-5">
              <p className="text-[9px] uppercase font-bold text-purple-600 tracking-widest">sizes </p>
              <div className="flex gap-2 text-[10px] mt-1 text-gray-700 font-bold items-center">

                <div className="flex gap-2 text-[10px] mt-1 text-gray-700 font-bold items-center">
                  <>
                    {size.map((size) => (
                      <div
                        key={size}
                        className="flex gap-1 px-3 py-1 items-center justify-center uppercase border-transparent hover:border hover:border-purple-500 hover:shadow-purple-200 transition-all duration-100 bg-white rounded-full shadow-sm">
                        <input type="checkbox" value={size} onChange={HandleSizeChange} />
                        <p>{size}</p>
                      </div>
                    ))}
                  </>
                </div>

              </div>
            </div>)
            :
            productFrom.category === "clothes" && productFrom.subcategory === "jeans" ||  productFrom.subcategory === "track"  ?
              (
                <div className="w-full bg-mauve-50 rounded-2xl p-5">
                  <p className="text-[9px] uppercase font-bold text-purple-600 tracking-widest">sizes </p>
                  <div className="flex gap-2 text-[10px] mt-1 text-gray-700 font-bold items-center">

                    <div className="flex gap-2 text-[10px] mt-1 text-gray-700 font-bold items-center">
                      <>
                        {Jeans.map((size) => (
                          <div
                            key={size}
                            className="flex gap-1 px-3 py-1 items-center justify-center uppercase border-transparent hover:border hover:border-purple-500 hover:shadow-purple-200 transition-all duration-100 bg-white rounded-full shadow-sm">
                            <input type="checkbox" value={size} onChange={HandleSizeChange} />
                            <p>{size}</p>
                          </div>
                        ))}
                      </>
                    </div>

                  </div>
                </div>
              )
                    
            : 
            productFrom.category == "footwear" ?
          (<div className="w-full bg-mauve-50 rounded-2xl p-5">
            <p className="text-[9px] uppercase font-bold text-purple-600 tracking-widest">sizes (main)</p>
            <div className="flex gap-2 text-[10px] mt-1 text-gray-700 font-bold items-center">

              <div className="flex gap-2 text-[10px] mt-1 text-gray-700 font-bold items-center">
                <>
                  {footsize.map((size) => (
                    <div
                      key={size}
                      className="flex gap-1 px-3 py-1 items-center justify-center uppercase border-transparent hover:border hover:border-purple-500 hover:shadow-purple-200 transition-all duration-100 bg-white rounded-full shadow-sm">
                      <input type="checkbox" value={size} onChange={HandleSizeChange} />
                      <p>{size}</p>
                    </div>
                  ))}
                </>
              </div>

            </div>
          </div>) : ("")
          }

        </div>

        <div className="flex flex-col gap-1">
          <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Short description(one-liner) *</p>
          <input type="text" onChange={ProductHandleChange} name="shortdescription" value={productFrom.shortdescription} placeholder="Briefly describe your product (shown near price area)... " className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
        </div>


      </div>

      {/* pricing and inventary */}

      <div className="px-10 mt-10">
        <div className=" items-center flex  gap-2">
          <p className="h-6  w-2 bg-pink-600 mt-5 rounded-2xl"></p>
          <div className="text-gray-600 text-[20px] mt-5 font-bold capitalize ">Pricing & Inventary</div>
        </div>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Configure your profit margins</p>
      </div>

      <div className="bg-white flex p-8 mt-5 rounded-b-4xl">

        <div className="flex gap-8 w-42">
          <div className="flex flex-col gap-1 w-full">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Base Price (₹) <span className="text-red-500">*</span></p>
            <div className="px-5"><input type="number" onChange={ProductHandleChange} name="price" value={productFrom.price} placeholder="0.00" className="outline-0 font-bold border text-sm  border-gray-100 py-3 rounded-2xl bg-mauve-50 " /></div>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Offer (%)</p>
            <div className="px-5"><input type="number" onChange={ProductHandleChange} name="discountprice" value={productFrom.discountprice} placeholder="0%" className="outline-0 font-bold  border text-sm border-gray-100 text-pink-600 rounded-2xl bg-mauve-50 py-3" /></div>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Sale Price </p>
            <div className="px-5"><input type="number" disabled onChange={ProductHandleChange} name="originaldiscountprice" value={productFrom.originaldiscountprice} placeholder="₹0" className="outline-0   font-bold border text-sm border-gray-100  rounded-2xl bg-mauve-50 py-3" /></div>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Live Stock</p>
            <div className="px-5"><input type="number" onChange={ProductHandleChange} name="livestock" value={productFrom.livestock} placeholder="0" className="outline-0 font-bold border  text-sm border-gray-100  rounded-2xl bg-mauve-50 py-3" /></div>
          </div>
        </div>

      </div>

      {/* visual (image upload) */}

      <div className="bg-white mt-5 overflow-hidden rounded-4xl">

        <div className="bg-sky-50 p-5">
          <div className="flex flex-col gap-1">
            <div className=" items-center flex  gap-2">
              <p className="h-6  w-2 bg-blue-600 mt-5 rounded-2xl"></p>
              <div className="text-gray-600 text-[20px] mt-5 font-bold capitalize ">Visual Assets</div>
            </div>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Upload high-quality product images</p>
          </div>
        </div>

        <div className="p-8 text-gray-400 font-semibold">
          <div onClick={() => imgref.current.click()} className="border-2 rounded-2xl border-gray-300 py-10 border-dashed ">



            <div className=" flex flex-col items-center">
              <input type="file" onChange={imgChange} ref={imgref} hidden id="" />
              <i className=""><FaCloudArrowUp className="text-[50px]" /></i>
              <div className="text-gray-700 mt-3 font-semibold ">Click to upload or drag and drop</div>
              <div className="text-sm">PNG, JPG, GIF up to 5MB (Max 10 images)</div>
            </div>


          </div>


          <div className="grid grid-cols-4 w-full gap-5 ">
            {ProductImg.map((item, index = 1) => {
              return (
                <div className="w-50 h-50 mt-5 p-2 relative group">
                  <img src={item} alt="" className="w-full h-full object-cover rounded-2xl border-2  border-gray-100" />
                  <i onClick={() => Removeimg(index)} className="absolute text-sm top-0 right-0 text-transparent group-hover:text-white p-1 rounded-full transition-all duration-100 group-hover:bg-red-500"><RxCross2 /></i>
                  <p className="bg-black/50 absolute bottom-5 left-5 text-sm text-white p-1 px-2 rounded">{index}</p>
                </div>
              )
            })}
          </div>

          <p className="text-[12px] mt-2">0 / 5 images uploaded</p>

        </div>
      </div>

      {/* tag and badges */}

      <div className="flex gap-5 mt-8">


        <div className="bg-white p-8 w-full rounded-2xl ">
          <div className="text-[18px] font-bold">Tags & Badges</div>
          <hr className="text-gray-100  my-5" />

          <div className="flex flex-col gap-1">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">keywords</p>
            <div className="flex gap-4 items-center">
              <input type="text" onChange={(e) => setTag(e.target.value)} value={tag} placeholder="New Arrival, Slik..." className="outline-0 w-full border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
              <p onClick={AddTag} className="bg-black p-3.5 rounded-xl text-white"><FaPlus /></p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 flex-wrap">

            {productFrom?.tags.map((item, index) => (
              <div
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
              >
                {item}
              </div>
            ))}

          </div>

          <div className="flex flex-col gap-1 mt-10">
            <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Featured Badges</p>
            <div className="flex gap-4 items-center">
              <input onChange={(e) => setBadge(e.target.value)} value={badge} type="text" placeholder="Top Reated, Eco-Friendly..." className="outline-0 w-full border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
              <p onClick={Addbadge} className="bg-emerald-600 p-3.5 rounded-xl text-white"><FaPlus /></p>
            </div>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">

            {productFrom?.badges.map((item, index) => (
              <div
                key={index}
                className="bg-purple-100 text-green-700 px-3 py-1 rounded-full text-xs"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* specification */}

        <div className="bg-white p-8 w-full rounded-2xl ">
          <div className="text-[18px] font-bold">Specifications</div>
          <hr className="text-gray-100  my-5" />

          <div className="flex gap-5">
            <input type="text" onChange={ProductHandleChange} name="specificationname" value={productFrom.specificationname} placeholder="Material" className="outline-0 w-full border font-semibold text-[13px] border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" />
            <input type="text" onChange={ProductHandleChange} name="specificationname" value={productFrom.specificationname} placeholder="Premium Cotton" className="outline-0 w-full border font-semibold text-[13px] border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" />
          </div>

        </div>
      </div>

      {/* varient color,stoc,img */}

      <div className="rounded-4xl mt-10 overflow-hidden bg-white">

        <div className="bg-slate-900 flex p-8  justify-between items-center text-white ">
          <div>
            <p className="uppercase text-[22px] font-semibold">Product Variants</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold">Manage Colors, Sizes, and Stocks</p>
          </div>
          <div onClick={() => SetVarient(varient + 1)} className="flex gap-3 items-center tracking-widest hover:bg-gray-700 transition-all duration-300 text-white text-[10px] font-bold rounded-lg border border-gray-500 bg-gray-900 px-5 py-3 uppercase">
            <i><FaPlus /></i>
            <p>Add New Varians</p>
          </div>
        </div>

        <div className="p-8 grid grid-cols-2 gap-5">
          {[...Array(varient)]?.map((_, index) => {
            const newIndex = index + 1
            return (
              <div className="bg-[#fbfcfd] p-8 flex flex-col gap-5 rounded-2xl shadow-sm" keys={index}>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="bg-black w-8 text-[10px] font-bold text-white h-8 items-center justify-center flex flex-col rounded-full">{newIndex}</p>
                    <p className="uppercase text-[12px] tracking-widest text-gray-700 font-bold">varient config</p>
                  </div>

                  <i onClick={() => SetVarient(varient - 1)}><RxCross2 /></i>
                </div>


                <div className="flex gap-2">

                  <div className="flex flex-col gap-1 w-full">
                    <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">color name</p>
                    <div><input onChange={HandleColorName} name="color" value={productFrom.color} type="text" placeholder="Ex. Red" className="outline-0 font-bold border text-sm border-gray-100 px-5 w-25 rounded-2xl bg-white py-2" /></div>
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">color hex</p>
                    <div><input name="color" value={productFrom.colorcode || "#000000"} onChange={HandleColorPicker} type="color" className="h-10 w-10 " /></div>
                    <div className="w-fit"><input type="text" placeholder="Code" value={productFrom.colorcode} onChange={HandleColorCode} name="colorcode" className="border w-20 px-2 text-sm rounded-lg" name="" id="" /></div>
                  </div>



                  <div className="w-full flex flex-col gap-1">
                    <div className="text-[10px] text-purple-500 font-bold tracking-widest uppercase">size</div>
                    <div className=" grid grid-cols-2 gap-4  text-[10px] mt-1 text-gray-700 font-bold items-center">
                      {varientsize.map((size) => (
                        <div
                          key={size}
                          className="flex gap-1 px-3 py-1 items-center justify-center uppercase border-transparent hover:border hover:border-purple-500 hover:shadow-purple-200 transition-all duration-100 bg-white rounded-full shadow-sm">
                          <input type="checkbox" value={size} onChange={varientSizeChange} />
                          <p>{size}</p>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>

                <div className="flex flex-col gap-1 w-10">
                  <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">stock</p>
                  <div><input onChange={ProductHandleChange} name="stock" value={productFrom.stock} type="number" placeholder="0" className="outline-0 font-bold border text-sm border-gray-100 px-5 w-25 bg-white rounded-xl  py-2" /></div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[12px] font-bold text-gray-400 tracking-widest ">varient gallery</p>
                  <div className="flex gap-5" >
                    <input type="file" ref={imgVarientref} onChange={imgUpdate} id="" hidden />

                    <div className="grid grid-cols-5 gap-5">
                      {prev.map((item, index = 0) => {
                        return (
                          <>

                            <div className='w-15 h-15  overflow-hidden  relative group'><img src={item} className="w-full h-full object-cover rounded-2xl" alt="" />
                              <p onClick={() => RemoveVarientimg(index)} className="text-white rounded-2xl hidden group-hover:block group-hover:bg-red-500/50 absolute top-0 w-full h-full items-center hover:flex hover:flex-col justify-center text-[18px] " ><IoClose /></p>
                            </div>

                          </>
                        )

                      })}
                      <div onClick={() => imgVarientref.current.click()} className="border-2 border-dashed text-gray-200 rounded-2xl hover:text-purple-500 transition-all duration-300 w-15 h-15  flex flex-col justify-center items-center"><FaPlus /></div>


                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* detail des Textbox, MsgBox */}

      <div className="rounded-4xl mt-10 overflow-hidden shadow-sm bg-white">

        <div className="flex items-center justify-between bg-[#faf8fe] p-8 ">
          <div className=" ">
            <p className="text-[20px] font-bold text-gray-700">Detailed Description</p>
            <p className="text-gray-400 text-[10px] font-bold uppercase">Rich content blocks for the product page</p>
          </div>

          <div className="flex gap-5 items-center tracking-wide">
            <button onClick={() => setDescription(true)} className="flex  items-center text-[10px] rounded-lg  uppercase font-bold gap-3 bg-white px-4 py-2">
              <i><FaPlus /></i>
              <p>text block</p>
            </button>

            <button onClick={() => setShowImg(true)} className="flex font-sem items-center rounded-lg text-[10px] uppercase font-bold gap-3 bg-white px-4 py-2">
              <i><FaPlus /></i>
              <p>image block</p>
            </button>

          </div>
        </div>


        <div className="rounded-3xl border border-gray-100 m-8 p-5 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <p className="text-purple-600 font-bold text-[12px]">Text block</p>
            <i onClick={() => setDescription(false)} className="text-gray-500"><IoClose /></i>
          </div>
          <input type="text" onChange={ProductHandleChange} name="blocktitle" value={productFrom.blocktitle} className="bg-white border w-full border-gray-100 px-5 py-3 text-sm rounded-lg outline-0 font-bold text-gray-900" placeholder="Block Title(Optional)" />
          <textarea onChange={ProductHandleChange} name="description" value={productFrom.description} className="bg-white border border-gray-100 w-full font-semibold px-5 py-3 text-[14px] outline-0 rounded-lg text-gray-700" placeholder="Detail description Content..." id=""></textarea>
        </div>




        <div className="rounded-3xl border border-gray-100 m-8 p-8 flex flex-col gap-5">

          <div className="flex justify-between items-center">
            <p className="text-purple-600 uppercase font-bold text-[12px]">Image block</p>
            <i onClick={() => setDescription(false)} className="text-gray-500"><IoClose /></i>

          </div>

          <input type="text" onChange={ProductHandleChange} name="imgtitle" value={productFrom.imgtitle} className="bg-white border w-full border-gray-100 px-5 py-3 text-sm rounded-lg outline-0 font-bold text-gray-900" placeholder="Block Title(Optional)" />

          <div onClick={() => desimgref.current.click()} className="border-2 gap-1 border-dashed flex flex-col justify-center hover:text-purple-500 hover:border-purple-500 transition-all duration-300 items-center text-gray-300 border-gray-200 bg-white w-full h-30 rounded-2xl ">
            <input type="file" ref={desimgref} onChange={DesImg} hidden className="" />

            <i className=" text-[20px] "><FaPlus /></i>
            <p className="font-bold uppercase text-[10px] tracking-widest">Upload Description Img</p>
          </div>
          <div className="flex items-center w-full gap-5 ">
            {Descriptionimg.map((item, index = 1) => {
              return (
                <div className="w-25 h-25 mt-5 p-2 relative group">
                  <img src={item} alt="" className="w-full h-full object-cover rounded-2xl border-2  border-gray-100" />
                  <i onClick={() => RemoveDesImg(index)} className="absolute text-sm top-0 right-0 text-transparent group-hover:text-white p-1 rounded-full transition-all duration-100 group-hover:bg-red-500"><RxCross2 /></i>
                  <p className="bg-black/50 absolute bottom-4 left-4 text-[8px] text-white px-1 rounded"></p>
                </div>
              )
            })}
          </div>
        </div>

        {/* <div className="m-8 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-center py-12 text-gray-400">No description blocks added yet.</p>
        </div> */}






      </div>


      {/* Logistics & Policy */}

      <div className="flex gap-5 mt-10 ">
        <div className="rounded-2xl p-8 bg-white w-full">
          <p className="text-gray-700 text-[20px] font-bold">Logistics & Policy</p>

          <div className="flex gap-5 mt-5 ">
            <div className=" flex flex-col gap-1 w-44">
              <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Warranty Term</p>
              <input type="text" onChange={ProductHandleChange} name="warrenty" value={productFrom.warrenty} placeholder="1 Year" className="outline-0 text-sm font-semibold border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
            </div>

            <div className=" flex flex-col gap-1 w-44">
              <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Avg Delivery</p>
              <input type="text" onChange={ProductHandleChange} name="deliverytime" value={productFrom.deliverytime} placeholder="5 Days" className="outline-0 text-sm font-semibold border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
            </div>
          </div>


        </div>

        <div className="rounded-2xl p-8 w-full bg-white ">
          <p className="text-gray-700 text-[20px] font-bold">Search SEO</p>

          <div className="flex flex-col gap-3 mt-5">
            <div className=" flex flex-col gap-1">
              <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">meta title</p>
              <input name="metatitle" onChange={ProductHandleChange} value={productFrom.metatitle} type="text" placeholder="Search friendly title" className="outline-0 text-sm font-semibold border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" />
            </div>

            <div className=" flex flex-col gap-1">
              <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">description</p>
              <textarea name="metadescription" onChange={ProductHandleChange} value={productFrom.metadescription} id="" placeholder="Search snippet" className="outline-0 text-sm font-semibold border border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-[60%] -translate-x-1/2 z-50">
        <div className="flex gap-8 px-10   items-center bg-white shadow-sm w-fit rounded-[35px]  py-4 ">
          <NavLink to='/seller/products' className="text-gray-500 px-3  hover:text-gray-700 font-bold uppercase text-[10px]">Discard</NavLink>

          <button type="submit" className="flex gap-3 text-white text-[11px] justify-center items-center bg-gray-900 font-bold uppercase w-110 tracking-widest  py-4 rounded-full">
            <i className="text-white"><FaSave /></i>
            <div className="">publish product</div>
            {submitLoading ?
              (<i className="text-[16px]  animate-spin"><LuLoaderCircle /></i>) :
              ("")
            }
          </button>
        </div>
      </div>



    </form>
  )
}

export default AddProducts
