"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "./services";
import { useEffect, useState } from "react";
import CarsList from "@/components/Home/CarsList";


export default function Home() {
  const [carlist, setCarList] = useState([]);
  const [carsOrgList, setCarsOrgList] = useState([]);

  useEffect(() => {
    getCarListAPI();
  }, [])

  const getCarListAPI = async() => {
    const result:any = await getCarsList();
    setCarList(result?.carLists);
    setCarsOrgList(result?.carLists);
  }

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand == brand);
    setCarList(filterList);
  }

  const filterCarPrice = (priceRange: any) => {
    const orderPriceList = [...carsOrgList].sort((a: any, b: any) => priceRange == -1 ? a.price - b.price : b.price - a.price);
      setCarList(orderPriceList);
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption 
        carlist={carsOrgList} 
        setBrand={(value: string) => filterCarList(value)}
        setPrice={(value: string) => filterCarPrice(value)}
      />
      <CarsList carlist={carlist} />
    </div>
    
  );
}
