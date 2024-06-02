"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "./services";
import { useEffect, useState } from "react";
import CarsList from "@/components/Home/CarsList";


export default function Home() {
  const [carlist, setCarList] = useState([]);

  useEffect(() => {
    getCarListAPI();
  }, [])

  const getCarListAPI = async() => {
    const result:any = await getCarsList();
    setCarList(result?.carLists);
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
      <CarsList carlist={carlist} />
    </div>
    
  );
}
