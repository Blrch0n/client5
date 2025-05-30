"use client";
import { useEffect, useState } from "react";
import FoodFilter from "./FoodFilter";
import FilteredFoods from "./FilteredFoods";
import axios from "axios";
import SubFootFilter from "./SubFootFilter";

const MainSection = ({ tableid, merchantid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [subDatas, setSubDatas] = useState([]);
  const [categoryDatas, setCategoryDatas] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState("");
  const [selectedSubFoodType, setSelectedSubFoodType] = useState("");

  useEffect(() => {
    if (isLoading) {
      Promise.all([
        axios.get(
          `https://templateapi.xyz/qrmenu/api/v1/product?user=${merchantid}`
        ),
        axios.get(
          `https://templateapi.xyz/qrmenu/api/v1/subcategory/merchant/${merchantid}`
        ),
        axios.get(
          `https://templateapi.xyz/qrmenu/api/v1/category/merchant/${merchantid}`
        ),
      ]).then(([foodDataResponse, subCategoryResponse, categoryResponse]) => {
        const foodData = foodDataResponse.data.data;
        const subCategoryData = subCategoryResponse.data.data;
        const categoryData = categoryResponse.data.data;

        setDatas(foodData);
        setSubDatas(subCategoryData);
        setCategoryDatas(categoryData);
        setIsLoading(false);
      });
    }
  }, [isLoading, merchantid]);

  useEffect(() => {
    if (selectedFoodType && subDatas.length > 0) {
      // Find subcategories matching the selected food type
      const matchingSubcategories = subDatas.filter(
        (item) =>
          item.category === selectedFoodType || selectedFoodType === "all"
      );

      // Auto-select first subcategory if any match is found
      if (matchingSubcategories.length > 0) {
        setSelectedSubFoodType(matchingSubcategories[0]._id);
        console.log(
          "Auto-selected subcategory:",
          matchingSubcategories[0].title
        );
      } else {
        // Reset selection if no matching subcategories
        setSelectedSubFoodType("");
      }
    }
  }, [selectedFoodType, subDatas]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <main
      className="w-full flex flex-col items-center justify-start p-4"
      style={{ height: datas ? "auto" : "100vh" }}
    >
      <FoodFilter
        categoryDatas={categoryDatas}
        setCategoryDatas={setCategoryDatas}
        selectedFoodType={selectedFoodType}
        setSelectedFoodType={setSelectedFoodType}
      />
      <div className="w-full h-fit flex items-center justify-center px-4">
        <span className="w-full h-[1px] bg-[#f1f1f1]" />
      </div>
      <SubFootFilter
        subDatas={subDatas}
        selectedFoodType={selectedFoodType}
        selectedSubFoodType={selectedSubFoodType}
        setSelectedSubFoodType={setSelectedSubFoodType}
      />
      <FilteredFoods
        foodDatas={datas}
        selectedSubFoodType={selectedSubFoodType}
      />
    </main>
  );
};

export default MainSection;
