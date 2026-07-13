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
    <div className="px-20">
        <Image/>

        <div className="w-full flex gap-10 mt-20">
          {search ? (""): (<div className="w-[25%] "><ProductFilter/></div>)}
          <div className=" w-full"><UserProducts category={category} gender={gender}/></div>
        </div>
    </div>
  )
}

export default Category