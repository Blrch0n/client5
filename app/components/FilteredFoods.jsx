import React from "react";
import EachFoodDetail from "./EachFoodDetail";

const FilteredFoods = ({ foodDatas, selectedFoodType }) => {
  return (
    <div className="w-full h-fit grid gap-[80px] mt-[80px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center p-4">
      {selectedFoodType === "Бүх"
        ? foodDatas.map((foodData, index) => (
            <EachFoodDetail key={index} foodData={foodData} />
          ))
        : foodDatas.map((foodData, index) => {
            if (foodData.type !== selectedFoodType) return null;
            return <EachFoodDetail key={index} foodData={foodData} />;
          })}
    </div>
  );
};

export default FilteredFoods;
