"use client";
import React, { useEffect, useState } from "react";
import LineChart from "@/components/SingleCountry/LineChart";
import About from "@/components/SingleCountry/About";

export default function Page({ params }) {
  const { country } = params;
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async (country) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${coin.image}`
      );
      const data = await response.json();
      setCountryData(data);
    };
    fetchData(country);
  }, []);

  return (
    <>
      <div className="text-white grid grid-cols-5 gap-20 mt-10 pl-16">
        <div className="col-span-2">
          <About countryData={countryData[0]} />
        </div>
        <div className="col-span-3">
          <LineChart />
        </div>
      </div>
    </>
  );
}
