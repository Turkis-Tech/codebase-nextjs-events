import React from "react";
import Image from "next/image";

const AppHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-24">
      <div className="flex items-center space-x-4">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Create Next App</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="https://nextjs.org/docs">Docs</a>
        <a href="https://nextjs.org/learn">Learn</a>
      </nav>
    </header>
  );
};

export default AppHeader;
