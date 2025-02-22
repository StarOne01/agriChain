import { IndianRupee ,Logs ,Users , ClipboardList } from "lucide-react";
import SideBar from "../../../component/Sidebar";

interface PageProps {}

const Page = ({}: PageProps) => {
  return <div className=" bg-gray-200 font-inter w-[80%] h-screen">
        
       <p className=" mx-5 my-2 text-xl font-bold ">Overview</p>
       <header className="flex">
         
        <div className=" bg-white  p-4 m-3 px-6">
           <p className=" font-bold text-lg">Total Orders</p>
            <p className="  text-gray-500 text-sm">Last 7 Days</p>
            <div className="flex items-center  gap-1">
              <Logs size={24} />
            <p className=" font-bold text-3xl py-2">10</p>
            </div>
        </div>
        <div className=" bg-white  p-4 m-3">
           <p className=" font-bold text-lg">Total Revenue</p>
            <p className="  text-gray-500 text-sm">Last 7 Days</p>
            <div className="flex items-center  gap-1">
              <IndianRupee size={24} />
            <p className=" font-bold text-3xl py-2">1320</p>
            </div>
        </div>
        <div className=" bg-white  p-4 m-3">
           <p className=" font-bold text-lg">Total Customers</p>
            <p className="  text-gray-500 text-sm">Last 7 Days</p>
            <div className="flex items-center  gap-1">
              <Users size={24} />
            <p className=" font-bold text-3xl py-2">1</p>
            </div>
        </div>
        <div className=" bg-white  p-4 m-3">
           <p className=" font-bold text-lg">Pending Orders</p>
            <p className="  text-gray-500 text-sm">Last 7 Days</p>
            <div className="flex items-center  gap-1">
              <ClipboardList size={24} />
            <p className=" font-bold text-3xl py-2">2</p>
            </div>
        </div>
      
       </header>



  </div>;
};

export default Page;
