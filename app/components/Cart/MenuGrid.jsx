import React from "react";
import { useCart } from "./CartContext";
import toast from "react-hot-toast";

const menuItems = [
  {
    id: 1,
    img: "https://astylers.com/mobile/aaem/images/slider1.jpg",
    title: "Meat Mix Foliage",
    price: 20,
  },
  {
    id: 2,
    img: "https://astylers.com/mobile/aaem/images/slider2.jpg",
    title: "Sunny Breakfast",
    price: 15,
  },
  // …add more
];

export default function MenuGrid() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {menuItems.map((item) => (
        <div key={item.id} className="bg-white rounded shadow overflow-hidden">
          <img
            src={item.img}
            className="w-full h-32 object-cover"
            alt={item.title}
          />
          <div className="p-2">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-red-600 font-bold">${item.price}</p>
            <button
              className="mt-2 p-1 rounded-full bg-gray-200"
              onClick={() => {
                addToCart(item);
                toast.success(`${item.title} added to cart`);
              }}
            >
              ＋
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
