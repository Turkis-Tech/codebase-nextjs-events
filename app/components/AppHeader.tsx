"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import logo from "../../public/next.svg";

const AppHeader: React.FC = () => {
  const { data } = useSession();
  const { user } = data || {};

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} alt="logo" width={40} height={40} />
        </Link>
        <h1 className="text-2xl font-bold">Event Management</h1>
      </div>
      <nav className="flex space-x-4 items-center">
        <label className="text-gray-500">{user?.name}</label>
        <Link
          href="/"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </Link>
        {user ? (
          <Link
            href="#"
            onClick={() => signOut()}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/login"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
