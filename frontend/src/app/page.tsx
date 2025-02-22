import React from "react";
import "./globals.css";
import Image from "next/image";
import Navbar from "../../component/Navbar";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const agriChainFeatures = [
    {
      icon: "🚜",
      title: "Decentralized Marketplace",
      description:
        "Farmers sell directly to consumers, eliminating middlemen for fair pricing.",
    },
    {
      icon: "🔗",
      title: "Smart Contract Payments",
      description:
        "Secure and automated blockchain-based transactions, ensuring trust and transparency.",
    },
    {
      icon: "📲",
      title: "Product Traceability",
      description:
        "Scan QR codes to track the entire journey of the product, from farm to table.",
    },
    {
      icon: "🚚",
      title: "Seamless Delivery Integration",
      description:
        "Partnered logistics ensure fresh and timely deliveries with real-time tracking.",
    },
    {
      icon: "💰",
      title: "Fair Pricing Mechanism",
      description:
        "Transparent pricing system ensures farmers receive equitable earnings.",
    },
  ];

  return (
    <div className="">
         <ToastContainer/>
      <Navbar />
      <header className=" h-screen w-full flex  items-center justify-center bg bg-cover ">
        <div className=" flex items-center justify-center flex-col   bg-blend-darken">
          <h1 className=" text-4xl font-bold  text-white font-manrope">
            Fresh. Transparent. Fair. The Future of Farming is Here.
          </h1>
          <p className=" text-2xl font-manrope text-white py-2 ">
            no middlemen, no unfair pricing, just pure farm-to-table goodness.
          </p>

          <Link href="/login">
            <button className=" font-manrope font-xl bg-primary py-2 px-2 text-white">
              Join as a Farmer
            </button>
          </Link>
        </div>
      </header>
      <main>
        <div className=" h-screen w-full flex flex-col font-manrope items-center justify-center ">
          <h1 className=" font-bold text-3xl ">AgriChain Features</h1>
          <div className=" flex flex-wrap m-10  items-center justify-center">
            {agriChainFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2 m-8"
              >
                <span className="text-5xl m-2">{feature.icon}</span>
                <h2 className="text-xl font-manrope ">{feature.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className=" h-screen w-full flex  font-manrope items-center  ">
          <div className="mx-10 rounded-sm">
            <Image
              alt="farmerimg"
              width={800}
              height={500}
              src={
                "https://t4.ftcdn.net/jpg/01/23/70/89/360_F_123708977_X8lHoZ3iSb6rRjsmFb2mxGNp2dngJrjh.jpg"
              }
            />
          </div>
          <div className=" flex flex-col items-center justify-center mx-10">
            <h1 className=" font-bold text-3xl text-center  ">
              No MiddleMan - No Unfair Pricing - Just Pure Farm-To-Table
              Goodness
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
