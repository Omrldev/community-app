import Navbar from "@/components/Navigation/Navbar/Navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative">
        <Navbar />
        
        <div className="max-w-5xl">
          {children}
        </div>
    </main>
  )
};

export default RootLayout;
