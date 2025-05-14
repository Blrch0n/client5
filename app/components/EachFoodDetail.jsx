import Image from "next/image";
import { useCart } from "./Cart/CartContext";
import toast from "react-hot-toast";

const EachFoodDetail = ({ foodData }) => {
  const { addToCart } = useCart();
  return (
    <div className="rounded-[0px_16px_0px_16px] flex w-full h-fit p-4 pt-0 flex-col relative justify-center items-center border border-[#00000033]">
      <Image
        width={120}
        height={120}
        src={foodData.image ? foodData.image : "/food-sample.jpg"}
        alt={foodData.title ? foodData.title : "sample food"}
        className="w-[120px] h-[120px] cursor-pointer rounded-full absolute right-1/2 transform -translate-y-[100%] translate-x-1/2"
      />
      <span className="w-full h-[120px]"></span>
      <div className="h-[50px] flex items-center">
        <h2 className="text-[17px] text-black font-semibold line-clamp-2 text-center">
          {foodData.title ? foodData.title : "Хоолны нэр оруулаагүй байна."}
        </h2>
      </div>
      <div className="h-[60px] flex items-center">
        <p className="text-[#5C6574] text-[13px] text-center line-clamp-3">
          {foodData.description
            ? foodData.description
            : "Дэлгэрэнгүй мэдээлэл байхгүй байна."}
        </p>
      </div>

      <div className="w-full h-fit flex flex-row items-center justify-between mt-4">
        <p className="text-[13px] h-fit text-[#FAA019] font-semibold">
          {new Intl.NumberFormat("en-US").format(foodData.price)}₮
        </p>
        <button
          className="bg-[#FAA019] hover:bg-[#fff] hover:text-[#FAA019] border hover:border-[#FAA019] border-[#fff] duration-200 cursor-pointer ease-in text-white text-[13px] font-semibold rounded-full px-4 py-2 mt-2"
          onClick={() => {
            addToCart({
              id: foodData.id,
              image: foodData.image ? foodData.image : "/food-sample.jpg",
              title: foodData.title
                ? foodData.title
                : "Хоолны нэр оруулаагүй байна.",
              price: foodData.price ? foodData.price : 0,
              description: foodData.description
                ? foodData.description
                : "Дэлгэрэнгүй мэдээлэл байхгүй байна.",
              type: foodData.type ? foodData.type : "Тодорхойгүй",
            });
            toast.success(
              `${
                foodData.title ? foodData.title : "Хоолны нэр оруулаагүй байна."
              } нэмэгдлээ.`
            );
          }}
        >
          Сагсанд нэмэх
        </button>
      </div>
    </div>
  );
};

export default EachFoodDetail;
