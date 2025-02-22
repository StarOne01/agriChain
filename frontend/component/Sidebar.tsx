"use client"
import { House , Carrot ,Logs ,IndianRupee ,ChartNoAxesCombinedIcon,LogOut ,MapPinCheckIcon ,Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

const SideBar = () => {

    const [selected, setSelected] = React.useState("home");
   
  return (
    <div className=" bg-white  font-inter h-screen w-[20%]">
      <h1 className="  text-xl p-5 font-bold text-primary">Dashboard</h1>

      <div className=" px-5">
        <Link onClick={()=>{setSelected("home")}
        } href="/dashboard">
          <div className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="home" ? "bg-primary text-white" : ""} transition-all`}>
            <House size={24} />
            <p className="">Home</p>
          </div>
        </Link>
   
        <Link href="/dashboard/myproducts">
          <div onClick={()=>{
            setSelected("My Products")
          }} className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="My Products" ? "bg-primary text-white" : ""} transition-all`}>
            <Carrot size={24} />
            <p className="">My Products</p>
          </div>
        </Link>
        <Link href="/dashboard/market">
          <div onClick={()=>{
            setSelected("Market")
          }} className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="Market" ? "bg-primary text-white" : ""} transition-all`}>
            <MapPinCheckIcon size={24} />
            <p className="">Local Market</p>
          </div>
        </Link>
        <Link href="/dashboard/orders">
          <div onClick={()=>{
            setSelected("Orders")
          }} className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="Orders" ? "bg-primary text-white" : ""} transition-all`}>
            <Logs size={24} />
            <p className="">My Orders</p>
          </div>
        </Link>

        <Link href="/dashboard/transactions">
          <div onClick={()=>{
            setSelected("Transactions")
          }} className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="Transactions" ? "bg-primary text-white" : ""} transition-all`}>
            <IndianRupee size={24} />
            <p className="">Transactions</p>
          </div>
        </Link>


        <Link href="/dashboard/Analytics">
          <div onClick={()=>{
            setSelected("Analytics")
          }} className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="Analytics" ? "bg-primary text-white" : ""} transition-all`}>
            <ChartNoAxesCombinedIcon size={24} />
            <p className="">Analytics</p>
          </div>
        </Link>
       

        <Link href="/dashboard/settings">
          <div onClick={()=>{
            setSelected("Settinggs")
          }} className={` flex gap-2 rounded-md p-3 mt-2 ${selected=="Settinggs" ? "bg-primary text-white" : ""} transition-all`}>
            <Settings size={24} />
            <p className="">Settings</p>
          </div>
        </Link>
      </div>


      <Link href="/">
          <div onClick={()=>{
             toast.success("Logged Out")
          }} className={` flex gap-2 fixed bottom-8  rounded-md p-10 mt-2  transition-all`}>
            <LogOut size={24} />
            <p className="">Logout</p>
          </div>
        </Link>
    </div>
  );
};

export default SideBar;
