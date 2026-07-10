import React, { useContext, useMemo, useState } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { FaStore } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const AVATAR_COLORS = [
  "bg-violet-600", "bg-blue-600", "bg-emerald-600", "bg-amber-600", "bg-rose-600",
];
const getAvatarColor = (name = "") =>
  AVATAR_COLORS[(name.charCodeAt(0) || 0) % AVATAR_COLORS.length];

const TABS = [
  { key: "all", label: "All Sellers" },
  { key: "pending", label: "Pending Sellers" },
  { key: "active", label: "Active Sellers" },
];

const SellersAll = () => {
  const { allSellers } = useContext(UserContext)
  const [tab, setTab] = useState("all");

  const totalCount = allSellers?.length || 0;
  const pendingCount = allSellers?.filter((s) => !s.isVerified).length || 0;
  const verifiedCount = totalCount - pendingCount;

  const filteredSellers = useMemo(() => {
    if (!allSellers) return [];
    if (tab === "pending") return allSellers.filter((s) => !s.isVerified);
    if (tab === "active") return allSellers.filter((s) => s.isVerified);
    return allSellers;
  }, [allSellers, tab]);

  return (
    <>
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <div className="text-[30px] font-bold uppercase text-blue-700">Seller Partners</div>
          <div className="text-gray-400 font-bold uppercase text-sm">Manage vendor profiles and status</div>
        </div>

        <div className="flex bg-white rounded-xl p-1 shadow-sm">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${
                tab === t.key
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex w-full justify-between gap-10 mt-8 text-gray-400">
        <div className="flex w-full justify-between bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold">Total Partners</p>
            <p className="text-black text-[22px] font-bold">{totalCount}</p>
          </div>
          <i className="bg-gradient-to-br from-sky-400 to-blue-600 p-4 rounded-2xl flex justify-center items-center text-white"><FaStore /></i>
        </div>

        <div className="flex justify-between w-full bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest">Pending</p>
            <p className="text-black text-[22px] font-bold">{pendingCount}</p>
          </div>
          <i className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaStore /></i>
        </div>

        <div className="flex justify-between w-full bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest">Verified</p>
            <p className="text-black text-[22px] font-bold">{verifiedCount}</p>
          </div>
          <i className="bg-gradient-to-br from-emerald-400 to-green-600 p-4 rounded-2xl flex justify-center items-center text-white"><FaStore /></i>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md mt-8 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr className="text-left text-xs uppercase text-gray-500">
              <th className="px-8 py-5">Seller Info</th>
              <th className="px-4 py-5">Shop Name</th>
              <th className="px-4 py-5">Status</th>
              <th className="px-4 py-5">Registered</th>
              <th className="px-4 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredSellers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-12 text-gray-400 text-sm font-semibold">
                  No sellers found.
                </td>
              </tr>
            )}

            {filteredSellers.map((seller) => (
              <tr key={seller._id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                {/* Seller Info */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl ${getAvatarColor(seller.name)} text-white flex items-center justify-center font-bold shadow`}>
                      {seller.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-800">{seller.name}</h2>
                      <div className="text-sm flex items-center gap-1 text-gray-400">
                        <MdEmail className="text-[12px]" />
                        <p>{seller.email}</p>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Shop Name */}
                <td className="px-4 py-6 font-semibold text-gray-800">
                  {seller.shopName || seller.name}
                </td>

                {/* Status */}
                <td className="px-4 py-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${seller.isVerified === false ? "bg-amber-500" : "bg-green-500"}`}></span>
                    <span className={`font-bold text-[12px] uppercase ${seller.isVerified === false ? "text-amber-500" : "text-green-500"}`}>
                      {seller.isVerified === false ? "Pending" : "Active"}
                    </span>
                  </div>
                </td>

                {/* Registered */}
                <td className="px-4 py-6 text-gray-400 text-[12px] font-bold">
                  {seller.createdAt ? new Date(seller.createdAt).toLocaleDateString() : "-"}
                </td>

                {/* Actions */}
                <td className="px-4 py-6 text-center">
                  <span className="text-gray-400 text-[10px] font-bold uppercase">
                    {seller.isVerified === false ? "Verify" : "Verified"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SellersAll