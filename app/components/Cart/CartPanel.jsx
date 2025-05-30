"use client";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "../Cart/CartContext";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import axios from "axios";

export default function CartPanel({ open, onClose, merchantid, tableid }) {
  const [isHistoryClicked, setIsHistoryClicked] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isOrderClicked, setIsOrderClicked] = useState(null);
  useEffect(() => {
    // Get order history from localStorage on client-side
    const savedHistory = localStorage.getItem("orderHistory");
    if (savedHistory) {
      setOrderHistory(JSON.parse(savedHistory));
      // console.log("savedHistory", JSON.parse(savedHistory));
    }
  }, []);
  const {
    items,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeAllFromCart,
  } = useCart();

  const handleCheckout = async () => {
    if (!items || items.length === 0) {
      toast.error("Сагс хоосон байна.");
      return;
    }

    const response = await axios.post(
      `https://templateapi.xyz/qrmenu/api/v1/order`,
      {
        items: items,
        totalPrice: totalPrice,
        merchantId: merchantid,
        tableId: tableid,
        products: items.map((item) => ({
          product: item.id,
          price: item.price,
          total: item.quantity,
          _id: item._id,
        })),
      }
    );
    if (response?.data?.success) {
      try {
        const orderDate = new Date().toISOString();
        const existingOrders = JSON.parse(
          localStorage.getItem("orderHistory") || "[]"
        );

        const productsWithTitles = items.map((item) => ({
          product: item.id || item._id,
          price: item.price,
          total: item.quantity,
          title: item.title, // Include title for history display
        }));

        const orderToStore = {
          products: productsWithTitles,
          totalPrice,
          merchantId: merchantid,
          tableId: tableid,
          isPaid: false,
          orderDate, // Include order date for local storage
          orderId: response.data.orderId || Date.now(),
          status: "success",
        };

        const updatedOrders = [...existingOrders, orderToStore];
        localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
        setOrderHistory(updatedOrders);

        toast.success("Захиалга амжилттай хийгдлээ.");
        removeAllFromCart();
      } catch (error) {
        console.error("Error storing order history:", error);
        toast.error("Захиалгын түүх хадгалахад алдаа гарлаа.");
      }
    } else {
      toast.error("Захиалга хийхэд алдаа гарлаа.");
      console.log("Алдаа дэлгэрэнгүй:", response?.data || response);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 font-roboto text-[#333333] transition-opacity duration-300 
                ${
                  open
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => {
          setIsHistoryClicked(false);
          onClose();
        }}
      />

      <div
        className={`fixed inset-y-0 right-0 text-black w-full lg:w-[80vw] bg-white h-full p-4 overflow-y-auto 
                  transform transition-transform duration-300
                  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => {
            setIsHistoryClicked(false);
            onClose();
          }}
        >
          <FiX size={24} />
        </button>

        <h2 className=" font-semibold font-roboto text-[#e7000b] text-2xl mb-4">
          Таны сагс
        </h2>

        <button
          className="text-[#e7000b] text-[14px] mb-4"
          onClick={() => {
            setIsHistoryClicked(!isHistoryClicked);
          }}
        >
          Түүх харах
        </button>
        {isHistoryClicked === true ? (
          <div className="flex flex-col gap-4 mb-4 px-[15px] border border-[#999] rounded-[5px] py-2.5">
            {orderHistory.length === 0 ? (
              <p className="text-[#999]">Захиалгын түүх байхгүй байна.</p>
            ) : (
              orderHistory.map((order, index) => (
                <div key={index}>
                  <div
                    className="flex flex-row bg-[#ffba0040] rounded-[5px] justify-between w-full h-fit gap-5 py-4 items-start mb-3 cursor-pointer"
                    onClick={() => {
                      setIsOrderClicked(
                        isOrderClicked === index ? null : index
                      );
                    }}
                  >
                    <div>
                      <div className="w-full flex gap-4 items-start justify-between">
                        <div className="flex items-end gap-2">
                          <p className="font-semibold text-[#e7000b]">{`#${
                            index + 1
                          }`}</p>
                          <p className="font-medium text-[16px]">
                            {new Date(order.orderDate).toLocaleDateString(
                              "mn-MN",
                              {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }
                            )}
                          </p>
                          <p className="font-normal text-[13px] text-[#999]">
                            {new Date(order.orderDate).toLocaleTimeString(
                              "mn-MN",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                                hour12: false,
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="font-medium">{`${order.totalPrice.toLocaleString()}₮`}</div>
                  </div>

                  {/* Products list - shown when order is clicked */}
                  {isOrderClicked === index && (
                    <div className="ml-4 mb-4 border-l-2 border-[#e7000b] pl-4">
                      {order.products.map((product) => (
                        <div
                          key={product.product}
                          className="flex flex-row justify-between gap-2 mb-2"
                        >
                          <p className="text-[14px] text-[#999] font-medium">
                            {product.title}
                          </p>

                          <p className="text-[14px] text-[#999]">
                            {product.total} x{" "}
                            {`${product.price.toLocaleString()}₮`}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
            <button
              className="bg-[#e7000b] text-white py-[7px] text-[12px] px-[15px] rounded-full"
              onClick={() => {
                setIsHistoryClicked(false);
                // removeAllFromCart();
              }}
            >
              Сагс руу буцах
            </button>
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-4 px-[15px] border border-[#999] rounded-[5px] py-2.5">
              {items.length === 0 ? (
                <p className="text-[#999]">Таны сагс хоосон байна.</p>
              ) : (
                items.map((i) => (
                  <div
                    key={i.id}
                    className="flex flex-col gap-5 items-start mb-3"
                  >
                    <div className="w-full flex gap-4 items-start justify-between">
                      <img
                        src={i.img}
                        alt={i.title}
                        className="w-20 h-12 rounded mr-2 object-cover"
                      />
                      {/* <Image
                      src={imageError || i.img ? "/foodimage.jpg" : i.img}
                      alt={i.title}
                      width={80}
                      height={48}
                      className="object-cover"
                      priority
                      onError={() => setImageError(true)}
                    /> */}
                      <div className="flex-1">
                        <p className="font-medium text-[13px]">{i.title}</p>
                      </div>
                      <button
                        className="text-red-500"
                        onClick={() => {
                          removeFromCart(i.id);
                          toast.success(`${i.title} сагснаас хаслаа.`);
                        }}
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <div className="w-fit flex text-[14px] text-[#e7000b] font-semibold items-center gap-4 justify-between">
                      <span className="w-20 font-normal text-[#999] mr-2">
                        Үнийн дүн
                      </span>
                      {`${i.price.toLocaleString()}₮`}
                    </div>
                    <div className="w-fit flex text-[14px] items-center font-semibold gap-4 justify-between">
                      <span className="w-20 font-normal text-[#999] mr-2">
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
                          className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e7000b] text-white"
                        >
                          -
                        </button>
                        {i.quantity}
                        <button
                          onClick={() => {
                            increaseQuantity(i.id);
                            toast.success(`${i.title} нэг ширхэг нэмэгдлээ.`);
                          }}
                          className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e7000b] text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex w-full h-fit flex-col gap-4 mt-2.5 px-[15px] border border-[#999] rounded-[5px] py-2.5">
              {items.length > 0 && (
                <div className="flex w-full flex-col items-start gap-2.5 pt-2">
                  {items.map((i) => (
                    <div
                      key={i.id}
                      className="flex text-[#999] text-[13px] font-medium w-full justify-between mb-2"
                    >
                      <span>{i.title}</span>
                      <span>{i.price.toLocaleString()}₮</span>
                    </div>
                  ))}
                  <div className="flex w-full text-[#333] font-semibold justify-between mb-2">
                    <p>Нийт төлөх дүн</p>
                    <p>{totalPrice.toLocaleString()}₮</p>
                  </div>
                  <button
                    className="bg-[#e7000b] text-white py-[7px] text-[12px] px-[15px] rounded-full"
                    onClick={handleCheckout}
                  >
                    Үргэжлүүлэх
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
