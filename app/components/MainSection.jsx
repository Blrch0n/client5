"use client";
import { useEffect, useState } from "react";
import FoodFilter from "./FoodFilter";
import FilteredFoods from "./FilteredFoods";
import axios from "axios";

const MainSection = ({ tableid, merchantid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [subDatas, setSubDatas] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState("");

  useEffect(() => {
    if (isLoading) {
      Promise.all([
        axios.get(
          `https://templateapi.xyz/qrmenu/api/v1/product?user=${merchantid}`
        ),
        axios.get(
          `https://templateapi.xyz/qrmenu/api/v1/subcategory?user=${merchantid}`
        ),
      ]).then(([foodDataResponse, subCategoryResponse]) => {
        const foodData = foodDataResponse.data.data;
        const subCategoryData = subCategoryResponse.data.data;

        // console.log(
        //   "asdads:::::" + JSON.stringify(subCategoryResponse.data.data)
        // );
        // // console.log(secondDataResponse.data);

        setDatas(foodData);
        setSubDatas(subCategoryData);
        setIsLoading(false);
      });
    }
  }, [isLoading, merchantid]);

  if (isLoading) {
    return (
      // <div className="w-full h-screen flex items-center justify-center">
      //   <svg
      //     className="mr-3 size-10 animate-spin"
      //     viewBox="0 0 24 24"
      //     fill="currentColor"
      //   >
      //     <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      //   </svg>
      // </div>
      <div></div>
    );
  }

  return (
    <main
      className="w-full flex flex-col items-center justify-start p-4"
      style={{ height: datas ? "auto" : "100vh" }}
    >
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
