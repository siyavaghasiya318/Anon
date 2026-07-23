import React, { useContext } from 'react'
import UserLogin from './UserLogin'
import USerRegister from './USerRegister';
import { RxCross2 } from 'react-icons/rx';
import { UserContext } from '../../../Context/UserContext';

const Forgotpassword = () => {
    const { email, setEmail, select, setSelect, SetIsopen, emailsent,setOtp,otp,password ,sendOtp,setpassword,ResetPassword} = useContext(UserContext)

    console.log(select);


    return (
        <>
            {select === "login" && <UserLogin />}

            {select === "register" && <USerRegister />}
            {select === "otpSend" &&
                (<>
                    <div className="fixed inset-0 bg-black/50  flex backdrop-blur-[5px] items-center justify-center  z-50">
                        <div className="bg-white text-gray-600 rounded-lg w-100   p-5 ">
                            <div className="text-[25px] relative font-bold text-center">Forot Password
                                <button onClick={() => SetIsopen(false)} className='text-[20px] absolute top-0 right-0 text-gray-400 '><RxCross2 /></button>
                            </div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); emailsent() }} className="px-6 pt-5 flex flex-col  gap-3 ">
                                <input value={email}  onChange={(e) => setEmail(e.target.value)}   type="email" placeholder="Email" className="border border-gray-300 outline-0 rounded-sm px-4 py-2 w-full" />
                                
                                <button type='submit' className="bg-[#ff8f9c] py-2 rounded-sm w-full text-white font-semibold mt-5">Send OTP</button>
                                <p className="text-sm text-[#ff8f9c] cursor-pointer text-center" onClick={() => setSelect("login")}>Back to login page</p>
                            </form>
                        </div>
                    </div>
                </>)}

            {select === "otpGenerate" && (
                <>(<>
                    <div className="fixed inset-0 bg-black/50  flex backdrop-blur-[5px] items-center justify-center  z-50">
                        <div className="bg-white text-gray-600 rounded-lg w-100   p-5 ">
                            <div className="text-[25px] relative font-bold text-center">OTP
                                <button onClick={() => SetIsopen(false)} className='text-[20px] absolute top-0 right-0 text-gray-400 '><RxCross2 /></button>
                            </div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); sendOtp() }}  className="px-6 pt-5 flex flex-col  gap-3 ">
                                <input   type="email" value={email} placeholder="Email" className="border border-gray-300 outline-0 rounded-sm px-4 py-2 w-full" />
                                <input  type="" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" className="border border-gray-300 outline-0 rounded-sm px-4 py-2 w-full" />
                                <button type='submit' className="bg-[#ff8f9c] my-5 py-2 rounded-sm w-full text-white font-semibold mt-5">Send OTP</button>
                                <p className="text-sm cursor-pointer text-center " onClick={() => setSelect("login")}>Back to login page</p>
                            </form>
                        </div>  
                    </div>
                </>)</>
            )}

            {select === "resetPassword" && (
                <>
                    <div className="fixed inset-0 bg-black/50  flex backdrop-blur-[5px] items-center justify-center  z-50">
                        <div className="bg-white text-gray-600 rounded-lg w-100   p-5 ">
                            <div className="text-[25px] relative font-bold text-center">Reset Password
                                <button onClick={() => SetIsopen(false)} className='text-[20px] absolute top-0 right-0 text-gray-400 '><RxCross2 /></button>
                            </div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); ResetPassword() }}  className="px-6 pt-5 flex flex-col  gap-3 ">
                                <input   type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" className="border border-gray-300 outline-0 rounded-sm px-4 py-2 w-full" />
                                <input  type="password" value={password}  onChange={(e) => setpassword(e.target.value)} placeholder="Password" className="border border-gray-300 outline-0 rounded-sm px-4 py-2 w-full" />
                                <button type='submit' className="bg-[#ff8f9c] my-5 py-2 rounded-sm w-full text-white font-semibold mt-5">Update</button>
                                <p className="text-sm cursor-pointer text-center" onClick={() => setSelect("login")}>Back to login page</p>
                            </form>
                        </div>
                    </div>
                </>
            )}


        </>
    )
}

export default Forgotpassword
