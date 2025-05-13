import React from "react";
import EachFoodDetail from "./EachFoodDetail";

const FilteredFoods = ({ foodDatas, selectedFoodType }) => {
  return (
    <div className="w-full h-fit flex gap-[80px] mt-[80px] flex-wrap items-center justify-center p-4">
      {foodDatas.map((foodData, index) => {
        if (foodData.type !== selectedFoodType) return null;
        return <EachFoodDetail key={index} foodData={foodData} />;
      })}
    </div>
  );
};

export default FilteredFoods;
