// Import your globals here
// import "@/styles/globals.css";

import { Inter } from "next/font/google";
import SideBar from "../../../component/Sidebar";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Dashboard",
    description: "Sample description",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
            <div className="flex">
                <SideBar/>
                {children}</div>
    );
}