import React from "react";
import Avatar from "../../images/favicon.jpeg";

const DetailPost = () => {
  return (
    <>
      <div className=" flex-col flex">
        <h1 className="cursor-pointer bg-blue-600 font-semibold text-white w-40 rounded-md p-2 uppercase">
          Business
        </h1>
        <h1 className="font-bold xl:text-[2.5rem] lg:text-[2.5rem] text-left">
          Outdoor Photo Shooting With Sexy And Beautiful
        </h1>
        <p className="text-slate-500 text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="flex mt-3 items-center">
          <img src={Avatar} className="w-12 h-12 rounded-full" />
          <h1 className="font-bold text-[13px]">Anna Nikova</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-3"
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
          <p className="text-[13px]">Dec 23, 2016</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-[13px]">0 Comment</p>
        </div>
        <img
          className="mt-3 rounded-xl"
          src="https://jellywp.com/theme/disto/demo/wp-content/uploads/2018/11/pexels-photo-1036628.jpeg"
        />
        <p className="text-slate-500 text-left">
          Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut
          imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.
          Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.
          Proin viverra orci a leo suscipit placerat. Sed feugiat posuere
          semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis
          gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus
          tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in
          malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit
          nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum
          in. Nulla a magna at diam consequat semper eu vitae elit. In hac
          habitasse platea dictumst.
        </p>
        <h1 className="font-bold text-[1.3rem] text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </h1>
        <p className="text-slate-500 text-left">
          Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut
          imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.
          Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.
          Proin viverra orci a leo suscipit placerat. Sed feugiat posuere
          semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis
          gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus
          tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in
          malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit
          nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum
          in. Nulla a magna at diam consequat semper eu vitae elit. In hac
          habitasse platea dictumst.
        </p>
        <div className="mt-2 gap-2 flex lg:flex-row xl:flex-row flex-col">
          <img
            className="rounded-xl"
            src="https://jellywp.com/theme/elono/demo/wp-content/uploads/2016/12/christopher-burns-617704-unsplash-416x520.jpg"
          />
          <p className="text-slate-500 text-left">
            Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut
            imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.
            Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum.
            Proin viverra orci a leo suscipit placerat. Sed feugiat posuere
            semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque
            iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at
            lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus
            in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend
            velit nulla a mi. Praesent pharetra semper purus, a vehicula massa
            interdum in. Nulla a magna at diam consequat semper eu vitae elit.
            In hac habitasse platea dictumst. Mauris mattis auctor cursus.
            Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem.
            Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat.
            Suspendisse vulputate porttitor condimentum. Proin viverra orci a
            leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi
            erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac
            hendrerit
          </p>
        </div>
        <p className="text-slate-500 text-left mt-2">
          In hac habitasse platea dictumst. Mauris mattis auctor cursus.
          Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem.
          Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat.
          Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo
          suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat,
          posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit.
          Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis.
          Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum
          faucibus velit, et eleifend velit nulla a mi.
        </p>

        <div className="flex mt-5 items-center">
          <p className="p-1 rounded-lg cursor-pointer hover:bg-slate-500 hover:text-white  border border-slate-400 text-[13px]">
            #GAMING
          </p>
        </div>

        {/* user */}
        <div className="flex mt-14 items-center gap-3">
          <img src={Avatar} className="w-32 h-32 rounded-full" />
          <div className="flex flex-col text-left ">
            <h1 className="font-bold text-left">Anna Nikova</h1>
            <p className="text-slate-400 ">
              welcome Mauris mattis auctor cursus. Phasellus tellus tellus,
              imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus
              nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate
              porttitor condimentum.
            </p>
          </div>
        </div>

        <div className="bg-[#F9F9F8] p-3 mt-10  rounded-lg w-full h-[74vh]">
          <h1 className="font-bold text-left">Leave Replay</h1>
          <p className="content-[*] text-[13px] text-slate-400 text-left ">
            Your Email Address Will Not Be Published. Required Fields Are Marked{" "}
          </p>
          <textarea
            placeholder="Comment"
            className="w-full rounded-md h-44 border border-gray-300 p-1 outline-none focus:outline-none  resize-none"
          />

          <div className="flex flex-col lg:flex-row xl:flex-row xl:items-center gap-4">
            <input
              placeholder="FullName"
              className="border rounded-md h-10 pl-2 border-gray-300"
            />

            <input
              placeholder="Email"
              className="border rounded-md h-10 pl-2 border-gray-300"
            />

            <input
              placeholder="Address"
              className="border rounded-md h-10 pl-2 border-gray-300"
            />
          </div>
          <button className="py-2 xl:px-36 lg:px-36 w-full rounded-md mt-3 text-white bg-black">
            Post Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailPost;
