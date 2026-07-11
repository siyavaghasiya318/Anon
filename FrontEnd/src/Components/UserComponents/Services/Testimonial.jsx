import React from 'react'

function Testimonial() {
  return (
    <>
        <div className="border  leading-12 border-b-gray-200 text-gray-700 border-t-0 border-x-0  font-bold text-[22px]">New Producst</div>
        <div className="border border-gray-200 rounded-lg mt-5 p-7">
            <img src="https://e-commerce-web-page-8gyt.vercel.app/assets/testimonial-1-TwRg8cDT.jpg" className="m-auto rounded-full w-20" alt="" />
            <div className="flex flex-col gap-2 mt-5 text-center">
                <p className="text-gray-500 text-[18px] font-bold uppercase ">Alan Doe</p>
                <p className="">CEO & Founder Invision</p>
                <p><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='123.961'%20height='109.305'%20viewBox='0%200%20123.961%20109.305'%3e%3cg%20transform='translate(0%20-7.328)'%3e%3cpath%20d='M49.8,29.032a5.96,5.96,0,0,0,3-8l-4.9-10.3a5.978,5.978,0,0,0-7.8-2.9,68.894,68.894,0,0,0-21.6,14A52.249,52.249,0,0,0,4,44.732c-2.6,8.6-4,20.3-4,35.2v30.7a6.018,6.018,0,0,0,6,6H45.3a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H26.5c.2-10.1,2.6-18.2,7-24.3C37.1,36.133,42.5,32.133,49.8,29.032Z'%20fill='%23ff909d'/%3e%3cpath%20d='M120.4,29.032a5.961,5.961,0,0,0,3-8l-4.9-10.2a5.979,5.979,0,0,0-7.8-2.9,72.439,72.439,0,0,0-21.5,13.9,53.37,53.37,0,0,0-14.6,23q-3.9,12.6-3.9,35.1v30.7a6.018,6.018,0,0,0,6,6H116a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H97.1c.2-10.1,2.6-18.2,7-24.3C107.7,36.133,113.1,32.133,120.4,29.032Z'%20fill='%23ff909d'/%3e%3c/g%3e%3c/svg%3e" className="w-6 m-auto" alt="" /></p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.</p>
            </div>
        </div>
    </>
  )
}

export default Testimonial