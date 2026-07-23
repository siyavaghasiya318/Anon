import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { UserContext } from '../../../Context/UserContext';


function USerRegister() {
  const{UserForm,Handlechange,FromSubmit,islogin,Setislogin,SetIsopen,setSelect} = useContext(UserContext)
  return (
    <>
      <div className="fixed inset-0 bg-black/50  flex backdrop-blur-[5px] items-center justify-center z-50">
          <div className="bg-white text-gray-600 rounded-lg w-100  p-5 ">

            <div className="text-[25px]  font-bold text-center relative">Create Account 
              <button onClick={() => SetIsopen(false)} className='text-[20px] absolute top-0 right-0 text-gray-400 '><RxCross2/></button>
            </div>

            <form action="" onSubmit={FromSubmit} className="px-6 pt-5 flex flex-col gap-3">
              <input name='name' value={UserForm.name} onChange={Handlechange} type="text" placeholder="Name" className="border border-gray-200 outline-0 rounded-sm px-4 py-1 w-full" />
              <input name='email' value={UserForm.email} onChange={Handlechange} type="email" placeholder="Email" className="border border-gray-200 outline-0 rounded-sm px-4 py-1 w-full" />
              <input type="password" name='password' value={UserForm.password} onChange={Handlechange} placeholder="Password" className="border border-gray-200 outline-0 rounded-sm px-4 py-1 w-full" />
              <button type='submit'  className="bg-[#ff8f9c] py-2 rounded-sm w-full text-white font-semibold mt-5">Create Account</button>
              <p className="text-end text-[#ff8f9c]">Forgot Password</p>
            </form>

            <p className="text-sm text-center mt-4 cursor-pointer">Don't have an account? <span onClick={() => setSelect("login")} className="text-[#ff8f9c] hover:underline cursor-pointer">Sign In</span></p>
          
          </div>
        </div>
    </>
  )
}

export default USerRegister