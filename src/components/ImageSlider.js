import React, { useState } from "react";
import { SliderImage } from "../Data/Content";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./slider.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === SliderImage.length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderImage.length - 1 : current - 1);
  };

  if (!Array.isArray(SliderImage) || SliderImage.length <= 0) {
    return null;
  }

  return (
    <div className="relative xl:mt-3 mt-7 lg:mt-3 md:mt-3 sm:mt-3 flex items-center justify-center">
      <FaArrowAltCircleLeft
        className="absolute left-2 top-[50%] text-white text-[2rem] z-10 cursor-pointer"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute right-2 top-[50%] text-white text-[2rem] z-10 cursor-pointer"
        onClick={nextSlide}
      />
      <div>
        <h1 className="absolute font-bold text-[1rem] text-left left-2 right-2 top-[80%] z-10 text-white">
          Standing Right Here and singing until the mid
        </h1>
      </div>
      {SliderImage.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={slide}
                alt="travel image"
                className="w-full brightness-50 rounded-lg overflow-hidden"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
