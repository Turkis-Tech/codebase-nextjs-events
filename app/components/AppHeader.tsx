import React from "react";
import Image from "next/image";
import logo from "../../public/next.svg";

const AppHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-24">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Event Management</h1>
      </div>
      <nav className="flex space-x-4">
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </nav>
    </header>
  );
};

export default AppHeader;
