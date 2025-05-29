"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="w-full h-[90vh] flex flex-col items-center gap-4 justify-center bg-white text-black">
        <h2 className="font-roboto text-2xl font-semibold">
          Энэ хуудас олдсонгүй
        </h2>
        <Link
          className="font-roboto"
          href="https://www.ogtorgui.mn/?fbclid=IwY2xjawKk86ZleHRuA2FlbQIxMABicmlkETFpTEZmeVF6Y2lVS09pb2NHAR7wfmo2u-z6BFoOXg7DYesNSu-h7JqKIDip4CPpV5QwZkSJi3xp4X8NJHODuw_aem_vQ8uNzgZuIzy0n_4ahHCFw"
        >
          <button className="py-2 px-4 rounded-full bg-gray-200 cursor-pointer">
            {" "}
            Дэлгэрэнгүй мэдээлэл авах хуудас
          </button>
        </Link>
        <p className="text-[8px] font-roboto">© Огторгуй ЭЙ АЙ Тек ХХК</p>
      </div>
      <Footer />
    </>
  );
}
