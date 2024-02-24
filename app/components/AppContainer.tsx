"use client";
import React from "react";

type TAppContainer = {
  children: React.ReactNode;
  id: string;
};

const AppContainer = ({ children, id }: TAppContainer) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center h-screen w-100 p-4"
    >
      {children}
    </section>
  );
};

export default AppContainer;
