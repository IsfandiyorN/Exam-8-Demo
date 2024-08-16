"use client";
import React from 'react';
import { Table } from 'flowbite-react';
import Link from 'next/link';

const RenderAllData = ({ paginationData }) => {
  return (
    <>
      {paginationData.map((item) => (
        <Table.Row key={item.id} className='bg-slate-900'>
          <Table.Cell>
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <Link href={`/${item.id}`}>{item.name}</Link>
            </div>
          </Table.Cell>
          <Table.Cell>${item.current_price}</Table.Cell>
          <Table.Cell>
            {item.price_change_percentage_24h > 0 ? (
              <span className="text-green-600">
                {item.price_change_percentage_24h}%
              </span>
            ) : (
              <span className="text-red-600">
                {item.price_change_percentage_24h}%
              </span>
            )}
          </Table.Cell>
          <Table.Cell>${item.market_cap}</Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default RenderAllData;
