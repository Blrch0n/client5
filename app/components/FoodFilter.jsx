const FoodFilter = ({ foodTypes, selectedFoodType, setSelectedFoodType }) => {
  const allFoodTypes = [{ _id: "all", title: "Бүгд" }, ...foodTypes];
  return (
    <div className="w-full h-fit flex gap-4 flex-wrap items-center justify-center p-4">
      {allFoodTypes.map((foodType, index) => {
        return (
          <span
            key={index}
            className="rounded-full cursor-pointer flex px-4 py-2 duration-300 border"
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
