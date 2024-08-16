"use client";

import React, { useEffect, useState } from "react";
import LineChart from "@/components/SingleCountry/LineChart";

export default function Page({ params }) {
  const { country } = params;
  const [countryData, setCountryData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${country}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountryData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [country]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-white bg-gray-800">Loading...</div>;
  }

  if (!countryData) {
    return <div className="flex justify-center items-center h-screen text-white bg-gray-800">No data available</div>;
  }

  return (
    <div className="text-white bg-gray-900 min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold mb-4">{countryData.name}</h1>
          <img
            src={countryData.image.large}
            alt={`${countryData.name} logo`}
            className="w-32 h-32 mb-4 mx-auto"
          />
          <p className="text-xl mb-2">Rank: {countryData.market_cap_rank}</p>
          <p className="text-xl mb-2">
            Current Price: <span className="font-semibold">${countryData.market_data.current_price.usd.toLocaleString()}</span>
          </p>
          <p className="text-xl mb-4">
            Market Cap: <span className="font-semibold">${countryData.market_data.market_cap.usd.toLocaleString()}M</span>
          </p>
          <p className="text-md text-gray-400">
            {countryData.description.en.slice(0, 150)}...
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <LineChart data={countryData} />
        </div>
      </div>
    </div>
  );
}
