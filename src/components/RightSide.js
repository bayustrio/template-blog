import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { AiFillYoutube } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { RecenPost } from "../Data/Content";
import ImageSlider from "./ImageSlider";

const RightSide = () => {
  return (
    <div className=" relative overflow-auto  ">
      {/* ICONS START */}
      <div className="xl:flex gap-2  grid grid-cols-3 justify-center items-center  xl:flex-wrap">
        <div className="cursor-pointer p-2 w-[70px] flex flex-col justify-center items-center rounded-md bg-slate-300">
          <GrFacebookOption className="text-blue-600 text-[1.4rem]" />
          <p className="font-semibold">Like</p>
          <span className="text-[13px]">21,1k</span>
        </div>
        {/* yt */}
        <div className=" cursor-pointer p-2 w-[70px] flex flex-col justify-center items-center rounded-md bg-slate-300">
          <AiFillYoutube className="text-red-600 text-[1.4rem]" />
          <p className="font-semibold">Like</p>
          <span className="text-[13px]">21,1k</span>
        </div>

        {/* twiiter */}
        <div className="cursor-pointer p-2 w-[70px] flex flex-col justify-center items-center rounded-md bg-slate-300">
          <GrTwitter className="text-blue-400 text-[1.4rem]" />
          <p className="font-semibold">Like</p>
          <span className="text-[13px]">21,1k</span>
        </div>

        {/* linked in */}
        <div className="cursor-pointer p-2 w-[70px] flex flex-col justify-center items-center rounded-md bg-slate-300">
          <AiFillLinkedin className="text-blue-500 text-[1.4rem]" />
          <p className="font-semibold">Like</p>
          <span className="text-[13px]">21,1k</span>
        </div>

        <div className="cursor-pointer p-2 w-[70px] flex flex-col justify-center items-center rounded-md bg-slate-300">
          <BsTwitch className="text-purple-700 text-[1.4rem]" />
          <p className="font-semibold">Like</p>
          <span className="text-[13px]">21,1k</span>
        </div>

        <div className="cursor-pointer p-2 w-[70px] flex flex-col justify-center items-center rounded-md bg-slate-300">
          <AiOutlineInstagram className="text-red-700 text-[1.4rem]" />
          <p className="font-semibold">Like</p>
          <span className="text-[13px]">21,1k</span>
        </div>
      </div>

      {/* CATEGORY */}
      {/* url('http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/soroush-karimi-253940-unsplash-400x280.jpg') */}
      <div className="flex gap-3 flex-col py-5 cursor-pointer">
        <div className="relative flex items-center  justify-between  h-14 bg-bottom rounded-xl ">
          <div className="w-full brightness-50 bg-[url(http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/soroush-karimi-253940-unsplash-400x280.jpg)] h-14 rounded-xl"></div>
          <p className="absolute top-4 left-2 text-white text- z-10 font-semibold text-[1.2rem]">
            ACTIVE
          </p>

          <p className="absolute top-4 right-2 text-white text- z-10 font-semibold text-[1.2rem]">
            3
          </p>
        </div>

        {/* business */}
        <div className="relative flex items-center  justify-between  h-14 bg-bottom rounded-xl ">
          <div className="w-full brightness-50 bg-[url('http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/christopher-burns-617704-unsplash-400x280.jpg')] bg-bottom h-14 rounded-xl"></div>
          <p className="absolute top-4 left-2 text-white text- z-10 font-semibold text-[1.2rem]">
            BUSINESS
          </p>

          <p className="absolute top-4 right-2 text-white text- z-10 font-semibold text-[1.2rem]">
            90
          </p>
        </div>
        {/* gaming */}
        <div className="relative flex items-center  justify-between  h-14 bg-bottom rounded-xl ">
          <div className="w-full brightness-50 bg-[url('http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/christopher-burns-617704-unsplash-400x280.jpg')] bg-bottom h-14 rounded-xl"></div>
          <p className="absolute top-4 left-2 text-white text- z-10 font-semibold text-[1.2rem]">
            GAMING
          </p>

          <p className="absolute top-4 right-2 text-white text- z-10 font-semibold text-[1.2rem]">
            90
          </p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-[2rem] xl:text-left lg:text-left md:text-left sm:text-left">
          Recent Post
        </h1>
        <div className="flex flex-col gap-3">
          {RecenPost.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="text-left">
                <p className="bg-purple-400  mb-3 w-16 p-1 text-white rounded-lg">
                  {item.category}
                </p>
                <h1 className="font-semibold">{item.title}</h1>
                <div className="flex items-center gap-1">
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
                  <p className="text-sm">{item.date}</p>
                </div>
              </div>
              <img src={item.thumbnail} />
            </div>
          ))}
        </div>
      </div>
      <ImageSlider />
    </div>
  );
};

export default RightSide;
