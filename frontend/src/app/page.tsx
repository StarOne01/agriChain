import React from "react";
import "./globals.css";
const page = () => {
  return (
    <div className="bg-bannerimg bg-no-repeat bg-cover">
      <header className=" h-screen w-full flex  items-center justify-center">
        <div className=" flex items-center justify-center flex-col">
            <h1 className=" text-4xl font-bold font-manrope">
            Fresh. Transparent. Fair. The Future of Farming is Here.
            </h1>
            <p className=" text-2xl font-manrope py-2">no middlemen, no unfair pricing, just pure farm-to-table goodness.</p>
            <button className=" font-manrope font-xl bg-primary py-2 px-2 text-white">Join as a Farmer</button>
        </div>
      </header>
    </div>
  );
};

export default page;
