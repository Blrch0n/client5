import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#010F1C] text-[13px] text-[#D2D2D1]">
      <div className="w-full h-fit flex flex-col gap-8 lg:gap-16 lg:flex-row px-[50px] py-8">
        <div className="flex flex-col gap-4 w-full h-fit">
          <Image
            src={"https://restics.temptics.com/assets/img/logo.svg"}
            alt="logo"
            width={220}
            height={60}
            className="cursor-pointer"
          />
          <h1 className="text-[20px] font-bold text-white">Хаяг:</h1>
          <p>
            Парисын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот, Монгол
            улс Ай Си Тауэр - 1001 тоот
          </p>
          <ul className="w-full h-fit flex gap-4 items-center justify-start">
            <li className="w-fit h-fit p-2 border hover:bg-[#EB0029] duration-150 ease-in cursor-pointer border-[#ffffff33] rounded-[5px]">
              <FaFacebookF />
            </li>
            <li className="w-fit h-fit p-2 border hover:bg-[#EB0029] duration-150 ease-in cursor-pointer border-[#ffffff33] rounded-[5px]">
              <BsTwitterX />
            </li>
            <li className="w-fit h-fit p-2 border hover:bg-[#EB0029] duration-150 ease-in cursor-pointer border-[#ffffff33] rounded-[5px]">
              <FaLinkedinIn />
            </li>
            <li className="w-fit h-fit p-2 border hover:bg-[#EB0029] duration-150 ease-in cursor-pointer border-[#ffffff33] rounded-[5px]">
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="w-full h-fit flex flex-col gap-4">
          <h1 className="text-[20px] font-bold text-white">Цагийн хуваарь:</h1>
          <ul className="w-full h-fit flex-col flex gap-4 items-start justify-start">
            <li>
              <a
                href="/"
                className="flex gap-2 duration-150 ease-in-out hover:text-[#EB0029] items-center"
              >
                <MdKeyboardDoubleArrowRight />
                11:00 - 18:00 (ажлын өдөр)
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex gap-2 duration-150 ease-in-out hover:text-[#EB0029] items-center"
              >
                <MdKeyboardDoubleArrowRight />
                11:00 - 17:00 (амралтын өдөр)
              </a>
            </li>
            <li className="w-full h-fit flex flex-row  rounded-[5px] gap-2 items-center justify-start bg-white p-[2px]">
              <form className="w-full flex flex-row rounded-[5px] gap-2 items-center justify-between">
                <input
                  type="email"
                  placeholder="Мэйл хаягаа оруулна уу"
                  className="w-full h-fit p-3 outline-none text-black"
                />
                <button
                  type="submit"
                  className="w-fit h-fit border border-[#ffffff33] rounded-[5px] p-3 bg-[#FC791A] cursor-pointer duration-200 ease-in hover:bg-[#EB0029] text-white"
                >
                  <FaArrowRight />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#EB0029] px-8 py-2 text-center">
        <p>© Ogtorgui Ai Tech.</p>
      </div>
    </footer>
  );
};

export default Footer;
