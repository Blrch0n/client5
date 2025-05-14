"use client";
import { useEffect, useState } from "react";
import FoodFilter from "./FoodFilter";
import FilteredFoods from "./FilteredFoods";
import axios from "axios";

const foodDatas = [
  {
    id: 1,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Хүнс",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 2,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 3,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 4,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
  {
    id: 5,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Хүнс",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 6,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 7,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 8,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
  {
    id: 9,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Тариа",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 10,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 11,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Тариа",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 12,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Тариа",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
  {
    id: 13,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Хүнс",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 14,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Уураг",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 15,
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "Цагаан хоол",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 16,
    title: "Dessert Foods",
    price: 4500,

    type: "Уураг",
  },
];
const foodTypes = ["Бүх", "Хүнс", "Цагаан хоол", "Тариа", "Уураг"];

const MainSection = ({ tableid, merchantid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [subDatas, setSubDatas] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState("");

  useEffect(() => {
    if (isLoading) {
      Promise.all([
        axios.get(`http://localhost:8000/api/v1/product?user=${merchantid}`),
        axios.get(
          `http://localhost:8000/api/v1/subcategory?user=${merchantid}`
        ),
      ]).then(([foodDataResponse, subCategoryResponse]) => {
        const foodData = foodDataResponse.data.data;
        const subCategoryData = subCategoryResponse.data.data;

        console.log(
          "asdads:::::" + JSON.stringify(subCategoryResponse.data.data)
        );
        // console.log(secondDataResponse.data);

        setDatas(foodData);
        setSubDatas(subCategoryData);
        setIsLoading(false);
      });
    }
  }, [isLoading, merchantid]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-[20px] font-bold text-[#FC791A]">Loading...</p>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen flex flex-col pt-[120px] items-center justify-start p-4">
      <FoodFilter
        foodTypes={subDatas}
        selectedFoodType={selectedFoodType}
        setSelectedFoodType={setSelectedFoodType}
      />
      <FilteredFoods foodDatas={datas} selectedFoodType={selectedFoodType} />
    </main>
  );
};

export default MainSection;
