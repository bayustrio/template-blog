import React from "react";
import CardCategory from "../components/Category/CardCategory";
import Thumbnail from "../components/Category/Thumbnail";
import RightSide from "../components/RightSide";

const Category = () => {
  return (
    <>
      <div>
        <Thumbnail />
        <div className="flex justify-between flex-col lg:flex-row xl:flex-row min-h-screen gap-4 lg:px-14 xl:px-14 sm:px-6 p-3">
          <div className="xl:w-[65%] lg:w-[65%] w-full">
            <CardCategory />
          </div>
          <div className="xl:mt-14  lg:w-[25%] w-full xl:w-[25%]">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
