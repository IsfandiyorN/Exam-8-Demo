"use client";
import Image from "next/image";
import React from "react";

export default function About({ countryData }) {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-semibold capitalize mb-6">
        {countryData?.name.official}
      </h2>
      <div>
        <Image
          src={countryData?.flags.svg}
          width={300}
          height={300}
          alt={countryData?.name.official}
        />
        <p className="text-2xl mt-8">
          Pul birligi:{" "}
          {
            countryData?.currencies[Object.keys(countryData?.currencies)[0]]
              .name
          }
        </p>

        <p className="text-2xl mt-6">
          {String(countryData?.population).replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}
          <span> people</span>
        </p>
      </div>
    </div>
  );
}
