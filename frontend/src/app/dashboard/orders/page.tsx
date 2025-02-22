"use client";

import { useEffect, useState } from "react";
import Axiosinstance from "../../../../axiosconfig";

interface PageProps {}

const Page = ({}: PageProps) => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const seller = localStorage.getItem("farmer");
  const sellerId = JSON.parse(seller)._id;
  const fetchorders = async () => {
    try {
      const res = await Axiosinstance.get(
        `orders/getOrdersByFarmer/${sellerId}`
      );
      console.log(res.data);
      
      const data = res.data;
      setOrders(data.orders);
        setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
   
  let getproduct = (id) => {
    let product = products.find((product) => product._id === id);
    return product.productName;
  }
  
  useEffect(() => {
    fetchorders();
  }, []);

  return (
    <div className="bg-slate-50 font-inter  p-8 w-[80%]">
      <h1 className="text-xl font-bold">Orders</h1>
        <div className="flex flex-col">
            {orders&&orders.map((order) => (
            <div key={order._id} className="flex flex-col bg-white p-4 my-4">
                <div className="flex justify-between">
                <p>OrderId: {order._id}</p>
                <p>Total Amount: {order.totalAmount} Rs</p>
                </div>
                <div className="flex justify-between">
                <p>Product Name : {getproduct(order.productid)}</p>
                <p>Product Id : {order.productid}</p>
                <p>Status: <span className=" capitalize font-bold">{order.orderStatus}</span></p>
                </div>
            </div>
            ))}
            </div>
    </div>
  );
};

export default Page;
