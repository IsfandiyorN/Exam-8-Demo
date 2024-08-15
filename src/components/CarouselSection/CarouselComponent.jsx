"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function CarouselComponent({ items }) {
  const router = useRouter();
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={800} pauseOnHover>
        {items.map((item) => (
          <div
            key={item.cca2}
            className="flex  h-full items-center justify-center bg-gray-400 bg-opacity-20 dark:bg-gray-700 dark:text-white"
            onClick={() => router.push(`/${item.cca2}`)}
          >
            <div className="flex gap-20 items-center justify-center">
              <Image
                src={item.flags.svg}
                width={300}
                height={300}
                alt={item.name.common}
              />
              <div>
                <p className="text-4xl font-bold mb-4">{item.name.common}</p>
                <p className="text-2xl">
                  {String(item.population).replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
                  <span className="text-xl"> people</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
