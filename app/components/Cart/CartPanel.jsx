"use client";
import React from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "../Cart/CartContext";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";

export default function CartPanel({ open, onClose }) {
  const {
    items,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeAllFromCart,
  } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 font-roboto text-[#333333] transition-opacity duration-300 
                  ${
                    open
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        className={`fixed inset-y-0 right-0 text-black w-full lg:w-[80vw] bg-white h-full p-4 overflow-y-auto 
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 hover:cursor-pointer text-gray-600"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        <h2 className=" font-semibold font-roboto text-[#FC791A]  text-2xl mb-4">
          Таны сагс
        </h2>

        <div className="flex flex-col gap-4 px-[15px] border border-[#888] rounded-[5px] py-2.5">
          {items.length === 0 ? (
            <p className="text-[#888]">Таны сагс хоосон байна.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex flex-col gap-5 items-start mb-3">
                <div className="w-full flex gap-4 items-start justify-between">
                  <Image
                    width={80}
                    height={48}
                    src={i.image}
                    alt={i.title}
                    className="w-20 h-12 rounded mr-2 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-[13px]">{i.title}</p>
                  </div>
                  <button
                    className="text-[#FC791A] cursor-pointer"
                    onClick={() => {
                      removeFromCart(i.id);
                      toast.success(`${i.title} сагснаас хаслаа.`);
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="w-fit flex text-[14px] text-[#FC791A] font-semibold items-center gap-4 justify-between">
                  <span className="w-20 font-normal text-[#888] mr-2">
                    Үнийн дүн
                  </span>{" "}
                  {new Intl.NumberFormat("en-US").format(i.price)}₮
                </div>
                <div className="w-fit flex text-[14px] items-center font-semibold gap-4 justify-between">
                  <span className="w-20 font-normal text-[#888] mr-2">
                    Тоо ширхэг
                  </span>
                  <div className="flex items-center w-fit gap-4">
                    <button
                      onClick={() => {
                        if (i.quantity === 1) {
                          removeFromCart(i.id);
                          toast.success(`${i.title} сагснаас хаслаа.`);
                        } else {
                          decreaseQuantity(i.id);
                          toast.success(`${i.title} нэг ширхэг хасагдлаа.`);
                        }
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FC791A] text-white"
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => {
                        increaseQuantity(i.id);
                        toast.success(`${i.title} нэг ширхэг нэмэгдлээ.`);
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FC791A] text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex w-full h-fit flex-col gap-4 mt-2.5 px-[15px] border border-[#888] rounded-[5px] py-2.5">
          {items.length > 0 && (
            <div className="flex w-full flex-col items-start gap-2.5 pt-2">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex text-[#888] text-[13px] font-medium w-full justify-between mb-2"
                >
                  <span>{i.title}</span>
                  <span>{new Intl.NumberFormat("en-US").format(i.price)}₮</span>
                </div>
              ))}
              <div className="flex w-full text-[#333] font-semibold justify-between mb-2">
                <p>Нийт төлөх дүн</p>
                <p>
                  {new Intl.NumberFormat("en-US").format(totalPrice.toFixed(2))}
                  ₮
                </p>
              </div>
              <button
                className="bg-[#FC791A] text-white py-[7px] text-[12px] px-[15px] rounded-full"
                onClick={() => {
                  onClose();
                  toast.success("Амжилттай захиалсан.");
                  removeAllFromCart();
                }}
              >
                Үргэжлүүлэх
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
