"use client";

import { useParams } from "next/navigation";
import Axiosinstance from "../../../../axiosconfig";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PageProps {}

const Page = ({}: PageProps) => {
  const id = useParams().id;
  const [productdetails, setProductdetails] = useState([]);
  const [seller, setSeller] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await Axiosinstance.get(`products/getProductById/${id}`);
      const data = res.data;
      setProductdetails(data.product);
      console.log(data.product);
     fetchseller(data.product.sellerId);
    } catch (error) {
      console.log(error);
    }
  };
   const nav = useRouter()
  const fetchseller = async (id) => {
    try {
         const res = await Axiosinstance.get(`products/getSellerDetails/${id}`);
            const data = res.data;
            console.log(data.seller);
            setSeller(data.seller);
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

   
  return (
    <div className=" font-inter">
      <div className="flex  px-7 items-center">
        <div className="bg-white flex gap-7  p-4 rounded-lg">
          <img
            src={productdetails.productImage}
            alt="product"
            className="w-[400px] h-[400px] object-cover rounded-lg"
          />
          <div>
            <h1 className="text-lg font-bold">{productdetails.productName}</h1>
            <p>{productdetails.productDescription}</p>
            <p>Price: {productdetails.productPrice}</p>
            <p>
              Stock: <span className="text-primary">Instock</span>
            </p>
            <div className=" flex gap-2 mt-3">
            <button className="bg-primary text-white px-2 py-1 rounded-lg">
              Add to Cart
            </button>
            
            <button onClick={()=>{
                nav.push(`checkout/${productdetails._id}`)
            }} className="bg-black text-white px-2 py-1 rounded-lg">
              Buy Now
            </button>
            </div>
           
            <div className=" mt-4">
              <h1 className="text-lg font-bold">Farmer Details</h1>
                {
                    seller && (
                    <div>
                        <p>Name : {seller.name}</p>
                        <p>Mail : {seller.email}</p>
                    </div>
                    )
                }
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
