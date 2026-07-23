import React from "react";
import { categories } from "../../../assets/CategoryList";
import { Link } from "react-router-dom";

const TotalProducts = () => {
  return (
    <div className="flex gap-6 overflow-x-auto py-4 no-scrollbar w-[95%] m-auto sm:w-[100%]">
      {categories.map((item) => (
        <Link
          to={`/category/${item.category}/${item.gender}`}
          className="flex-shrink-0"
        >
          <div className="border border-gray-200 rounded-xl p-2 lg:p-5   sm:p-3 flex gap-2 items-center w-[180px] sm:w-[220px] md:w-[245px] lg:w-[270px]">
            <div className="lg:w-13 md:w-12 w-10 sm:w-11 shrink-0">
              <img
                src={item.img}
                className="w-full h-full rounded-sm"
                alt={item.name}
              />
            </div>

            <div className="flex flex-col justify-between w-full min-w-0 sm:text-[12px] md:text-[13px] lg:text-[14px] text-[12px]">
              <div className="flex justify-between  items-center gap-2">
                <p className="uppercase  font-semibold truncate">
                  {item.name}
                </p>

                <p className="text-gray-500 text-xs font-semibold shrink-0">
                  (1000)
                </p>
              </div>

              <p className="text-[#ff8f9c] font-semibold ">
                Show All
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TotalProducts;