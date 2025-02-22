"use client";

import Image from "next/image";
import Axiosinstance from "../../../axiosconfig";
import { useEffect, useState } from "react";
import Link from "next/link";

interface PageProps {}

const Page = ({}: PageProps) => {
  
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await Axiosinstance.get("products/getProducts");
      const data = res.data;
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" font-inter">
      <div className=" bg2  mx-10 h-56 m-4 flex  flex-col items-center justify-center  rounded-lg">
        <h1 className=" text-4xl  font-bold  text-white">
          Farm Fresh To Your Doorstep
        </h1>
        <p className=" text-white">
          Order fresh fruits and vegetables from your local farmers
        </p>
      </div>

      <div className=" mx-10 ">
        <p className="text-lg font-bold">Explore Products</p>

        <div>
          <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products &&
              products.map((product: any) => {
                return (
                  <Link key={`landing/${product._id}`} href={`landing/${product._id}`}>
                  <div
                    onClick={() => {
                       
                    }}
                    className="bg-white rounded-lg "
                  >
                    <Image
                      className=" object-cover rounded-xl w-[200px] h-[200px] "
                      src={product.productImage[0].trim()}
                      alt="product"
                      width={200}
                      height={200}
                    />
                    <div className=" pt-2">
                      <p>{product.productName}</p>
                      <p>Rs : {product.productPrice} </p>
                    </div>
                  </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
