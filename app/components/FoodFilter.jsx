"use client";
import { useEffect } from "react";

const FoodFilter = ({
  categoryDatas,
  selectedFoodType,
  setSelectedFoodType,
}) => {
  const allFoodTypes = [...categoryDatas];
  useEffect(() => {
    if (allFoodTypes && allFoodTypes.length > 0) {
      setSelectedFoodType(allFoodTypes[0]._id);
    }
  }, []);

  return (
    <div className="w-full h-fit flex overflow-x-auto flex-nowrap flex-row gap-4 items-center justify-start p-4">
      {allFoodTypes.map((foodType, index) => {
        return (
          <span
            key={index}
            className="rounded-full cursor-pointer whitespace-nowrap px-4 py-2 duration-300 border flex-shrink-0"
            onClick={() => setSelectedFoodType(foodType._id)}
            style={{
              border:
                selectedFoodType === foodType._id
                  ? "1px solid #FAA019"
                  : "1px solid #000",
              color: selectedFoodType === foodType._id ? "#FAA019" : "#000",
            }}
          >
            {foodType.title}
          </span>
        );
      })}
    </div>
  );
};

export default FoodFilter;
