import React, { useContext, useMemo, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { MdLocalOffer } from 'react-icons/md';
import { FaBox } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { UserContext } from '../../../Context/UserContext';

const thclass = "py-5 px-5";

const Products = () => {
  const { getProducts } = useContext(UserContext)
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const categories = useMemo(() => {
    const set = new Set((getProducts || []).map((p) => p.category));
    return ["all", ...set];
  }, [getProducts]);

  const totalCount = getProducts?.length || 0;
  const lowStockCount = getProducts?.filter((p) => (p.livestock ?? 0) < 10).length || 0;
  const outOfStockCount = getProducts?.filter((p) => (p.livestock ?? 0) === 0).length || 0;

  const filteredProducts = useMemo(() => {
    return (getProducts || []).filter((p) => {
      const matchesQuery =
        p.title?.toLowerCase().includes(query.toLowerCase()) ||
        p.seller?.shopname?.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [getProducts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  const handleFilterChange = (setter) => (value) => {
    setter(value);
    setPage(1);
  };

  return (
    <>
      <div className="text-[30px] font-bold uppercase text-blue-700">Products</div>
      <div className="text-gray-400 font-bold uppercase text-sm">Manage catalog, pricing and stock</div>

      <div className="flex w-full justify-between gap-10 mt-8 text-gray-400">
        <div className="flex w-full justify-between bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] font-bold">Total Products</p>
            <p className="text-black text-[22px] font-bold">{totalCount}</p>
          </div>
          <i className="bg-blue-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaBox /></i>
        </div>

        <div className="flex justify-between w-full bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] font-bold">Low Stock</p>
            <p className="text-black text-[22px] font-bold">{lowStockCount}</p>
          </div>
          <i className="bg-amber-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaBox /></i>
        </div>

        <div className="flex justify-between w-full bg-white p-6 rounded-2xl">
          <div>
            <p className="text-[10px] font-bold">Out of Stock</p>
            <p className="text-black text-[22px] font-bold">{outOfStockCount}</p>
          </div>
          <i className="bg-rose-500 p-4 rounded-2xl flex justify-center items-center text-white"><FaBox /></i>
        </div>
      </div>

      <div className="bg-white rounded-2xl mt-8">
        <div className="flex items-center gap-5 justify-between text-gray-400 p-3">
          <div className="border border-gray-200 gap-2 group hover:outline-2 transition-all duration-200 hover:outline-blue-200 hover:shadow-blue-300 flex rounded-2xl w-full items-center px-5">
            <IoSearch className="text-[20px] group-hover:text-blue-500 transition-all duration-300" />
            <input
              type="search"
              value={query}
              onChange={(e) => handleFilterChange(setQuery)(e.target.value)}
              className="py-4 outline-0 w-full text-gray-700 font-semibold"
              placeholder="search product or seller"
            />
          </div>

          <div className="border border-gray-200 w-[40%] gap-2 flex rounded-2xl font-bold items-center px-5 hover:outline-2 transition-all duration-300 hover:outline-blue-200 hover:shadow-blue-300">
            <MdLocalOffer className="text-[20px] text-gray-300 mt-1" />
            <select
              value={category}
              onChange={(e) => handleFilterChange(setCategory)(e.target.value)}
              className="py-4 outline-0 appearance-none w-full text-gray-500 text-[14px] capitalize"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c === "all" ? "All Categories" : c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white mt-8 rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="uppercase text-left text-[10px] text-gray-400">
              <th className="ps-8 py-5">Product info</th>
              <th className={thclass}>Category</th>
              <th className={thclass}>Seller</th>
              <th className={thclass}>Price</th>
              <th className={thclass}>Stock</th>
            </tr>
          </thead>

          <tbody>
            {paginatedProducts.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-12 text-gray-400 text-sm font-semibold">
                  No products found.
                </td>
              </tr>
            )}

            {paginatedProducts.map((p) => (
              <tr key={p._id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.images?.[0]}
                      className="w-12 h-12 rounded-xl bg-gray-50 object-cover shadow"
                      alt={p.title}
                    />
                    <div>
                      <p className="text-gray-600 text-[14px] font-bold line-clamp-1 max-w-[220px]">{p.title}</p>
                      <p className="text-gray-300 text-[12px] font-bold">id: {p._id?.slice(-6)}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <p className="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold uppercase w-fit text-gray-500">
                    {p.category}
                  </p>
                </td>

                <td className="px-5 py-4 text-gray-600 font-semibold text-sm">
                  {p.seller?.shopname || "-"}
                </td>

                <td className="px-5 py-4">
                  <div className="font-bold text-gray-600 text-sm">₹{p.price}</div>
                  {p.discountprice && (
                    <p className="text-gray-300 line-through text-[10px] font-bold">₹{p.discountprice}</p>
                  )}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center">
                    <GoDotFill className={`text-[16px] ${(p.livestock ?? 0) === 0 ? "text-rose-500" : (p.livestock ?? 0) < 10 ? "text-amber-500" : "text-emerald-600"
                      }`} />
                    <p className={`uppercase font-bold text-[10px] ${(p.livestock ?? 0) === 0 ? "text-rose-500" : (p.livestock ?? 0) < 10 ? "text-amber-500" : "text-emerald-600"
                      }`}>
                      {p.livestock ?? 0} Unit
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-8 py-5 border-t border-gray-100">
            <p className="text-gray-400 text-[12px] font-bold">
              Showing {(currentPage - 1) * PER_PAGE + 1}-
              {Math.min(currentPage * PER_PAGE, filteredProducts.length)} of {filteredProducts.length}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 font-bold disabled:opacity-40 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-8 h-8 rounded-lg text-[12px] font-bold transition ${n === currentPage
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600"
                    }`}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 font-bold disabled:opacity-40 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                ›
              </button>
            </div>
          </div>
        )}  
      </div>
    </>
  )
}

export default Products