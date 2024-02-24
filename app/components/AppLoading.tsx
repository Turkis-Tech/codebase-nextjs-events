"use client";
import React from "react";

const AppLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-600"></div>
      <h2 className="text-lg text-bold mt-4 text-gray-600">LOADING</h2>
    </div>
  );
};

export default AppLoading;
