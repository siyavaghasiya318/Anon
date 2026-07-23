// import React from 'react'
// import Slider from '../../Components/UserComponents/Slider'
// import Categories from '../../Components/UserComponents/Categories'
// import BestSeller from '../../Components/UserComponents/BestSeller'
// import Products from '../../Components/UserComponents/Products'
// import NewProducst from '../../Components/UserComponents/NewProducst'
// import RecomandedPro from '../../Components/UserComponents/RecomandedPro'
// import Testimonial from '../../Components/UserComponents/Services/Testimonial'
// import Collection from '../../Components/UserComponents/Services/Collection'
// import Service from '../../Components/UserComponents/Services/Service'
// import TotalProducts from '../../Components/UserComponents/AllCategories/TotalProducts'
// import FashionCard from '../../Components/UserComponents/Services/FashionCard'


// function Home() {
//   return (
//     <div className='w-[90%] mb-20 m-auto'>
//         <Slider/>
//         <TotalProducts/>
//         <div className="flex  gap-10">
//           <div className="w-[40%] sticky top-0 h-screen">
//             <Categories/>
//             <BestSeller/>
//           </div>
//           <div className="">
//             <div className="w-full"><Products/></div>
//             <div className="w-full"><NewProducst/></div>
//             <div className="w-full"><RecomandedPro/></div>
//           </div>
//         </div>
//         <div className="flex w-full">
//           <div className="w-[45%] mt-30"><Testimonial/></div>
//           <div className="w-full mx-10 mt-30 "><Collection/></div>
//           <div className="w-[45%] mt-30"><Service/></div>
//           <div></div>
//         </div>

//         <FashionCard/>
//     </div>
//   )
// }

// export default Home


import React from 'react'
import Slider from '../../Components/UserComponents/Slider'
import Categories from '../../Components/UserComponents/Categories'
import BestSeller from '../../Components/UserComponents/BestSeller'
import Products from '../../Components/UserComponents/Products'
import NewProducst from '../../Components/UserComponents/NewProducst'
import RecomandedPro from '../../Components/UserComponents/RecomandedPro'
import Testimonial from '../../Components/UserComponents/Services/Testimonial'
import Collection from '../../Components/UserComponents/Services/Collection'
import Service from '../../Components/UserComponents/Services/Service'
import TotalProducts from '../../Components/UserComponents/AllCategories/TotalProducts'
import FashionCard from '../../Components/UserComponents/Services/FashionCard'

function Home() {
  return (
    <div className=" sm:w-[95%] md:w-[90%]  mb-20 m-auto">
        <Slider className=""/>
      
        <TotalProducts/>

        {/* sidebar + products: stack on mobile, side-by-side on lg+ */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-[95%] m-auto sm:w-[100%]">
          <div className="w-full lg:w-[22%] xl:w-[22%] lg:sticky lg:top-4 lg:h-fit hidden lg:block">
            <Categories/>
            <BestSeller/>
          </div>
          <div className="w-full lg:flex-1">
            <div className="w-full"><Products/></div>
            <div className="w-full"><NewProducst/></div>
            <div className="w-full"><RecomandedPro/></div>
          </div>
        </div>

        {/* testimonial / collection / service: stack on mobile */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-0 w-[95%] m-auto sm:w-[100%]">
          <div className="w-full md:w-[45%] mt-16 md:mt-30"><Testimonial/></div>
          <div className="w-full lg:mx-10 mt-16 md:mt-30"><Collection/></div>
          <div className="w-full md:w-[45%] mt-16 md:mt-30"><Service/></div>
        </div>

        <FashionCard/>

    
    </div>
  )
}

export default Home