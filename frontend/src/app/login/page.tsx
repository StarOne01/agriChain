"use client";

import Image from "next/image";
import { useState } from "react";
import axiosinstance from "../../../axiosconfig";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

interface PageProps {}

const Page = ({}: PageProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [islogin, setIslogin] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");

  const nav = useRouter();
  const handleLogin = async () => {

    try {
      const res = await axiosinstance.post("auth/loginFarmer", {
        email: email,
        password: password,
      });
  
      const data = res.data;
      console.log(data);

      if (data.farmer) {
        nav.push("/dashboard");
        localStorage.setItem("farmer", JSON.stringify(data.farmer));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleRegister = async()=>{
      try {
        
       const res = await axiosinstance.post("auth/registerFarmer",{
          email:email,
          phone:phone,
          password:password
        })
        const data = res.data;
        console.log(data);
        setIslogin(true);
        toast.success("Account Created Successfully");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.log(error.message);
        
      } 

  }

  return (
    <div className=" flex w-full h-screen font-inter ">
      <ToastContainer/>
      <Image
        className="w-[50%] h-screen"
        alt="bg"
        width={100}
        height={100}
        src={
          "https://media.istockphoto.com/id/1465642013/photo/a-vibrant-green-soybean-field-nestled-in-a-natural-setting.jpg?s=612x612&w=0&k=20&c=ukaUysAFOmCHYpOkVHZi-dYjKXNMh-QnIq40KEG3NuQ="
        }
      />
      <div className="flex flex-col w-[50%] h-screen items-center justify-center ">
        <div>
          <h1 className=" text-2xl">
            {islogin ? "Login" : "Register"} Into Your{" "}
            <span className=" text-primary">AgriChain</span> Account
          </h1>

          {islogin && (
            <div className=" flex flex-col gap-1 mt-4">
              <input
                type="email"
                placeholder="Email"
                className=" border-2 border-gray-300 p-2 m-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className=" border-2 border-gray-300 p-2 m-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => {
                  handleLogin();
                }}
                className=" bg-primary text-white p-2 m-2"
              >
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <span
                  className=" text-primary cursor-pointer"
                  onClick={() => {setIslogin(false)
                  setEmail("");
                  setPhone("");
                  setPassword("");
                  }}
                >
                  Register
                </span>
              </p>
            </div>
          )}

          {!islogin && (
            <div className=" flex flex-col gap-1 mt-4">
              <input
                type="email"
                placeholder="Email"
                className=" border-2 border-gray-300 p-2 m-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                   <input
                type="text"
                placeholder="Phone"
                className=" border-2 border-gray-300 p-2 m-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}  
              />
              <input
                type="password"
                placeholder="Password"
                className=" border-2 border-gray-300 p-2 m-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
         
              <input
                type="password"
                placeholder="Confirm Password"
                className=" border-2 border-gray-300 p-2 m-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={()=>{
                if(password===confirmPassword){
                  HandleRegister();
                }else{
                  toast.error("Passwords do not match");
                }
              }} className=" bg-primary text-white p-2 m-2">
                Register
              </button>
              <p>
                Already have an account?{" "}
                <span
                  className=" text-primary cursor-pointer"
                  onClick={() => setIslogin(true)}
                >
                  Login
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
