"use client";

import { useEffect, useState } from "react";
import Axiosinstance from "../../../../axiosconfig";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';



const Page = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  
  const seller = localStorage.getItem("farmer");
  const sellerId = seller ? JSON.parse(seller)._id : null;

  const fetchOrders = async () => {
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

  const getproduct = (id) => {
    let product = products.find((product) => product._id === id);
    return product ? product.productName : "Unknown Product";
  };

  const formatXAxis = (tickItem) => {
    return getproduct(tickItem); // Correctly format X-axis labels
  };

  const SalesGraph = () => (
    <ResponsiveContainer width={500} height={500}>

      <LineChart
        data={orders}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      > 
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productid" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
  const RevenueBreakdownData = () => {
    let productMap = {};

    orders.forEach((order) => {
      productMap[order.productid] = (productMap[order.productid] || 0) + order.totalAmount;
    });

    return Object.keys(productMap).map((id) => ({
      productName: getproduct(id),
      totalRevenue: productMap[id],
    }));
  };

  const CostBreakdownBarChart = () => {
    const data = RevenueBreakdownData();

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalRevenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  const top3Products = () => {
    let productMap = {};
    
    orders.forEach((order) => {
      productMap[order.productid] = (productMap[order.productid] || 0) + 1;
    });

    let sortedProducts = Object.keys(productMap)
      .sort((a, b) => productMap[b] - productMap[a])
      .slice(0, 3);

    return sortedProducts.map((id) => getproduct(id));
  };

  const RevenueBreakdown = () => {
    let productMap = {};

    orders.forEach((order) => {
      productMap[order.productid] = (productMap[order.productid] || 0) + order.totalAmount;
    });

    return productMap;
  };

 


//   const SmartRecommendations = () => {
//     let productMap = {};
    
//     orders.forEach((order) => {
//       productMap[order.productid] = (productMap[order.productid] || 0) + 1;
//     });

//     let mostOrderedProduct = Object.keys(productMap)
//       .sort((a, b) => productMap[b] - productMap[a])[0];

//     return mostOrderedProduct ? getproduct(mostOrderedProduct) : "No Recommendations Yet";
//   };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className=" font-inter ">
      <h1 className=" text-xl  font-bold p-6">Sales Graph</h1>
      <SalesGraph />

        <h1 className=" text-xl  font-bold p-6">Revenue Breakdown</h1>

        <CostBreakdownBarChart />

        

         
    </div>
  );
};

export default Page;
