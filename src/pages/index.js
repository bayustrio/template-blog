import React from "react";
import CardHome from "../components/CardHome";
import Conten from "../components/Conten";
import ContenBottom from "../components/ContenBottom";
import RightSide from "../components/RightSide";

const Home = () => {
  return (
    <>
      <h1 className="md:px-6 lg:px-14 xl:px-14 sm:px-6 p-3 font-bold xl:text-left lg:text-left md:text-left sm:text-left text-[2rem]">
        Editor Choice
      </h1>
      <CardHome />
      {/* top of the week */}
      <Conten />

      <div className="flex justify-between flex-col lg:flex-row xl:flex-row min-h-screen gap-4 lg:px-14 xl:px-14 sm:px-6 p-3">
        <div className="xl:w-[69%] lg:w-[69%] w-full ">
          <ContenBottom />
        </div>
        <div className="xl:mt-14  lg:w-[25%] w-full xl:w-[25%]">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
