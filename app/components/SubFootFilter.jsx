"use client";
import { useEffect } from "react";

const SubFootFilter = ({
  subDatas,
  selectedFoodType,
  selectedSubFoodType,
  setSelectedSubFoodType,
}) => {
  const allFoodTypes = subDatas;
  const filteredSubFootTypes = allFoodTypes.filter(
    (e) => e.category === selectedFoodType || selectedFoodType === "all"
  );
  //   useEffect(() => {
  //     if (filteredSubFootTypes && filteredSubFootTypes.length > 0) {
  //       setSelectedSubFoodType(filteredSubFootTypes[0]._id);
  //       console.log("Auto-selecting:", filteredSubFootTypes[0]._id);
  //       console.log("Filtered Sub Food Types:", filteredSubFootTypes);
  //     } else if (filteredSubFootTypes.length === 0) {
  //       setSelectedSubFoodType("");
  //       console.log("Clearing selection - no items found");
  //     }
  //   }, [filteredSubFootTypes, selectedFoodType]);
  return (
    <div className="w-full h-fit flex overflow-x-auto flex-nowrap flex-row gap-4 items-center justify-start p-4">
      {filteredSubFootTypes.map((foodType, index) => {
        return (
          <span
            key={index}
            className="rounded-full cursor-pointer whitespace-nowrap px-4 py-2 duration-300 border flex-shrink-0"
            onClick={() => {
              setSelectedSubFoodType(foodType._id);
              console.log("Selected Sub Food Type:", foodType._id);
              console.log("selectedSubFoodType:", selectedSubFoodType);
            }}
            style={{
              border:
                selectedSubFoodType === foodType._id
                  ? "1px solid #FAA019"
                  : "1px solid #000",
              color: selectedSubFoodType === foodType._id ? "#FAA019" : "#000",
            }}
          >
            {foodType.title}
          </span>
        );
      })}
    </div>
  );
};

export default SubFootFilter;
