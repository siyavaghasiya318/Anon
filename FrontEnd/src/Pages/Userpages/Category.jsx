import React, { useContext } from 'react'
import UserProducts from '../../Components/UserComponents/AllCategories/UserProducts'
import ProductFilter from '../../Components/UserComponents/AllCategories/ProductFilter'
import Image from '../../Components/UserComponents/AllCategories/Productimg'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

function Category() {

  const {category, gender} = useParams()
  const{search} = useContext(UserContext)

  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20">
        <Image/>

        <div className="md:flex gap-10 lg:mt-20 mt-10">
          {search ? (""): (<div className="lg:w-[22%] w-60 sm:w-70"><ProductFilter/></div>)}
          <div className=" w-full"><UserProducts category={category} gender={gender}/></div>
        </div>
    </div>
  )
}

export default Category