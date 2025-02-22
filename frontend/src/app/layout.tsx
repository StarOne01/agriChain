import type { Metadata } from "next";
import { Geist, Geist_Mono  , Inter ,Manrope } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "AgriChain - Connecting Indian Farmers to the Consumers",
  description: "Connecting Indian Farmers to the Consumers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/187/187039.png" />
      </head>
      <body
        className={` ${manrope.variable} ${inter.variable} antialiased`}
      >
        
        {children}

     
      </body>
    </html>
  );
}
