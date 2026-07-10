import React, { useContext} from 'react'
import { UserContext } from '../../../Context/UserContext'
import { FaTrash, FaUser } from "react-icons/fa";
import { MdBlock, MdEmail } from 'react-icons/md';


const UsersAll = () => {
  const {AllUsers,Userdelete} = useContext(UserContext)
  console.log(AllUsers,"all users");
  
  return (
    <>
      <div className="text-[30px] font-bold uppercase text-blue-700">User Accounts</div>
      <div className="text-gray-400 font-bold uppercase text-sm">Manage customer access and status</div>

      <div className="flex w-full justify-between gap-10 mt-8 text-gray-400">

        <div className="flex w-full justify-between bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] font-bold">Total Users</p>
            <p className="text-black text-[22px] font-bold">{AllUsers.length}</p>
          </div>

          <i className="bg-blue-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaUser /></i>
        </div>

        <div className="flex justify-between w-full bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] font-bold">Active</p>
            <p className="text-black text-[22px] font-bold">0</p>
          </div>

          <i className="bg-green-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaUser /></i>
        </div>

        <div className="flex justify-between w-full bg-white p-6 rounded-2xl">

          <div>
            <p className="text-[10px] font-bold">Blocked </p>
            <p className="text-black text-[22px] font-bold">0</p>
          </div>

          <i className="bg-rose-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaUser /></i>
        </div>
      </div>

      

      <div className="bg-white rounded-2xl  shadow-md mt-8 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr className="text-left text-xs uppercase text-gray-500">
            <th className="px-8 py-5">User Info</th>
            <th className="px-4 py-5">Role</th>
            <th className="px-4 py-5">Status</th>
            <th className="px-4 py-5">Joined</th>
            <th className="px-4 py-5 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {AllUsers?.map((user) => (
            <tr
              key={user._id}
              className="border-b border-gray-50 hover:bg-gray-50 transition">
              {/* User Info */}
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold  shadow">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {user.name}
                    </h2>

                    <div className="text-sm flex items-center gap-1 text-gray-400">
                      <i><MdEmail className="mt-1 text-[12px]" /></i>
                      <p>{user.email}</p>
                    </div>
                  </div>
                </div>
              </td>

              {/* Role */}
              <td className="px-4 py-6">
                <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-md text-[10px] font-bold uppercase">
                  {user.role}
                </span>
              </td>

              {/* Status */}
              <td className="px-4 py-6 ">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>

                  <span className="text-green-500 font-bold text-[12px] uppercase">Active</span>
                </div>
              </td>

              {/* Joined */}
              <td className="px-4 py-6 text-gray-400 text-[12px] font-bold">
                {user.createdAt  ? new Date(user.createdAt).toLocaleDateString(): "-"}
              </td>

              {/* Actions */}
              <td className="px-4 py-6">
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center hover:text-white hover:bg-yellow-500">
                    <MdBlock size={15} />
                  </button>

                  {/* <button onClick={() => Userdelete(user.role._id)} className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center hover:text-white hover:bg-red-500">
                    <FaTrash size={12} />
                  </button> */}
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </>
  )
}

export default UsersAll