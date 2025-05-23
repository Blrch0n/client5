"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MainSection from "@/app/components/MainSection";
import MainSlider from "@/app/components/Slider/MainSlider";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { tableid, merchantid } = useParams();

  return (
    <>
      <Header merchantid={merchantid} tableid={tableid} />
      <MainSlider />
      <MainSection tableid={tableid} merchantid={merchantid} />
      <Footer />
    </>
  );
};

export default page;
