"use client";
import React from "react";
import CarouselComponent from "./CarouselComponent";
import { useSelector } from "react-redux";

export default function CarouselSection() {
  const { data, watchList } = useSelector((state) => state.data);

  const CarouselItems = data.filter((item) => {
    if (watchList.includes(item.cca2)) {
      return item;
    }
  });
  return (
    <section className="max-w-[900px] mx-auto text-center text-white">
      <h2 className="text-3xl font-semibold capitalize mb-6">
      Cryptofolio Watch List
      </h2>
      <div className="mt-10">
        {CarouselItems.length > 0 ? (
          <CarouselComponent items={CarouselItems} />
        ) : (
          <div className="h-14 sm:h-20 xl:h-28 2xl:h-36">
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-xl">
              <p className="text-3xl font-bold ">There is no items to show</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
