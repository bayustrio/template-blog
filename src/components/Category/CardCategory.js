import React from "react";
import Data from "../../Data/Choice.json";
import Avatar from "../../images/favicon.jpeg";

const CardCategory = () => {
  return (
    <>
      <div className="mt-14 flex md:px-5 px-5 xl:flex-row flex-col lg:flex-row md:flex-row sm:flex-row justify-center gap-3 flex-nowrap  lg:flex-wrap xl:flex-wrap">
        {Data.map((item, idx) => (
          <div
            className="xl:w-[40%]   lg:w-[40%] md:w-[45%] sm:w-[45%] w-full"
            key={idx}
          >
            <div className="bg-white relative  rounded-lg max-w-sm mb-5">
              <a href="#" className="relative">
                <img className="rounded-t-lg" src={item["logo "]} alt="" />
                <p className="font-semibold bg-[#9243DC] absolute z-[2] top-2 right-[1rem] rounded-sm text-white p-1">
                  {item.category}
                </p>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {item.title}
                  </h5>
                </a>

                <div className="gap-2 flex items-center">
                  <img src={Avatar} className="w-9 h-9 rounded-full" />
                  <p className="text-slate-500">{item.username}</p>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-[12px] text-slate-500 font-semibold">
                      {item.date}
                    </p>
                  </div>
                </div>
                <p className="font-normal text-left lg:text-left md:text-left sm:text-left mt-2 text-gray-700 mb-3">
                  {item.description}
                </p>
                <a
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  href="#"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardCategory;
