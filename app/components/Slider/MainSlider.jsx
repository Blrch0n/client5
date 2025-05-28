import { useEffect, useState } from "react";
import SliderDetails from "./SliderDetails";
import axios from "axios";

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

const MainSlider = ({ merchantid, tableid }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSlider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get(
          `https://templateapi.xyz/qrmenu/api/v1/slider/merchant/${merchantid}`
        );
        setSlider(response.data.data);
        console.log("Slider Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      fetchSliderData();
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <svg
          className="mr-3 size-10 animate-spin"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>{" "}
      </div>
    );
  }
  console.log("Slider Data:", sliderData);

  return (
    <div className="w-full h-fit flex-col py-4 flex items-end justify-end  pt-[120px] bg-amber-400">
      <div className="flex flex-row w-[95%] justify-between p-4 items-center bg-red-600 rounded-bl-full rounded-tl-full">
        <img
          src={
            sliderData[currentIndex].image.length > 20
              ? `https://templateapi.xyz/qrmenu/uploads/${sliderData[currentIndex].image}`
              : `https://restics.temptics.com/assets/img/banner-img-1.png`
          }
          alt={sliderData[currentIndex].title}
          className="rounded-full object-cover h-[240px] max-w-[240px]"
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
