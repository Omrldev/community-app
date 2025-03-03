import Navbar from "@/components/Navigation/Navbar/Navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
        <Navbar />
        
        {children}
    </main>
  )
};

export default RootLayout;
