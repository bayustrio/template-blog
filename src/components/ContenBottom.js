import React from "react";
import { ContenBottom } from "../Data/Content";
import { Link } from "react-router-dom";

const ContentBtm = () => {
  return (
    <>
      <div className=" ">
        <Link
          to="/single-page"
          className="flex justify-center gap-y-3 flex-col"
        >
          {ContenBottom.map((item, idx) => (
            <div key={idx}>
              {/* images */}
              <div className="flex flex-col w-full lg:flex-row xl:flex-row items-center">
                <img
                  src={item.thumbnail}
                  className="h-64 lg:w-[23rem] md:w-[23rem] w-full sm:w-[23rem] xl:w-[23rem] object-cover rounded-xl"
                />
                {/*  */}
                <div className="flex pl-2 mt-2 lg:mt-0 xl:mt-0 flex-col">
                  <div className="flex items-center xl:mb-9 lg:mb-9 md:mb-9 sm:mb-9">
                    <p className="bg-red-500 p-1 text-[13px] uppercase font-medium rounded-lg text-white">
                      {item.category}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                    <p className="text-[12px]">{item.date}</p>
                  </div>
                  {/* description */}
                  <div className="text-left">
                    <h1 className="font-bold text-[1.5rem]">{item.title}</h1>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ))}
        </Link>
      </div>
    </>
  );
};

export default ContentBtm;
