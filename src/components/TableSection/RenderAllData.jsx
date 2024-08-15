"use client";
import React from 'react';
import { Table } from 'flowbite-react';

const RenderAllData = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Table.Row key={item.id}>
          <Table.Cell>
            <div className="flex items-center space-x-3">
              <img className="w-10 h-10 rounded-full" src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
          </Table.Cell>
          <Table.Cell>${item.current_price}</Table.Cell>
          <Table.Cell>
            {item.price_change_percentage_24h > 0 ? (
              <span className="text-green-600">{item.price_change_percentage_24h}%</span>
            ) : (
              <span className="text-red-600">{item.price_change_percentage_24h}%</span>
            )}
          </Table.Cell>
          <Table.Cell>${item.market_cap}</Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default RenderAllData;
