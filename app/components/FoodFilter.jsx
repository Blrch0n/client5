const FoodFilter = ({ foodTypes, selectedFoodType, setSelectedFoodType }) => {
  return (
    <div className="w-full h-fit flex gap-4 flex-wrap items-center justify-center p-4">
      {foodTypes.map((foodType, index) => {
        return (
          <span
            key={index}
            className="rounded-full cursor-pointer flex px-4 py-2 border"
            onClick={() => setSelectedFoodType(foodType)}
            style={{
              border:
                selectedFoodType === foodType
                  ? "1px solid #FAA019"
                  : "1px solid #000",
              color: selectedFoodType === foodType ? "#FAA019" : "#000",
            }}
          >
            {foodType}
          </span>
        );
      })}
    </div>
  );
};

export default FoodFilter;
