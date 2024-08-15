"use client";
import React from "react";
import { Button, Drawer } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { clearAllWatchList, closeDrawer } from "@/store/dataSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DrawerComponent({ handleClose }) {
  const { data, watchList } = useSelector((state) => state.data);
  const { isOpenDrawer } = useSelector((state) => state.data);

  const router = useRouter();
  const dispatch = useDispatch();

  const sortedData = data.filter((item) => {
    if (watchList.includes(item.cca2)) {
      return item;
    }
  });

  return (
    <Drawer open={isOpenDrawer} onClose={handleClose} position="right">
      <Drawer.Header title="Watchlist" />
      <Drawer.Items>
        <div className="text-black flex flex-col gap-2">
          {sortedData.map((item) => (
            <div
              key={item.cca2}
              onClick={() => {
                router.push(`/${item.cca2}`);
                dispatch(closeDrawer());
              }}
              className="p-2 bg-neutral-200 rounded-md flex items-center justify-between cursor-pointer"
            >
              <p className="">{item.name.common}</p>
              <Image
                src={item.image}
                alt={item.current_price}
                width={30}
                height={30}
              />
            </div>
          ))}
        </div>
        {sortedData.length > 0 && (
          <Button
            onClick={() => {
              dispatch(clearAllWatchList());
              dispatch(closeDrawer());
            }}
            className="w-full mt-6"
          >
            Clear All
          </Button>
        )}
      </Drawer.Items>
    </Drawer>
  );
}
