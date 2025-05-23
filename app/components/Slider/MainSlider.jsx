import React from "react";
import SliderDetails from "./SliderDetails";

const sliderData = [
  {
    id: 1,
    span: "Бидний тухай1",
    title: "Таны хүссэн бүхнийг нэг 1дороос",
    description:
      "Бид таны хүссэн бүхнийг нэг дороос, хамгийн хямд үнээр, хамгийн хурдан хүргэж өгнө.",
  },
  {
    id: 2,
    span: "Бидний тухай2",
    title: "Таны хүссэн бүхнийг нэг 2дороос",
    description:
      "Бид таны хүссэн бүхнийг нэг дороос, хамгийн хямд үнээр, хамгийн хурдан хүргэж өгнө.",
  },
  {
    id: 3,
    span: "Бидний тухай3",
    title: "Таны хүссэн бүхнийг нэг 3дороос",
    description:
      "Бид таны хүссэн бүхнийг нэг дороос, хамгийн хямд үнээр, хамгийн хурдан хүргэж өгнө.",
  },
];

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <div className="w-full h-fit flex-col py-4 flex items-end justify-end  pt-[120px] bg-amber-400">
      <div className="flex flex-row w-[95%] justify-between p-4 items-center bg-red-600 rounded-bl-full rounded-tl-full">
        <img
          src={"https://restics.temptics.com/assets/img/banner-img-1.png"}
          width={240}
          height={240}
        />
        <div className="flex flex-col-reverse">
          {sliderData.map((data, index) => {
            return (
              <h1
                key={index}
                className="rotate-270 cursor-pointer font-bold"
                onClick={() => setCurrentIndex(index)}
                style={{
                  color: currentIndex === index ? "#fff" : "#010F1C",
                  fontSize: currentIndex === index ? "16px" : "12px",
                  //   fontWeight: currentIndex === index ? "bold" : "600",
                }}
              >
                {index < 10 ? `0${index + 1}` : index + 1}
              </h1>
            );
          })}
        </div>
      </div>
      <SliderDetails
        data1={sliderData}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default MainSlider;
