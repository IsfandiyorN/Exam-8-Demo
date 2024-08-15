"use client";
import React, { useState } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer, openDrawer } from "@/store/dataSlice";

import DrawerComponent from "./Drawer";

export default function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => dispatch(closeDrawer());
  return (
    <header className="max-w-[900px] text-white py-4 mx-auto px-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-3xl font-bold uppercase hover:text-neutral-300 transition-colors">
            Cryptofolio 
          </span>
        </Link>
        <Button onClick={() => dispatch(openDrawer())}>Watchlist</Button>
      </div>

      <DrawerComponent handleClose={handleClose} />
    </header>
  );
}
