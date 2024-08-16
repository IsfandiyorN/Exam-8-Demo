"use client";
import {useState} from "react";
import { BsEyeFill } from "react-icons/bs";
import { Table } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addWatchList, removeWatchList, openDrawer } from "@/store/dataSlice";
import Image from "next/image";

export default function TableRowItem({ id, data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);



  return (
    <>
<Table.Row
      key={id}
      className="bg-blue-300 cursor-pointer dark:border-gray-700 dark:bg-gray-800"
    >
      
      <Table.Cell
        onClick={() => {
          router.push(`/${data.cca2}`);
        }}
      >
        <Image
          src={data.image}
          width={22}
          height={22}
          alt={data.name}
        />
      </Table.Cell>
      <Table.Cell
        onClick={() => {
          router.push(`/${data.cca2}`);
        }}
      >
        {data.current_price.toFixed(2)}
      </Table.Cell>

      <Table.Cell className="flex gap-3">
        <label htmlFor={id}>
          <BsEyeFill
            className={`${
              data.isInMyWatchList ? "text-[#ff2222]" : ""
            } cursor-pointer`}
            size={20}
          />
        </label>
        <input
          type="checkbox"
          name={id}
          id={data.cca2}
          onChange={() => {
            if (data.isInMyWatchList) {
              dispatch(removeWatchList(data.id));
            } else {
              dispatch(addWatchList(data.id));
              dispatch(openDrawer());
            }
          }}
          defaultChecked={data.isInMyWatchList}
          className="hidden"
        />
        <p>
          {data.price_change_percentage_24h.toFixed(2)}
        </p>
      </Table.Cell>

      <Table.Cell
        onClick={() => {
          router.push(`/${data.cca2}`);
        }}
      >
        {(data.market_cap_change_24h.toFixed(2))}
      </Table.Cell>

      
    </Table.Row>
   
    </>
  );
  
}
