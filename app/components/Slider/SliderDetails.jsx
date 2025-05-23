"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";

const SliderDetails = ({ data1, setCurrentIndex, currentIndex }) => {
  const [arrowsDisabled, setArrowsDisabled] = useState(false);

  const handleArrowClick = (direction) => {
    if (arrowsDisabled) return;
    setArrowsDisabled(true);

    if (direction === "left") {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(data1.length - 1);
      }
    } else if (direction === "right") {
      if (currentIndex < data1.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }

    setTimeout(() => setArrowsDisabled(false), 1000);
  };
  return (
    <div className="w-full h-fit flex flex-col gap-4 p-4">
      <AnimatePresence mode="wait">
        {data1
          .filter((data) => data.id === currentIndex + 1)
          .map((data) => (
            <motion.div
              key={data.id}
              className="flex flex-col gap-4 text-[#010F1C]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[33px] font-black leading-none">
                {data.title}
              </h1>
              <p className="text-[13px]">{data.description}</p>
              {/* <Link href={"/"}> */}
              <button className="font-[700] bg-[#EB0029] text-white flex w-fit flex-row gap-2 items-center border border-[#EB0029] cursor-pointer hover:text-[#EB0029] hover:bg-white px-4 py-2 rounded-[10px] transition-all duration-300 ease-in-out">
                Яг одоо захиал{" "}
                <span className="w-5 h-5 flex items-center justify-center rounded-[4px] bg-white text-[#EB0029]">
                  <TiArrowRight />
                </span>
              </button>
            </motion.div>
          ))}
      </AnimatePresence>
      <div className="w-full flex flex-row gap-4 items-center justify-between">
        <span className="w-full"></span>
        <TiArrowLeft
          className="text-5xl cursor-pointer"
          onClick={() => handleArrowClick("left")}
          style={{
            opacity: arrowsDisabled ? 0.5 : 1,
            pointerEvents: arrowsDisabled ? "none" : "auto",
          }}
        />
        <TiArrowRight
          className="text-5xl cursor-pointer"
          onClick={() => handleArrowClick("right")}
          style={{
            opacity: arrowsDisabled ? 0.5 : 1,
            pointerEvents: arrowsDisabled ? "none" : "auto",
          }}
        />
      </div>
    </div>
  );
};

export default SliderDetails;
