"use client";
import { UserCircle, MapPin, ShoppingCart, LogOut } from "lucide-react";

import Link from "next/link";
import React from "react";

const UserNav = () => {
  return (
    <nav className=" top-0 left-0  sticky  flex font-inter z-30 backdrop-blur-md bg-white  w-full">
      <div className="flex flex-1">
        <h1 className="px-10 py-2 font-bold text-black font-manrope text-xl">
          Agri Chain
        </h1>
      </div>

      <div className="flex  justify-end mr-5 gap-4 x-10 py-2">
        <div className="flex gap-2 cursor-pointer">
          <UserCircle size={24} />
          <p>Account</p>
        </div>
        <Link href="/landing/quickstores">
        <div className="flex gap-2 cursor-pointer">
          <MapPin size={24} />
          <p>Quick Stores</p>
        </div>
        </Link>
        <div className="flex gap-2 cursor-pointer">
          <ShoppingCart size={24} />
          <p>Cart</p>
        </div>
        <Link href="/userlogin">
          <div className="flex gap-2 cursor-pointer">
            <LogOut size={24} />
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default UserNav;
