import React from "react";
import EachFoodDetail from "./EachFoodDetail";

const FilteredFoods = ({ foodDatas, selectedFoodType }) => {
  const filteredFoodDatas = foodDatas.filter((e) =>
    selectedFoodType ? e.subcategory === selectedFoodType : e
  );
  return (
    <div className="w-full h-fit grid gap-[80px] mt-[80px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center p-4">
      {filteredFoodDatas.length > 0 ? (
        filteredFoodDatas.map((foodData) => (
          <EachFoodDetail
            key={foodData._id}
            foodData={foodData}
            selectedFoodType={selectedFoodType}
          />
        ))
      ) : (
        <div className="w-full h-full flex items-center py-20 justify-center">
          <p className="text-xl text-gray-500">
            Энэ төрлийн хоол байхгүй байна
          </p>
        </div>
      )}
    </div>
  );
};

export default FilteredFoods;
