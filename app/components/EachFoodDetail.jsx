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
        src={foodData.image}
        alt={foodData.title}
        className="w-[120px] h-[120px] rounded-full absolute right-1/2 transform -translate-y-[100%] translate-x-1/2"
      />
      <span className="w-full h-[120px]"></span>
      <h2 className="text-[17px] text-black font-semibold">{foodData.title}</h2>
      <p className="text-[#5C6574] text-[13px] text-center">
        {foodData.description}
      </p>

      <div className="w-full h-fit flex flex-row items-center justify-between mt-4">
        <p className="text-[13px] h-fit text-[#FAA019] font-semibold">
          {new Intl.NumberFormat("en-US").format(foodData.price)}₮
        </p>
        <button
          className="bg-[#FAA019] text-white text-[13px] font-semibold rounded-full px-4 py-2 mt-2"
          onClick={() => {
            addToCart(foodData);
            toast.success(`${foodData.title} нэмэгдлээ.`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default EachFoodDetail;
