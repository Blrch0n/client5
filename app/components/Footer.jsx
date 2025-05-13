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
    <footer className="px-[50px] py-8 bg-[#010F1C] text-[13px] text-[#D2D2D1]">
      <div className="flex flex-col gap-4">
        <Image
          src={"https://restics.temptics.com/assets/img/logo.svg"}
          alt="logo"
          width={220}
          height={60}
        />
        <p>
          Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
          lacinia curabitur lacinia mollis
        </p>
        <ul className="w-full h-fit flex gap-4 items-center justify-start">
          <li className="w-fit h-fit p-2 border border-[#ffffff33] rounded-[5px]">
            <FaFacebookF />
          </li>
          <li className="w-fit h-fit p-2 border border-[#ffffff33] rounded-[5px]">
            <BsTwitterX />
          </li>
          <li className="w-fit h-fit p-2 border border-[#ffffff33] rounded-[5px]">
            <FaLinkedinIn />
          </li>
          <li className="w-fit h-fit p-2 border border-[#ffffff33] rounded-[5px]">
            <FaYoutube />
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-[20px] font-bold text-white">Newsletter</h1>
        <ul className="w-full h-fit flex-col flex gap-4 items-start justify-start">
          <li>
            <p className="flex gap-2 items-center">
              <MdKeyboardDoubleArrowRight />
              Monday-Friday:8am - 4pm
            </p>
          </li>
          <li>
            <p className="flex gap-2 items-center">
              <MdKeyboardDoubleArrowRight />
              Saturday:8am - 12am
            </p>
          </li>
          <li className="w-full h-fit flex flex-row  rounded-[5px] gap-2 items-center justify-start bg-white p-[2px]">
            <form className="w-full flex flex-row rounded-[5px] gap-2 items-center justify-between">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-fit p-3 outline-none text-black"
              />
              <button
                type="submit"
                className="w-fit h-fit border border-[#ffffff33] rounded-[5px] p-3 bg-[#FC791A] text-white"
              >
                <FaArrowRight />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
