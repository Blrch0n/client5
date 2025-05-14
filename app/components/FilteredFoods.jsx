import React from "react";
import EachFoodDetail from "./EachFoodDetail";

const FilteredFoods = ({ foodDatas, selectedFoodType }) => {
  return (
    <div className="w-full h-fit grid gap-[80px] mt-[80px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center p-4">
      {foodDatas
        .filter((e) =>
          selectedFoodType ? e.subcategory === selectedFoodType : e
        )
        .map((foodData, index) => (
          <EachFoodDetail key={index} foodData={foodData} />
        ))}
    </div>
  );
};

export default FilteredFoods;
