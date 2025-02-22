"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Axiosinstance from "../../../../../axiosconfig";

interface PageProps {}

const Page = ({}: PageProps) => {
  const id = useParams().id;
  const [productdetails, setProductdetails] = useState(null);
  const [seller, setSeller] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await Axiosinstance.get(`products/getProductById/${id}`);
      const data = res.data;
      setProductdetails(data.product);
      console.log(data.product);
      // fetchseller(data.product.sellerId);
    } catch (error) {
      console.log(error);
    }
  };
//   const {userid ,sellerId, productid , quantity , address} = req.body;
const user = localStorage.getItem("user");
const userid = JSON.parse(user)._id;
//  console.log(userid);
    const nav = useRouter()
  const handleOrder = async () => {
    try {
      const res = await Axiosinstance.post("orders/addOrder", {
        userid: userid,
        sellerId: productdetails.sellerId,
        productid: productdetails._id,
        quantity: 1,
        address: " Rathinam Tech Park, Pollachi Main Road, Eachanari, Coimbatore, Tamil Nadu 641021",
      });
      const data = res.data;
      nav.push("/landing");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" font-inter m-12">
      <h1 className="  text-xl font-bold">CheckOut</h1>
      <div className=" bg-green-100 p-6 rounded-md my-3">
        {productdetails && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <h1>Product Name : </h1>
              <p>{productdetails.productName}</p>
            </div>
            <div className=" flex gap-1">
              <h1>Price : </h1>
              <p>{productdetails.productPrice}</p>
            </div>
          </div>
        )}
      </div>

      <h1 className="  text-xl font-bold">Payment</h1>

      <div className=" bg-green-100 p-6 rounded-md my-3">
        {productdetails && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <h1>Total Amount : </h1>
              <p>{productdetails.productPrice}</p>
            </div>
            <div className=" flex gap-1">
              <h1> Delivery Fee: </h1>
              <p>40 Rs</p>
            </div>
            <div className=" flex gap-1">
              <h1> Total Amount : </h1>
              <p>{productdetails.productPrice + 40}</p>
              </div>
          </div>
        )}
      </div>

       <div className=" text-center mt-2">
          <button onClick={()=>{
              handleOrder()
          }} className="bg-black rounded-md  text-white px-2 py-1">Place Order</button>
       </div>
    </div>
  );
};

export default Page;
