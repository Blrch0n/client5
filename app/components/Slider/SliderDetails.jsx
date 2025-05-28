"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";

const SliderDetails = ({ data1, setCurrentIndex, currentIndex }) => {
  const [arrowsDisabled, setArrowsDisabled] = useState(false);
  const [direction, setDirection] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection("right");
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex < data1.length - 1 ? prevIndex + 1 : 0
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, data1.length, setCurrentIndex]);

  const handleArrowClick = (dir) => {
    if (arrowsDisabled) return;
    setArrowsDisabled(true);
    setDirection(dir);
    setIsTransitioning(true);

    if (dir === "left") {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(data1.length - 1);
      }
    } else if (dir === "right") {
      if (currentIndex < data1.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }

    setTimeout(() => {
      setIsTransitioning(false);
      setArrowsDisabled(false);
    }, 500);
  };

  return (
    <div className="w-full h-fit flex flex-col gap-4 p-4">
      <div className="relative h-[180px] overflow-hidden">
        {data1[currentIndex] && (
          <div
            key={currentIndex}
            className="absolute w-full flex flex-col gap-4 text-[#010F1C] transition-opacity duration-500 ease-in-out opacity-100"
          >
            <h1 className="text-[33px] font-black leading-none">
              {data1[currentIndex].title}
            </h1>
            <p className="text-[13px]">{data1[currentIndex].description}</p>
            <button className="font-bold bg-[#EB0029] text-white flex w-fit flex-row gap-2 items-center border border-[#EB0029] cursor-pointer hover:text-[#EB0029] hover:bg-white px-4 py-2 rounded-[10px] transition-all duration-300 ease-in-out">
              Яг одоо захиал{" "}
              <span className="w-5 h-5 flex items-center justify-center rounded-[4px] bg-white text-[#EB0029]">
                <TiArrowRight />
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="w-full flex flex-row gap-4 items-center justify-between">
        <div className="w-full h-[1px] flex justify-start bg-[#eb00291a]">
          <span
            className="h-full transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: "#EB0029",
              width: `${((currentIndex + 1) / data1.length) * 100}%`,
            }}
          ></span>
        </div>
        <TiArrowLeft
          className={`text-5xl cursor-pointer ${
            arrowsDisabled ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => handleArrowClick("left")}
        />
        <TiArrowRight
          className={`text-5xl cursor-pointer ${
            arrowsDisabled ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default SliderDetails;
