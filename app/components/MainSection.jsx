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
