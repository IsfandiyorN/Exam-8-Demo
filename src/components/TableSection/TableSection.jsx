"use client";
import React, { useState, useEffect } from 'react';
import { Table } from 'flowbite-react';
import RenderAllData from './RenderAllData';
import {Pagination} from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '@/store/dataSlice';

const paginate = (items, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export default function TableSection() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const watchList = useSelector((state) => state.data.watchList);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=249&page=1&sparkline=false&price_change_percentage=24h`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const processedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          current_price: item.current_price,
          price_change_percentage_24h: item.price_change_percentage_24h,
          market_cap: item.market_cap,
          isInMyWatchList: watchList.includes(item.id),
        }));
        dispatch(setData(processedData));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch, currentPage, watchList, pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);
  const paginationData = paginate(data, pageSize, currentPage);

  return (
    <div className="max-w-[900px] mx-auto mt-24">
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="px-6 py-4 text-xl font-bold leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
        ) : (
          <>
            <Table>
              <Table.Head>
                <Table.HeadCell className="bg-[#2a303b] text-white">
                  Coin
                </Table.HeadCell>
                <Table.HeadCell className="bg-[#2a303b] text-white">
                  Price
                </Table.HeadCell>
                <Table.HeadCell className="bg-[#2a303b] text-white">
                  24h Change
                </Table.HeadCell>
                <Table.HeadCell className="bg-[#2a303b] text-white">
                  Market Cap
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <RenderAllData paginationData={paginationData} />
              </Table.Body>
            </Table>
            <div className='flex justify-center mt-8'>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
