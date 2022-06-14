import React from "react";
import CardCategory from "../components/Category/CardCategory";
import ContentBtm from "../components/ContenBottom";
import RightSide from "../components/RightSide";
import DetailPost from "../components/Single-post/DetailPost";
import { ContenBottom } from "../Data/Content";

const SinglePage = () => {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row xl:flex-row min-h-screen gap-4 lg:px-14 xl:px-14 sm:px-6 p-3">
        <div className="xl:w-[65%] lg:w-[65%] w-full">
          <DetailPost />
        </div>
        <div className="xl:mt-14  lg:w-[25%] w-full xl:w-[25%]">
          <RightSide />
        </div>
      </div>
      <CardCategory />
    </>
  );
};

export default SinglePage;
