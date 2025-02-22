"use client";

import { useEffect, useState } from "react";
import Axiosinstance from "../../../../axiosconfig";
import Image from "next/image";
import axios from "axios";
import { SparkleIcon } from "lucide-react";

interface PageProps {}

const Page = ({}: PageProps) => {
  const [products, setProducts] = useState([]);
  const [farmers, setFarmers] = useState<any>(null); // Explicitly typing as 'any'
  const seller = localStorage.getItem("farmer");
  const Cloudurl = "https://api.cloudinary.com/v1_1/dftwre0on/image/upload";
  const [img, setImg] = useState(null);

  const [isloading, setIsloading] = useState(false);
  const [result, setResult] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    image: "",
    userid: "",
  });

  const handleFairPrice = async () => {
    setIsloading(true);
    try {
      const res = await Axiosinstance.post("/generate-price", {
        name: newProduct.name,
      });
      console.log("Fair price:", res.data);
      setResult(JSON.parse(res.data));
      setIsloading(false);
    } catch (error) {
      console.log("Error getting fair price:", error);
      setIsloading(false);
    }
  };

  const handleImgToCloud = async (img) => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "User_imges");
    try {
      const Cloudresponse = await axios.post(Cloudurl, formData);
      const url = Cloudresponse.data.url;
      return url;
    } catch (error) {
      return error.message;
    }
  };

  //   {
  //     "name": "Fresh Tomatoes",
  //     "price": 50,
  //     "stock": 100,
  //     "description": "Organic farm-grown tomatoes rich in vitamins.",
  //     "category": "Vegetables",
  //     "image": ["https://example.com/images/tomato.jpg"],
  //     "userid": "seller123"
  //   }

  const [isopen, setIsopen] = useState(false);

  const handleAddProduct = () => {
    setIsopen(true);
  };

  const handleProductChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductSubmit = async () => {
    try {
      const res = await Axiosinstance.post("products/addProduct", newProduct);
      console.log("Product added:", res.data);
      fetchProducts();
      setIsopen(false);
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await Axiosinstance.get(
        `products/getProductBySellerId/${farmers._id}`
      );
      setProducts(res.data.product);
      console.log("Products fetched:", res.data.product);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  useEffect(() => {
    if (seller) {
      const parsedSeller = JSON.parse(seller);
      setFarmers(parsedSeller);
      console.log("Farmer data:", parsedSeller);
    }
  }, []);

  useEffect(() => {
    if (farmers) {
      fetchProducts();
    }
  }, [farmers]); // Run this effect when `farmers` changes

  return (
    <div className="bg-gray-200 font-inter w-[80%]">
      <h1 className="p-10 text-xl">My Products</h1>
      <div className="mx-10">
        <button
          onClick={() => setIsopen(true)}
          className="bg-primary rounded-md px-2 py-1"
        >
          Add a Product
        </button>
        {isopen && (
          <div
            onClick={() => {
              setIsopen(false);
              setResult(null);
              setImg(null);
            }}
            className="flex flex-col  fixed items-center justify-center    left-0 top-0 w-full h-screen backdrop-blur-md z-20"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className=" bg-white mx-2 rounded-sm w-[50%] overflow-y-scroll  h-[50%]"
            >
              <h1 className=" px-5 py-3 font-bold">Add Product</h1>
              <div className="mx-2">
                <input
                  onChange={handleProductChange}
                  name="name"
                  placeholder="Product Name"
                  className="p-2 my-2 w-[90%] rounded-sm"
                  type="text"
                />
                <input
                  onChange={handleProductChange}
                  name="price"
                  placeholder="Price"
                  className="p-2 my-2 w-[90%] rounded-sm"
                  type="number"
                />
                {result && (
                  <div className="flex flex-col p-2 bg-green-200 gap-1">
                    <p>{result.description}</p>
                    <p>Price: {result.price} RS Per Quintal</p>
                    <p>Price: {result.price/100} RS Per KG</p>
                  </div>
                )}
                {
                  !result && (
                
                <div className=" flex items-center  gap-1">
                  <SparkleIcon />
                  <button
                    onClick={() => {
                      handleFairPrice();
                    }}
                    className="px-1 py-1 cursor-pointer rounded-lg"
                  >
                    {isloading ? "Analysing..." : "Get Fair Price"}
                  </button>
                </div>
                  )
                }
                <input
                  onChange={handleProductChange}
                  name="stock"
                  placeholder="Stock"
                  className="p-2 my-2 w-[90%] rounded-sm"
                  type="number"
                />
                <input
                  onChange={handleProductChange}
                  name="description"
                  placeholder="Description"
                  className="p-2 my-2 w-[90%] rounded-sm"
                  type="text"
                />
                <input
                  onChange={handleProductChange}
                  name="category"
                  placeholder="Category"
                  className="p-2 my-2 w-[90%] rounded-sm"
                  type="text"
                />
                {img && (
                  <Image
                    alt="tempimg"
                    src={URL.createObjectURL(img)}
                    width={100}
                    height={100}
                    className="object-cover w-28 h-28 border-2 border-black rounded-xl my-1"
                  />
                )}
                <input
                  name="image"
                  type="file"
                  onChange={(e) => {
                    setImg(e.target.files[0]);
                  }}
                  className="p-2 my-2 w-[90%] rounded-sm"
                />

                <button
                  onClick={() => {
                    handleImgToCloud(img).then((url) => {
                      setNewProduct({
                        ...newProduct,
                        image: url,
                        userid: farmers._id,
                      });
                      handleProductSubmit();

                      console.log("Image url:", url);
                    });
                  }}
                  className="bg-primary py-1 px-2 rounded-lg my-3"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )}
        <div className=" flex flex-wrap ">
          {products &&
            products.map((product) => (
              <div key={product._id} className="flex flex-col p-5  my-4">
                <Image
                  alt="product"
                  src={product.productImage[0].trim()}
                  width={120}
                  className="object-cover w-28 h-28 border-2 border-black rounded-xl my-1"
                  height={120}
                />

                <h1 className=" font-bold">{product.productName}</h1>
                <p className="text-sm">Stock: {product.stock}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
