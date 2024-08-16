"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const CryptoDetails = ({ countryData }) => {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-semibold capitalize mb-6">
        {countryData.name}
      </h2>
      <div>
        <Image
          src={cryptoData.image.large}
          width={100}
          height={100}
          alt={countryData.name}
        />
        <p className="text-2xl mt-8">
          Symbol: {countryData.symbol.toUpperCase()}
        </p>
        <p className="text-2xl mt-6">
          Current Price: ${countryData.market_data.current_price.usd}
        </p>
        <p className="text-2xl mt-6">
          Market Cap: ${countryData.market_data.market_cap.usd}
        </p>
        <p className="text-2xl mt-6">
          Total Supply: {countryData.market_data.total_supply || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CryptoDetails;
