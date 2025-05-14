"use client";
import Header from "@/app/components/Header";
import MainSection from "@/app/components/MainSection";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { tableid, merchantid } = useParams();

  return (
    <>
      <Header merchantid={merchantid} tableid={tableid} />
      <MainSection tableid={tableid} merchantid={merchantid} />
    </>
  );
};

export default page;
