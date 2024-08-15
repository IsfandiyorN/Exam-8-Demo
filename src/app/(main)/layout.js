"use client";
import React from "react";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default function layout({ children }) {
  return (
    <div className="min-h-screen container px-2 mx-auto">
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </div>
  );
}
