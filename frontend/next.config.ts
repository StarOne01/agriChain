import type { NextConfig } from "next";
// allow img from any domain
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["*"],
  },

};

export default nextConfig;
