"use client";
import { useState } from "react";
import FoodFilter from "./FoodFilter";
import FilteredFoods from "./FilteredFoods";

const foodDatas = [
  {
    id: 1,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "fruit",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 2,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 3,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 4,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
  {
    id: 5,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "fruit",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 6,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 7,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 8,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
  {
    id: 9,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "grain",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 10,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 11,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "grain",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 12,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "grain",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
  {
    id: 13,
    title: "Egg and Cucumber",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "fruit",
    image: "https://restics.temptics.com/assets/img/food-1.png",
  },
  {
    id: 14,
    title: "Launch Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "protein",
    image: "https://restics.temptics.com/assets/img/food-2.png",
  },
  {
    id: 15,
    title: "Dinner Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "vegetable",
    image: "https://restics.temptics.com/assets/img/food-3.png",
  },
  {
    id: 16,
    title: "Dessert Foods",
    price: 4500,
    description:
      "It’s the perfect dining experience where a every dish is crafted with fresh high quality ",
    type: "protein",
    image: "https://restics.temptics.com/assets/img/shop-details.png",
  },
];
const foodTypes = ["fruit", "vegetable", "grain", "protein"];

const MainSection = () => {
  const [selectedFoodType, setSelectedFoodType] = useState("fruit");
  return (
    <main className="w-full h-fit flex flex-col pt-[120px] items-center justify-center p-4">
      <FoodFilter
        foodTypes={foodTypes}
        selectedFoodType={selectedFoodType}
        setSelectedFoodType={setSelectedFoodType}
      />
      <FilteredFoods
        foodDatas={foodDatas}
        selectedFoodType={selectedFoodType}
      />
    </main>
  );
};

export default MainSection;
