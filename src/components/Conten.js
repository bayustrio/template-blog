import React from "react";
import Avatar from "../images/favicon.jpeg";
import { Data } from "../Data/Content";
import { DataContent } from "../Data/Content";
const Conten = () => {
  return (
    <>
      <div className="w-full lg:px-14 xl:px-14 sm:px-6 p-3 bg-[#FCEFDC]  min-h-screen">
        <h1 className=" font-bold xl:text-left lg:text-left md:text-left sm:text-left text-[2rem]">
          Top of The Week
        </h1>

        <div className="flex lg:flex-row xl:flex-row flex-col gap-3">
          {/* image */}
          <div className="relative rouncontent-left xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-full">
            <img
              className="brightness-75 lg:h-[77vh] xl:h-[77vh] rounded-xl"
              src="http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/bruce-christianson-559084-unsplash-1920x982.jpg"
            />

            <div className="absolute text-left xl:bottom-12 lg:bottom-12 bottom-4 px-3">
              <span className="text-left font-bold text-[1rem] rounded-sm text-white p-1 bg-[#EC1D1C]">
                Business
              </span>
              <h1 className="font-bold xl:text-[2.1rem] lg:text-[2.1rem] text-[1.5rem] text-white ">
                It's Always Fun Time And Smile In The Summer
              </h1>
              <div className="flex gap-1 items-center">
                <img
                  src={Avatar}
                  className="w-7 h-7 brightness-75 rounded-full "
                />
                <div className="flex gap-1 text-white items-center">
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
                  <p className="text-[13px]">Dec 24, 2018</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-[30%] lg:w-[30%]  ">
            {/* <p>ITEMS HELLO WORLD</p> */}
            {Data.map((item, idx) => (
              <div key={idx} className="p-2">
                <div className="flex gap-2 items-center">
                  <img
                    className="xl:w-28 brightness-75 rounded-xl w-[30rem] overflow-hidden md:w-32 md:h-32 xl:h-28 xl:object-cover"
                    src={item.avatar}
                  />
                  <div className="">
                    <p className="bg-yellow-400 p-1 rounded-lg w-20 uppercase">
                      {item.category}
                    </p>
                    <h1 className="font-semibold text-left">{item.title}</h1>

                    {/* time */}
                    <div className="flex gap-1 text-slate-500 items-center">
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
                      <p className="text-[13px]">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* content bottom */}
        <div className="flex py-2 flex-col lg:flex-row xl:flex-row gap-3 justify-center">
          {DataContent.map((item, idx) => (
            <div
              className="relative opacity-100  xl:w-[35%] lg:w-[35%] w-full rounded-lg overflow-hidden"
              key={idx}
            >
              <img className="brightness-75" src={item.thumbnail} />
              {/* === */}
              <p className="absolute left-2 bg-yellow-500 p-1 rounded-lg text-white font-medium uppercase top-3">
                {item.category}
              </p>
              <div className="left-2 text-left absolute lg:bottom-10 bottom-2 xl:bottom-10 ">
                <h1 className="font-bold text-white text-[1.3rem]">
                  {item.title}
                </h1>
                <div className="flex gap-1 items-center">
                  <img src={item.avatar} className="w-8 h-8 rounded-full" />
                  {/*  */}
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
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
                    <p className="xl:pl-1 lg:pl-1 md:pl-1 sm:pl-1 text-white">
                      {item.username}
                    </p>
                  </div>
                </div>
              </div>
              {/* === */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Conten;
