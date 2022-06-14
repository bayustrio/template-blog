import React from "react";
// url('http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/christopher-burns-617704-unsplash-1920x982.jpg')
const Thumbnail = () => {
  return (
    <>
      <div className="w-full relative object-cover bg-center bg-cover h-[30vh] bg-[url('http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/02/christopher-burns-617704-unsplash-1920x982.jpg')]">
        <div className="absolute left-0 right-0 top-[50%]">
          <h1 className="font-bold text-[2rem] text-white">GAMING</h1>
          <p className="text-white">Sample category description goes here</p>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
